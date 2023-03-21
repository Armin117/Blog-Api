import express from "express";
import mongoose from "mongoose";
import blogRoute from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import env from 'dotenv'
import cors from "cors";
env.config()
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRoute);

 mongoose.connect(
   "mongodb+srv://admin:admin1234@cluster0.2fl4roy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
