FROM node
WORKDIR /srv/current/
COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npm start