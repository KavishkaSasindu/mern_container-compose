#import base image
FROM node:22-alpine

#creating working directory
WORKDIR /app

#copy package files
COPY package*.json ./

#install dependencies
RUN npm install

#copy project files
COPY . . 

#expose the port
EXPOSE 5000

#command to run
CMD [ "npm","start" ]