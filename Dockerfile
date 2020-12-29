FROM node:12

WORKDIR /src
COPY package*.json /src/

RUN yarn install

COPY . /src/

RUN yarn build

EXPOSE 8080