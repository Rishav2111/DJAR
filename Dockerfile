FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN chmod +x ./node_modules/.bin/concurrently
CMD ["npm", "start"]
