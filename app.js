const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/login", (req, res) => {
  res.json({ message: "login" });
});

app.get("/news", (req, res) => {
  res.json({ news: [
    {
      title: "Prueba1",
      body: "probandolala",
      author: "russ",
      image: "https://www.teamliquid.com/images/converted/2c8d4efaf6310b5903e53db6739c7fc10e4984bf.jpg"
    },
    {
      title: "Prueba2",
      body: "probandolala2",
      author: "russ2",
      image: "hola2"
    },
    {
      title: "Prueba3",
      body: "probandolala3",
      author: "russ3",
      image: "hola3"
    }
  ] });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
