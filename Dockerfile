FROM smebberson/nodejs
COPY ./client/build /app 
RUN chmod -R 777 /app
RUN echo ls
RUN node ./index.js
