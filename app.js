const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.get("/news", (req, res) => {
  res.json({ message: "News" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
