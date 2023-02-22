const express = require('express');
const app = express();
const router = require('./router');
const { sequelize } = require("./models/index");
const PORT = 3000;

app.use(express.json());
app.use(router);

sequelize.sync({force: true});
