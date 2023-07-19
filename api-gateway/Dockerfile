FROM node:16

RUN mkdir -p /api

WORKDIR /api

COPY package*.json /api

RUN npm install

COPY . /api

EXPOSE 3000

CMD ["npm", "run", "dev"]
