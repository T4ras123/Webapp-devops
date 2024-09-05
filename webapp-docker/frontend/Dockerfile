FROM node:19

WORKDIR /build

COPY package*.json ./

RUN yarn install

COPY ./ ./

EXPOSE 3000

CMD ["yarn", "start"]