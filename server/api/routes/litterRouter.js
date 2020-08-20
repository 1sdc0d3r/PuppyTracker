const router = require("express").Router();
const litterDb = require("../../../database/model/litterModel");
const {
    validateLitter
} = require("../middleware/authMiddleware")
// CRUD

router.post("/", validateLitter, (req, res) => {
    const litter = req.body;
    console.log({
        litter
    })
    litterDb
        .insert(litter)
        .then(([litter]) => {
            res.status(201).json({
                litter
            });
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
});

router.get("/", (req, res) => {
    litterDb.getLitters(limit = 100, offset = 0).then(litters => res.status(201).json(
        litters
    )).catch(err => res.status(500).json(err))
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    litterDb.getLitterById(id).then(litter => res.status(201).json(litter)).catch(err => res.status(500).json(err))
})

router.put("/:id", (req, res) => {
    const id = req.params.id
    const litter = req.body
    console.log("PUT", id, litter)

    litterDb.modifyLitter(id, litter).then(litter => res.status(201).json(litter)).catch(err => res.status(500).json(err))
})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    litterDb.removeLitter(id).then(litter => res.status(201).json(litter)).catch(err => res.status(500).json(err))
})

module.exports = router;
