exports.up = function (knex) {
    return knex.schema.createTable('calendar', function (table) {
        table.increments('id').primary();
        table.integer('home_id').unsigned().notNullable();
        table.foreign('home_id').references('id').inTable('homes');
        table.date('date').notNullable();
        table.integer('data_ava').notNullable().defaultTo(-1);
        table.integer('price').notNullable().defaultTo(-1);
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('calendar');
};
