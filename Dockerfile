# Usamos una imagen base de Nginx
FROM nginx:alpine

# Copiamos nuestros archivos al directorio raíz de Nginx
COPY . /usr/share/nginx/html

# Puerto expuesto
EXPOSE 80