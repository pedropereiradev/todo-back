FROM node
WORKDIR /srv/current/
COPY package.json package-lock.json ./
RUN npm i
COPY . .
EXPOSE 80
CMD [ "npm", "start" ]