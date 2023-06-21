exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'homeatt_categories' table
    return knex('homeatt_categories')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('homeatt_categories').insert([
                {
                    id: 1,
                    ha_category_name: 'Home type',
                },
                {
                    id: 2,
                    ha_category_name: 'Beach type',
                },
                {
                    id: 3,
                    ha_category_name: 'Home Tags',
                },
                {
                    id: 4,
                    ha_category_name: 'Home information',
                },
                {
                    id: 5,
                    ha_category_name: 'Home distances',
                },
                {
                    id: 6,
                    ha_category_name: 'Home descriptions',
                },
                {
                    id: 7,
                    ha_category_name: 'Search criteria',
                },
                {
                    id: 8,
                    ha_category_name: 'Top amenities',
                },
                {
                    id: 9,
                    ha_category_name: 'Social media and location',
                },
                {
                    id: 10,
                    ha_category_name: 'Theme criteria',
                },
                {
                    id: 11,
                    ha_category_name: 'Home image details',
                },
                {
                    id: 12,
                    ha_category_name: 'Home Sale type',
                },
                {
                    id: 13,
                    ha_category_name: 'Home Amenities',
                },
                // Add more seed data if needed
            ]);
        });
};
