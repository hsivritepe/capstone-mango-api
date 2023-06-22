exports.up = function (knex) {
    return knex.schema.createTable('homeatts', function (table) {
        table.increments('id').primary();
        table.integer('home_id').unsigned().notNullable();
        table.foreign('home_id').references('id').inTable('homes');
        table.integer('attribute_id').unsigned().notNullable();
        table
            .foreign('attribute_id')
            .references('id')
            .inTable('attributes');
        table.integer('ha_category_id').unsigned().notNullable();
        table
            .foreign('ha_category_id')
            .references('id')
            .inTable('homeatt_categories');
        table.string('homeatts_value').nullable().defaultTo(null);
        table.timestamps(true, true);

        // Add the composite unique constraint
        table.unique(['home_id', 'attribute_id']);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('homeatts');
};
