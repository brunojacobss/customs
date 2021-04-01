FROM node:alpine as builder

WORKDIR /app
COPY package*.json ./
RUN yarn install 
COPY . .
RUN yarn build

FROM node:alpine as production
WORKDIR /app
COPY package*.json ./
RUN yarn install --prod
COPY --from=builder ./app/dist ./dist
CMD [ "node", "dist/index.js" ]