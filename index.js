const express = require('express');
const app = express();
//Importo el método de conexion a la base de datos
const db = require("./db/db");
const router = require('./router');
const { sequelize } = require("./models/index");
const PORT = 3000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  db.authenticate()
    .then(() => {
      console.log("Connected to the database, sync is ok");
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
})