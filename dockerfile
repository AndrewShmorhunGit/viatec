FROM node:18.16.0

WORKDIR /app

COPY package.json package-lock.json tsconfig.json jest.config.js .env ./

RUN npm install

COPY next.config.js ./next.config.js

COPY src ./src
COPY public ./public

CMD ["npm","run","dev"]