# Etapa 1: Construcción de la aplicación
FROM node:16-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos esenciales para instalar dependencias
COPY package.json package-lock.json ./

# Instalar dependencias (caché eficiente)
RUN npm ci --only=production

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:1.21-alpine

# Eliminar archivos de configuración innecesarios
RUN rm /etc/nginx/conf.d/default.conf

# Copiar una configuración de Nginx personalizada (opcional)
COPY nginx.conf /etc/nginx/conf.d

# Copiar los archivos construidos desde la etapa anterior
COPY --from=builder /app/build /usr/share/nginx/html

# Exponer el puerto que usará Nginx para servir la aplicación
EXPOSE 80

# Comando por defecto para ejecutar el servidor
CMD ["nginx", "-g", "daemon off;"]
