FROM node:22-alpine3.18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
