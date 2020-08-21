module.exports = {
  validateLitter
};

function validateLitter(req, res, next) {
  //todo destructor litter from body
  const litter = req.body;
  console.log("VALIDATE")
  if (!litter.ownerName, !litter.breed_date, !litter.dam, !litter.sire) {
    res.status(400).json({
      message: "Please provide all litter information."
    }).end()
  } else {
    next()
  }
}
