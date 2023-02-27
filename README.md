Project 4 - Backend for a dental clinic

Step 1 - Creation of package.json with npm init -y.
Step 2 - Creation of index.js on the main root. Creation of .gitignore with /node_modules in it.
Step 3 - We install express, nodemon, sequelize, sequelize-cli, mysql2
Step 4 - Sequelize init. We start sequelize.
Step 5 - Creation of script "dev": "nodemon index.js", to keep our server running.
Step 6 - npm run dev to start the server. ctrl + c to stop it. 


Step 7 - We require express in index.js, and instance app variable. Also assign a PORT to our server and use a listen method to start it:

```
const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => console.log("Server running on port: " + PORT));
```
