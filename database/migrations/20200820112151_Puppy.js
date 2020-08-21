exports.up = function (knex) {
    return knex.schema.createTable("Puppy", (tbl) => {
        tbl.increments("id").primary();
        tbl.integer("litter_id").notNullable()
        //todo .references("Litter.id")
        tbl.string("name")
        tbl.integer("microchip").notNullable().unique();
        tbl.string("sex").notNullable();
        tbl.string("markings").notNullable();
        tbl.integer("price")
        tbl.integer("fees")
        tbl.integer("commission")
        tbl.boolean("akc_registered").notNullable();
        tbl.boolean("listed").notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Puppy")
};
