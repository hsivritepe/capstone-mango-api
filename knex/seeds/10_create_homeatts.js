exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'homeatts' table
    return knex('homeatts')
        .del()
        .then(function () {
            // Inserts seed entries
            const sendEntries = [];
            const usedCombinations = new Set();

            for (let i = 0; i < 600; i++) {
                let getHomeId = Math.floor(Math.random() * 21) + 1;
                let getAttributeId =
                    Math.floor(Math.random() * 77) + 1;

                // Generate a unique combination of home_id and attribute_id
                while (
                    usedCombinations.has(
                        `${getHomeId}-${getAttributeId}`
                    )
                ) {
                    getHomeId = Math.floor(Math.random() * 21) + 1;
                    getAttributeId =
                        Math.floor(Math.random() * 77) + 1;
                }

                usedCombinations.add(
                    `${getHomeId}-${getAttributeId}`
                );

                let getHomeattsValue = null;
                if (
                    ![
                        21, 22, 23, 24, 38, 39, 40, 41, 42, 43, 44,
                        45, 46, 47, 48,
                    ].includes(getAttributeId)
                ) {
                    getHomeattsValue =
                        Math.floor(Math.random() * 200) + 1;
                }

                sendEntries.push({
                    home_id: getHomeId,
                    attribute_id: getAttributeId,
                    homeatts_value: getHomeattsValue,
                });
            }

            // Insert the new entries
            return knex('homeatts').insert(sendEntries);
        });
};
