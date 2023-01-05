const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const UserRoute = require("./routes/UserRoute");

app.use(express.json());
app.use(cors());
app.use(UserRoute);

mongoose.connect(
  "mongodb+srv://farendivaz:fariz2002@cluster0.qz3akfx.mongodb.net/mern?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected"));

app.listen(3001, () => console.log("Server running"));

// app.get("/getUsers", (req, res) => {
//   UserModel.find({}, (err, result) => {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json(result);
//     }
//   });
// });

// app.post("/createUser", async (req, res) => {
//   const user = req.body;
//   const newUser = new UserModel(user);
//   await newUser.save();
//   res.json(user);
// });
