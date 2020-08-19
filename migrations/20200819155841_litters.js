exports.up = function (knex) {
    return knex.schema.createTable("Litter", (tbl) => {
        tbl.increments("id").primary();
        tbl.string("owner_name").notNullable();
        tbl.string("breed_date").notNullable();
        tbl.string("litter_date").notNullable();
        tbl.string("dam").notNullable();
        tbl.string("sire").notNullable();
        // tbl.string("puppies").defaultTo([]);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Litter");
};
