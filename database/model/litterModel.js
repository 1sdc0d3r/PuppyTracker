const db = require("../config")

module.exports = {
    insert,
    getLitters,
    getLitterById,
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
