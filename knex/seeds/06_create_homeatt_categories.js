exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'homeatt_categories' table
    return knex('homeatt_categories')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('homeatt_categories').insert([
                {
                    ha_category_name: 'Home type',
                },
                {
                    ha_category_name: 'Beach type',
                },
                {
                    ha_category_name: 'Show all',
                },
                {
                    ha_category_name: 'Home information',
                },
                {
                    ha_category_name: 'Home distances',
                },
                {
                    ha_category_name: 'Home descriptions',
                },
                {
                    ha_category_name: 'Search criteria',
                },
                {
                    ha_category_name: 'Top amenities',
                },
                {
                    ha_category_name: 'Social media and location',
                },
                {
                    ha_category_name: 'Theme criteria',
                },
                {
                    ha_category_name: 'Pre-payment and Discount',
                },
                {
                    ha_category_name: 'Short-term rental',
                },
                {
                    ha_category_name: 'Electricity cost',
                },
                {
                    ha_category_name: 'Water cost',
                },
                {
                    ha_category_name: 'Cleaning cost',
                },
                {
                    ha_category_name: 'Home image details',
                },
                {
                    ha_category_name: 'Home tags',
                },
                {
                    ha_category_name: 'Home Sale type',
                },
                // Add more seed data if needed
            ]);
        });
};
