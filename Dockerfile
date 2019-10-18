FROM finizco/nginx-node:latest
COPY . /app
WORKDIR /app 
EXPOSE 80
RUN ls
RUN node index.js
