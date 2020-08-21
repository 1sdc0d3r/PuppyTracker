const router = require('express').Router();
const ownerDb = require('../../../database/model/ownerModel');
const {
    validateOwner
} = require("../middleware/validation")


router.post("/", validateOwner, (req, res) => {
    const owner = req.body;
    ownerDb
        .insert(owner)
        .then(([owner]) => {
            res.status(201).json(owner)
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
    ownerDb.getOwnerById(id).then(owner => res.status(201).json(owner)).catch(err => res.status(500).json(err))
})


router.put("/:id", (req, res) => {
    const id = req.params.id
    const owner = req.body

    ownerDb.modifyOwner(id, owner).then(owner => res.status(201).json(owner)).catch(err => res.status(500).json(err))
})


router.delete("/:id", (req, res) => {
    const id = req.params.id
    ownerDb.removeOwner(id).then(owner => res.status(201).json(owner)).catch(err => res.status(500).json(err))
})

module.exports = router;
