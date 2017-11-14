# Typescript Client Server Boilerplate

This is a boilerplate environment for typescript client-server applications developed with Grunt and Require.js

Code is developed in the ```src``` folder:   
Files in ```client``` make part of the client code, files in the ```server``` folder corrispondingly of the server code. Files in ```commons``` make part of both systems.

Client compilation through: ```grunt client```  
Server compilation through: ```grunt server```
Server can be started through: ```npm start```

The client code will be optimized by require.js. 

Entrypoint for the client is the main function ```src/client/main.ts```  
Entrypoint for the server is the file ```src/server/index.ts```