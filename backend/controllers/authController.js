const User = require("../models/User");

async function register(req, res) {
  // try {
  //   const user = new User({
  //     name: req.body.name,
  //     email: req.body.email,
  //     password: req.body.password,
  //   });
  //   await user.save();
  //   res.status(201).json({ message: "User registered successfully" });
  // } catch (error) {
  //   // Handle registration error
  //   console.error(error);
  //   res.status(400).json({ error: "Registration failed" });
  // }

  const { name, email, password } = req.body;

  const data = {
    name: name,
    email: email,
    password: password,
  };

  try {
    const check = await User.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await User.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
}

async function login(req, res) {
  // try {
  //   // Implement login logic here, including user authentication
  // } catch (error) {
  //   // Handle login error
  //   console.error(error);
  //   res.status(401).json({ error: "Login failed" });
  // }

  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
}

module.exports = {
  register,
  login,
};
