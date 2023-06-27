const { faker } = require('@faker-js/faker');

exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'homes' table
    return knex('homes')
        .del()
        .then(function () {
            // Generate 100 seed entries
            const seedData = [];
            for (let i = 0; i < 127; i++) {
                seedData.push({
                    home_vs_name: faker.company.name(),
                    home_real_name: faker.location.streetAddress(),
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: faker.datatype.boolean(),
                });
            }
            // Inserts seed entries
            return knex('homes').insert(seedData);
        });
};
