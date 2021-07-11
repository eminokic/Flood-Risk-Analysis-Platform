FROM node:14.17.3

WORKDIR /code

ENV PORT 80

COPY package.json /code/package.json

RUN npm install

COPY . /frontend

CMD [ "node", "src/App.js"]
