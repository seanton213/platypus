FROM node:12

WORKDIR /src
COPY package*.json /src/

RUN yarn install

COPY . /src/

EXPOSE 8080