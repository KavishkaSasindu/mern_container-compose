#import base image
FROM node:22-alpine

#create a working directory
WORKDIR /app

#copy package files
COPY package*.json ./

#install dependencies
RUN npm install

#copy all project files
COPY . . 

#expose port 
EXPOSE 5173

#command to run frontend
CMD [ "npm" , "run" , "dev" ]