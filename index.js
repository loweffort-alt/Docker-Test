import express from "express";
import mongoose from "mongoose";

const Animal = mongoose.model(
  "Animal",
  new mongoose.Schema({
    tipo: String,
    estado: String,
  })
);

const app = express();

const DB_name = "test";
const DB_password = "1234";
mongoose.connect(
  `mongodb://${DB_name}:${DB_password}@monguito:27017/miapp?authSource=admin`
);

app.get("/", async (_req, res) => {
  console.log("Listando...");
  const animales = await Animal.find();
  return res.send(animales);
});

app.get("/crear", async (_req, res) => {
  console.log("Creando...");
  await Animal.create({ tipo: "Chanchito", estado: "Feliz" });
  return res.send("ok");
});

app.listen(3000, () => console.log("listening..."));
