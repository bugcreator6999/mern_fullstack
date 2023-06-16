const router = require("express").Router();
const User = require("../models/User");

// ユーザ登録
router.post("/register", async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (error) {
    return req.statusCode(500).json(err);
  }
});

// router.get("/", (req, res) => {
//   res.send("auth router");
// });

module.exports = router;
