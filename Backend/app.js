const express = require("express");
const { json, urlencoded } = require("body-parser");
const userApiRoutes = require("./routes/userApi");
const mainApiRoutes = require("./routes/mainApi");
const productApiRoutes = require("./routes/productApi");
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({path:path.join(__dirname, '../.env')})

const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable credentials (cookies, Authorization headers)
};
const app = express();
const port = 8000;
app.use(cors(corsOptions));

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/', mainApiRoutes);
app.use("/api/user", userApiRoutes);
app.use("/api/product", productApiRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
