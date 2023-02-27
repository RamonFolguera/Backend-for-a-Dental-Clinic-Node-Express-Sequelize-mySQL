const express = require('express');
const { User } = require('./models/index')
const db = require('./db/db.js');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(usersRoutes);
const PORT = 3000;







  db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server running on port " + PORT));
})
    .catch((err) => console.log(err.message));  
