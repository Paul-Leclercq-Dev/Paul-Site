# Étape 1 : Construction de l'application React
FROM node:22-alpine AS build
WORKDIR /app

# Copier les fichiers de dépendances et installer avec un lockfile figé
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Construire l'application React
RUN npm run build

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