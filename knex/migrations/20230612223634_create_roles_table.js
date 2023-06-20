exports.up = function (knex) {
    return knex.schema.createTable('roles', function (table) {
        table.increments('role_id').primary();
        table.string('role_name').notNullable().unique();
        // Additional columns related to roles can be defined here
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('roles');
};
