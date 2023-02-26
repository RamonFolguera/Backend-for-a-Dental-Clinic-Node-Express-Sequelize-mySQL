const express = require('express');
const { User } = require('./models/index')
const db = require('./db/db.js');
require('dotenv').config()

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;


app.get('/welcome', (req, res) => {
  return res.send("Bienvenido a mi app")
})

app.post('/users', async (req, res) => {
  const { name, first_surname, last_surname, phone, email, address } = req.body;
//Guardar información
const newUser = {
  name,
  first_surname,
  last_surname,
  phone,
  email,
  address
}
const user = await User.create(newUser)

  console.log(req.body)
  return res.json(user)
})

app.get('/users', async(req,res) => {

  const users= await User.findAll();
  return res.json(users);
})

app.get("/users/:id", async (req,res) => {
  const userId = req.params.id;
  const user = await User.findByPk(userId)
  return res.json(user);
})

app.delete('/users/:id', async(req,res) => {
  const userId = req.params.id;
  const deleteUser = await User.destroy ({
    where: { id: userId }})
    return res.json(deleteUser)

  
})


  db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));   
