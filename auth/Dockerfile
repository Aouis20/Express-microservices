FROM node:16

RUN mkdir -p /auth

WORKDIR /auth

COPY package*.json /auth

RUN npm install

COPY . /auth

CMD ["npm", "run", "dev"]
