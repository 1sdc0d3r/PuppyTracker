exports.up = function (knex) {
    return knex.schema.createTable("Litter", (tbl) => {
        tbl.increments("id").primary();
        tbl.string("name").notNullable();
        tbl.integer("microchip").notNullable();
        tbl.string("sex").notNullable();
        tbl.string("dam").notNullable();
        tbl.string("sire").notNullable();
        tbl.string("markings").notNullable();
        tbl.string("first_name").notNullable();
        tbl.string("last_name").notNullable();
        tbl.string("phone").notNullable();
        tbl.string("address").notNullable();
        tbl.string("price").notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Litter");
};
