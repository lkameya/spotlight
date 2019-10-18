FROM smebberson/nodejs
COPY . /app
WORKDIR /app 
EXPOSE 80
RUN ls
RUN node index.js
