const express = require("express");
const router = express.Router();
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./database");

app.get("/", cors(), (req, res) => {});

const authController = require("./controllers/authController");

router.post("/", authController.login);
router.post("/register", authController.register);
module.exports = router;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
