const router = require("express").Router();

//* ROUTES
// const authRouter = require("./routes/authRouter");
const litterRouter = require("./routes/litterRouter")
const puppyRouter = require("./routes/puppyRouter")
const ownerRouter = require("./routes/ownerRouter")

//* MIDDLEWARE
// const restricted = require("./middleware/restricted");

// router.use("/auth", authRouter);
router.use("/litter", litterRouter)
router.use("/puppy", puppyRouter)
router.use("/owner", ownerRouter)

router.use("/", (req, res) => {
  res.status(200).json({
    api: "up"
  });
});

module.exports = router;
