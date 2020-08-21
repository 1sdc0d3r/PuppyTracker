const db = require("../config")

module.exports = {
    insert,
    getOwnerById,
    modifyOwner,
    removeOwner,
    truncate
}

function insert(owner) {
    return db("Owner")
        .insert(owner)
        .returning("id");
}

function getOwnerById(id) {
    return db("Owner")
        .where({
            id
        })
        .first();
}

function modifyOwner(id, owner) {
    return db("Owner")
        .update(owner)
        .where({
            id
        })
        .then(() => {
            return getOwnerById(id);
        });
}

function removeOwner(id) {
    return db("Owner")
        .where({
            id
        }).del()
}

//* Testing
function truncate() {
    return db("Owner").truncate();
}
