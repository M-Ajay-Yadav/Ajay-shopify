const router = require("express").Router();

router.get("/products", (req, res) => {
  res.status(200).json([
    {
      item: "samsung",
      price: "21000",
      description:
        "the best deal with best quality display and latest android ",
    },
    {
      item: "oppo",
      price: "11000",
      description: "the best deal with best camera quality",
    },
  ]);
});

module.exports = router;
