exports.up = function (knex) {
    // Step 1: Remove the foreign key constraint
    return knex.schema
        .table('homeatts', function (table) {
            table.dropForeign('ha_category_id');
        })
        .then(function () {
            // Step 2: Drop the column
            return knex.schema.table('homeatts', function (table) {
                table.dropColumn('ha_category_id');
            });
        });
};

exports.down = function (knex) {
    // Step 1: Add the column
    return knex.schema
        .table('homeatts', function (table) {
            table.integer('ha_category_id').unsigned();
            table
                .foreign('ha_category_id')
                .references('id')
                .inTable('homeatt_categories');
        })
        .then(function () {
            // Step 2: Add the foreign key constraint
            return knex.schema.alterTable(
                'homeatts',
                function (table) {
                    table
                        .foreign('ha_category_id')
                        .references('homeatt_categories.id');
                }
            );
        });
};
