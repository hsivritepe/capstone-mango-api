exports.up = function (knex) {
    return knex.schema.createTable('destinations', function (table) {
        table.increments('id').unsigned().primary();
        table.string('destination_name').notNullable().unique();
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('destinations');
};
