
const express = require('express')
const mongoose = require('mongoose')
const blogRoute = require('./routes/blog-routes')
const router = require('./routes/user-routes')
const env = require('dotenv')
const cors = require('cors')

env.config()
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRoute);

 mongoose.connect(
  process.env.DATA_BASE
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
