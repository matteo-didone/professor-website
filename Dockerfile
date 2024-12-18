FROM node:20-alpine

WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto dei file del progetto
COPY . .

# Esponi la porta 3000
EXPOSE 3000

# Avvia l'app in modalità sviluppo
CMD ["npm", "run", "dev"]