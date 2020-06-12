FROM node:14.2.0-buster-slim

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package-lock.json package.json ./

RUN npm install --silent

COPY --chown=node:node . .

CMD ["node", "index.js"]



