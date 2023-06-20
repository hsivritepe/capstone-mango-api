exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'homeatts' table
    return knex('homeatts')
        .del()
        .then(function () {
            // Inserts seed entries
            const sendEntries = [];
            for (let i = 0; i < 400; i++) {
                sendEntries.push({
                    home_id: Math.floor(Math.random() * 21) + 1,
                    attribute_id: Math.floor(Math.random() * 41) + 1,
                    ha_category_id:
                        Math.floor(Math.random() * 18) + 1,
                    homeatts_value:
                        Math.floor(Math.random() * 200) + 1,
                });
            }

            return knex('homeatts').insert(sendEntries);
        });
};
