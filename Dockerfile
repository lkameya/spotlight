FROM smebberson/nodejs
COPY . /app
WORKDIR /app 
RUN ls
RUN node index.js
