exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'homeatts' table
    return knex('homeatts')
        .del()
        .then(function () {
            // Inserts seed entries
            const sendEntries = [];
            let getHomeId = 0;
            let getAttributeId = 0;
            let getHomeattsValue = null;
            for (let i = 0; i < 600; i++) {
                getHomeId = Math.floor(Math.random() * 21) + 1;
                getAttributeId = Math.floor(Math.random() * 77) + 1;
                if (
                    getAttributeId === 21 ||
                    getAttributeId === 22 ||
                    getAttributeId === 23 ||
                    getAttributeId === 24 ||
                    getAttributeId === 38 ||
                    getAttributeId === 39 ||
                    getAttributeId === 40 ||
                    getAttributeId === 41 ||
                    getAttributeId === 42 ||
                    getAttributeId === 43 ||
                    getAttributeId === 44 ||
                    getAttributeId === 45 ||
                    getAttributeId === 46 ||
                    getAttributeId === 47 ||
                    getAttributeId === 48
                ) {
                    getHomeattsValue = null;
                } else {
                    getHomeattsValue =
                        Math.floor(Math.random() * 200) + 1;
                }
                sendEntries.push({
                    home_id: getHomeId,
                    attribute_id: getAttributeId,
                    homeatts_value: getHomeattsValue,
                });
            }

            return knex('homeatts').insert(sendEntries);
        });
};
