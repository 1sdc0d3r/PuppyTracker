// todo set up table for people (owners/buyers)
// todo table for breed dogs (dam/sire)
exports.up = function (knex) {
    return knex.schema.createTable("Litter", (tbl) => {
        tbl.increments("id").primary();
        tbl.integer("owner_id").notNullable()
        //todo .references("Owner.id")
        tbl.date("breed_date").notNullable();
        tbl.date("litter_date")
        tbl.string("dam").notNullable();
        tbl.string("sire").notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Litter")
};
