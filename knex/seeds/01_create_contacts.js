const { faker } = require('@faker-js/faker');

exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'contacts' table
    return knex('contacts')
        .del()
        .then(function () {
            // Generate 100 seed entries
            const seedData = [];
            for (let i = 0; i < 116; i++) {
                seedData.push({
                    first_name: faker.person.firstName(),
                    last_name: faker.person.lastName(),
                    email: faker.internet.email(),
                    phone: faker.phone.number(),
                });
            }
            // Inserts seed entries
            return knex('contacts').insert(seedData);
        });
};
