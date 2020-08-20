module.exports = {
  validateLitter
};

function validateLitter(req, res, next) {
  //todo destructor litter from body
  const litter = req.body;
  console.log({
    litter
  })
  if (!litter.owner_name, !litter.breed_date, !litter.dam, !litter.sire) {
    res.status(400).json({
      message: "Please provide all litter information."
    }).end();
  }
  next();
}


function validateUserBody(req, res, next) {
  const user = req.body;
  if (!user.first_name || !user.last_name || !user.email) {
    res.status(400).json({
      message: "please provide name and email"
    }).end();
  } else if (!user.username || !user.password) {
    res
      .status(400)
      .json({
        message: "please provide username and password"
      })
      .end();
  }
  next();
}
