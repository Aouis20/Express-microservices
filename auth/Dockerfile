FROM node:16

RUN mkdir -p /auth

WORKDIR /auth

COPY package*.json /auth

RUN npm install

COPY . /auth

EXPOSE 8081

CMD ["npm", "run", "dev"]
