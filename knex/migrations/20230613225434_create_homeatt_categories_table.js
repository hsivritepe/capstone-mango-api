exports.up = function (knex) {
    return knex.schema.createTable(
        'homeatt_categories',
        function (table) {
            table.increments('id').primary();
            table.string('ha_category_name').notNullable().unique();
            table.timestamps(true, true);
        }
    );
};

exports.down = function (knex) {
    return knex.schema.dropTable('homeatt_categories');
};
