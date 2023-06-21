exports.up = function (knex) {
    return knex.schema.table('attributes', function (table) {
        table.integer('ha_category_id').unsigned().nullable();
        table
            .foreign('ha_category_id')
            .references('id')
            .inTable('homeatt_categories');
    });
};

exports.down = function (knex) {
    return knex.schema.table('attributes', function (table) {
        table.dropColumn('ha_category_id');
    });
};
