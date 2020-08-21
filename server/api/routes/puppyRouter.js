const router = require('express').Router();
const puppyDb = require('../../../database/model/puppyModel');
const {
    validatePuppy
} = require("../middleware/validation")


router.post("/", validatePuppy, (req, res) => {
    const puppy = req.body;
    puppyDb
        .insert(puppy)
        .then(([puppy]) => {
            res.status(201).json(puppy)
        })
        .catch(({
                name,
                message,
                stack,
                code
            }) =>
            res.status(500).json({
                name,
                message,
                stack,
                code
            })
        );
})


router.get("/:id", (req, res) => {
    const id = req.params.id
    puppyDb.getPuppyById(id).then(puppy => res.status(201).json(puppy)).catch(err => res.status(500).json(err))
})


router.put("/:id", (req, res) => {
    const id = req.params.id
    const puppy = req.body

    puppyDb.modifyPuppy(id, puppy).then(puppy => res.status(201).json(puppy)).catch(err => res.status(500).json(err))
})


router.delete("/:id", (req, res) => {
    const id = req.params.id
    puppyDb.removePuppy(id).then(puppy => res.status(201).json(puppy)).catch(err => res.status(500).json(err))
})

module.exports = router;
