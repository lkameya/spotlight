FROM smebberson/nodejs
COPY ./client/build /app 
RUN chmod -R 777 /app
RUN ls
RUN node ./index.js
