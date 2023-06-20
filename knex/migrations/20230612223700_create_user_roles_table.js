exports.up = function (knex) {
    return knex.schema.createTable('user_roles', function (table) {
        table.increments('user_role_id').primary();
        table
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users');
        table
            .integer('role_id')
            .unsigned()
            .notNullable()
            .references('role_id')
            .inTable('roles');
        // Additional columns related to user roles can be defined here
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('user_roles');
};
