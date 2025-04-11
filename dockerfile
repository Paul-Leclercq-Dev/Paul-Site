# Étape 1 : Construction de l'application React
FROM node:18 AS build
WORKDIR /app

# Copier les fichiers nécessaires
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Construire l'application React
RUN npm run build && ls -l dist

# Étape 2 : Utilisation de Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers de build générés dans le répertoire de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copier le fichier de configuration Nginx personnalisé
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80 pour le service
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]