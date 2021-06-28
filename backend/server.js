const express = require("express");

// dotenv to hide data, store them in .env file
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const API_KEY = process.env.API_KEY;
const MONGO_LINK = process.env.MONGO_LINK;

console.log(MONGO_LINK);

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});