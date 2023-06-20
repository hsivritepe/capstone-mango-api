exports.up = function (knex) {
    return knex.schema.createTable('attributes', function (table) {
        table.increments('id').primary();
        table.string('attribute_name').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('attributes');
};
