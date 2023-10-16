const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./database");

app.get("/", cors(), (req, res) => {});

const authController = require("./controllers/authController");

app.post("/", authController.login);
app.post("/register", authController.register);
app.post("/resetpassword", authController.resetPassword);
app.post("/editprofile", authController.editProfile);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
