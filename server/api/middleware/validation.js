module.exports = {
    validateLitter,
    validatePuppy,
    validateOwner
};

function validateLitter(req, res, next) {
    //todo destructor litter from body
    const litter = req.body;
    if (!litter.ownerName, !litter.breed_date, !litter.dam, !litter.sire) {
        res.status(400).json({
            message: "Please provide all litter information."
        }).end()
    } else {
        next()
    }
}

function validatePuppy(req, res, next) {
    const puppy = req.body;
    if (!puppy.name,
        !puppy.microchip,
        !puppy.sex,
        !puppy.markings,
        !puppy.price,
        !puppy.fees,
        !puppy.commission,
        !puppy.akc_registered,
        !puppy.listed) {
        res.status(400).json({
            message: "Please provide all puppy information."
        }).end()
    } else {
        next()
    }
}

function validateOwner(req, res, next) {
    const owner = req.body;
    if (!owner.first_name,
        !owner.phone,
        !owner.city,
        !owner.state,
        !owner.type) {
        res.status(400).json({
            message: "Please provide all owner information."
        }).end()
    } else {
        next()
    }
}
