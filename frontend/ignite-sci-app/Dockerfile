FROM node:14.17.3

WORKDIR /code

ENV PORT 80

COPY package.json /code/package.json

RUN npm install

COPY . /frontend

CMD [ "node", "src/App.js"]

# FROM node:13.12.0-alpine

# WORKDIR /code

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /code/node_modules/.bin:$PATH

# # install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# # add app
# COPY . ./

# # start app
# CMD ["npm", "start"]