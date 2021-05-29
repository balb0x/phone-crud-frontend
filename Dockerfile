FROM node:14.17.0-alpine AS build-stage

WORKDIR /opt/web
COPY package.json yarn.lock ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run build

FROM nginx:1.15
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /opt/web/build/ /usr/share/nginx/html
