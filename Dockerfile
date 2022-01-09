FROM node:14.18.2 as run
WORKDIR /api

COPY package.json .

RUN npm install --only=production
COPY  /dist/apps/api .

CMD node main

