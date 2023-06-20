exports.up = function (knex) {
    return knex.schema.createTable('bookings', function (table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('id').inTable('users');
        table.integer('home_id').unsigned().notNullable();
        table.foreign('home_id').references('id').inTable('homes');
        table.integer('customer_contact_id').unsigned().nullable();
        table
            .foreign('customer_contact_id')
            .references('id')
            .inTable('contacts');
        table.string('booking_owner').notNullable().defaultTo('VS');
        table.string('booking_status').notNullable().defaultTo('o');
        table.date('check_in').notNullable();
        table.date('check_out').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('bookings');
};
