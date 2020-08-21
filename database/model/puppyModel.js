const db = require("../config")

module.exports = {
    insert,
    getPuppyById,
    modifyPuppy,
    removePuppy,
    truncate
}

function insert(puppy) {
    return db("Puppy")
        .insert(puppy)
        .returning("id");
}

function getPuppyById(id) {
    return db("Puppy")
        .where({
            id
        })
        .first();
}

function modifyPuppy(id, puppy) {
    return db("Puppy")
        .update(puppy)
        .where({
            id
        })
        .then(() => {
            return getPuppyById(id);
        });
}

function removePuppy(id) {
    return db("Puppy")
        .where({
            id
        }).del()
}

//* Testing
function truncate() {
    return db("Puppy").truncate();
}
