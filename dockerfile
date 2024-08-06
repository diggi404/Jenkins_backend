FROM node:latest
WORKDIR /app
COPY package*.json /app/
COPY . /app/
RUN npm install
CMD [ "npm", "start" ]