FROM finizco/nginx-node:latest
COPY . /app
WORKDIR /app 
EXPOSE 80
RUN npm install
RUN node index.js
