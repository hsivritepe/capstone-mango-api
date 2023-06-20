exports.up = function (knex) {
    return knex.schema.alterTable('homes', function (table) {
        table
            .integer('destination_id')
            .unsigned()
            .notNullable()
            .alter();
        table
            .foreign('destination_id')
            .references('id')
            .inTable('destinations');
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('homes', function (table) {
        table.dropForeign('destination_id');
        table.integer('destination_id').alter();
    });
};
