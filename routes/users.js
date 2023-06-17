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
// ユーザ情報の取得

// router.get("/", (req, res) => {
//   res.send("users router");
// });

module.exports = router;
