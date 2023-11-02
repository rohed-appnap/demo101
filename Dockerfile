FROM node:16.18.0-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

RUN npm install --global pm2

EXPOSE 3000


CMD [ "pm2-runtime", "start", "npm", "--", "start" ]