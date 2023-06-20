exports.up = function (knex) {
    return knex.schema.createTable('permissions', function (table) {
        table.increments('permission_id').primary();
        table.string('permission_name').notNullable().unique();
        // Additional columns related to permissions can be defined here
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('permissions');
};
