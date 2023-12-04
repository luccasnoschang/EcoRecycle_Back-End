import User from "../models/User.js";
import express from 'express';

const user = express.Router();

user.post("/find", async (req, res) => {

  const query = req.query.email;

  console.log(query)

  const filtro = query ? { email: query } : {};
  console.log(filtro)

  const users = await User.findAll({
    where: filtro,
    // name: 'vinicios',

  });
  console.log(users)
  console.log(query)
  console.log(filtro)
  console.log(filtro)
  res.json(users);
});

user.post("/new", async (req, res) => {
  const { nome, email, password, unidade, idCondominio } = req.body;

  const newUser = new User({
    nome: nome,
    email: email,
    password: password,
    unidade: unidade,
    idCondominio: idCondominio
  });

  const saveUser = async () => {
    const savedUser = await newUser.save();
    console.log(users)
    console.log(query)
    console.log(filtro)
    console.log(filtro)
    res.json(savedUser);
  };

  saveUser();
});


export default user;
