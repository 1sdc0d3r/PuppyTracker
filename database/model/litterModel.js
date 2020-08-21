const db = require("../config")

module.exports = {
    insert,
    getLitters,
    getLitterById,
    getPuppies,
    getDam,
    getSire,
    modifyLitter,
    removeLitter,
    truncate
}

function insert(litter) {
    return db("Litter")
        .insert(litter)
        .returning("id");
}

function getLitters(limit, offset) {
    return db("Litter")
        .orderBy("id")
        .limit(limit)
        .offset(offset);
}

function getLitterById(id) {
    return db("Litter")
        .where({
            id
        })
        .first();
}

function getPuppies(litter_id) {
    return db("Puppy")
        .where({
            litter_id
        }).orderBy("id")
}

function getDam(dam) {
    return db("Litter").where({
        dam
    }).orderBy("id")
}

function getSire(sire) {
    return db("Litter").where({
        sire
    }).orderBy("id")
}

function modifyLitter(id, litter) {
    return db("Litter")
        .update(litter)
        .where({
            id
        })
        .then(() => {
            return getLitterById(id);
        });
}

function removeLitter(id) {
    return db("Litter")
        .where({
            id
        }).del()
}

//* Testing
function truncate() {
    return db("Litter").truncate();
}
