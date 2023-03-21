const express = require('express');
const cors = require('cors');

const db = require('./db/db.js');
require('dotenv').config()

const app = express();

const router = require('./router'); 

app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 4000;

  db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server running on port " + PORT));
  })
    .catch((err) => console.log(err.message));  
