exports.up = function (knex) {
    return knex.schema.createTable('homes', function (table) {
        table.increments('id').primary();
        table.string('home_vs_name').notNullable();
        table.string('home_real_name').notNullable();
        table.integer('ho_contact_id').nullable();
        table.integer('destination_id').notNullable();
        table.boolean('is_open_for_sale').defaultTo(false);
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('homes');
};
