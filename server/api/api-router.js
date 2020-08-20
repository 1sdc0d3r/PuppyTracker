const router = require("express").Router();

//* ROUTES
// const authRouter = require("./routes/authRouter");
const litterRouter = require("./routes/litterRouter")

//* MIDDLEWARE
// const restricted = require("./middleware/restricted");

// router.use("/auth", authRouter);
router.use("/litter", litterRouter)

router.use("/", (req, res) => {
  res.status(200).json({
    api: "up"
  });
});

module.exports = router;
