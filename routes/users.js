const router = require("express").Router();
const User = require("../models/User");

// CRUD
// ユーザ情報の更新
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("更新が完了しました");
    } catch (error) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("アカウントが違うため更新できません");
  }
});

// ユーザ情報の削除
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("削除が完了しました");
    } catch (error) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("アカウントが違うため削除できません");
  }
});

// ユーザ情報の取得
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    return res.status(500).json(err);
  }
});

// router.get("/", (req, res) => {
//   res.send("users router");
// });

module.exports = router;
