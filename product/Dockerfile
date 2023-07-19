FROM node:16

RUN mkdir -p /product

WORKDIR /product

COPY package*.json /product

RUN npm install

COPY . /product

CMD ["npm", "run", "dev"]
