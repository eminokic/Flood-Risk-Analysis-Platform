FROM node:14.17.3

WORKDIR /frontend

ENV PORT 80

COPY package.json /code/package.json

RUN npm install

COPY . /code

CMD [ "node", "ignite-sci-app/src/App.js"]
