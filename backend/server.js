const express = require("express");
const app = express();
const cors = require('cors')

// dotenv to hide data, store them in .env file
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const API_KEY = process.env.API_KEY;
const MONGO_LINK = process.env.MONGO_LINK;

const mongoose = require('mongoose')
const Cat = require('./schema');

//Mongo connect // paste things in .env link
mongoose.connect(`${MONGO_LINK}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.post('/', (req, res) => {
  //req.body.name would be posted from frontend
  Cat.findOne({name: req.body.name}, (err, doc) => {
    if (err) throw err;
    if (doc) {
      res.send(doc.cat);
    }
  }) 
})

//Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});