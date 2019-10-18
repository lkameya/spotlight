FROM smebberson/nodejs
COPY ./client/build /app 
RUN chmod -R 777 /app
RUN node index.js