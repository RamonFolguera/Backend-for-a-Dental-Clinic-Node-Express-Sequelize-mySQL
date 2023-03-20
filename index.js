const express = require('express');
const cors = require('cors')

const db = require('./db/db.js');
require('dotenv').config()

const app = express();

const router = require('./router'); 

let corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  // methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  preflightContinue: false,
  // allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
  optionsSuccessStatus: 204
};

app.use(express.json());

app.use(cors(corsOptions))

app.use(router);

const PORT = process.env.PORT || 4000;

  db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server running on port " + PORT));
  })
    .catch((err) => console.log(err.message));  
