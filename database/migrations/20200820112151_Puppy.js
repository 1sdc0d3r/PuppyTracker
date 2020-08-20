exports.up = function (knex) {
    knex.schema.createTable("Puppy", (tbl) => {
        tbl.increments("id").primary();
        tbl.integer("litter_id").notNullable().references("Litter.id")
        tbl.string("name").notNullable();
        tbl.integer("microchip").notNullable().unique();
        tbl.string("sex").notNullable();
        tbl.string("markings").notNullable();
        tbl.string("first_name").notNullable();
        tbl.string("last_name").notNullable();
        tbl.integer("phone").notNullable();
        tbl.string("address").notNullable();
        tbl.integer("price").notNullable();
        tbl.integer("fees").notNullable();
        tbl.integer("commission").notNullable();
        tbl.boolean("akc_registered").notNullable();
        tbl.boolean("listed").notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Puppy"),
};
