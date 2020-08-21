exports.up = function (knex) {
    //todo keep totals as well
    return knex.schema.createTable("Owner", (tbl) => {
        tbl.increments("id").primary();
        tbl.string("first_name").notNullable();
        tbl.string("last_name")
        tbl.integer("phone").notNullable();
        tbl.string("address")
        tbl.string("city").notNullable();
        tbl.string("state").notNullable();
        tbl.string("zip")
        tbl.string("type").notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Owner")
};
