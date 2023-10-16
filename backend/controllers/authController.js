const user = require("../models/User");

async function register(req, res) {
  const { name, email, password } = req.body;

  const data = {
    name: name,
    email: email,
    password: password,
    phoneNo: "",
    rollNo: "",
    year: "",
    branch: "",
    section: "",
  };
  console.log(data);
  try {
    const check = await user.findOne({ email: email });
    if (check) {
      res.status(403).json("exist");
    } else {
      res.status(201).json("notexist");
      await user.insertMany([data]);
    }
  } catch (e) {
    res.status(500).json("fail");
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const check = await user.findOne({ email: email });

    if (check && check.password === password) {
      res.status(201).json({
        name: check.name,
        phoneNo: check.phoneNo,
        rollNo: check.rollNo,
        year: check.year,
        branch: check.branch,
        section: check.section,
        message: "exist",
      });
    } else {
      res.status(403).json({
        message: "notexist",
      });
    }
  } catch (e) {
    res.status(500).json("fail");
  }
  return;
}

async function resetPassword(req, res) {
  const { email, password } = req.body;

  try {
    const check = await user.findOne({ email: email });
    if (check) {
      await user.updateOne({ email: email }, { password: password });
      res.status(201).json("success");
    } else {
      res.status(403).json("fail");
    }
  } catch (e) {
    res.status(500).json("fail");
  }
}

async function editProfile(req, res) {
  const { email, phoneNo, rollNo, branch, year, section } = req.body;
  console.log(req.body);
  try {
    await user.updateOne(
      { email: email },
      {
        phoneNo: phoneNo,
        rollNo: rollNo,
        branch: branch,
        year: year,
        section: section,
      }
    );
    res.status(201).json("success");
  } catch (e) {
    res.status(500).json("fail");
  }
}

module.exports = {
  register,
  login,
  resetPassword,
  editProfile,
};
