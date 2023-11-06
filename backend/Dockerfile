FROM node:16.18.0-alpine as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:16.18.0-alpine

WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/docker-compose*.yml ./  
RUN npm install --only=production
COPY --from=build /app/.next ./.next

RUN npm install --global pm2

EXPOSE 5000


CMD [ "pm2-runtime", "start", "npm", "--", "start" ]