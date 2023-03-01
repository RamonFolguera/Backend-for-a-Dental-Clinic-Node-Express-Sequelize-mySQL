const express = require('express');
const { Sequelize } = require('sequelize');
const db = require('./db/db.js');
require('dotenv').config()
const app = express();
const router = require('./router'); 
app.use(express.json());
app.use(router);
const PORT = 3000;

db.then(() => {
    //Starting server
    let server= app.listen(PORT, () => console.log("Server running on port " + PORT));
    sequelize.sync()
        .then(()=>{
            server.close();
        });
})
.catch((err) => console.log(err.message));  
