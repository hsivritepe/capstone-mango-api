exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'calendars' table
    return knex('calendars')
        .del()
        .then(function () {
            // Get home IDs from the 'homes' table
            return knex('homes')
                .pluck('id')
                .then(function (homeIds) {
                    // Generate an array of dates from 2023-01-01 to 2023-12-31
                    const startDate = new Date('2023-01-01');
                    const endDate = new Date('2023-12-31');
                    const dates = [];
                    const currentDate = new Date(startDate);
                    while (currentDate <= endDate) {
                        dates.push(new Date(currentDate));
                        currentDate.setDate(
                            currentDate.getDate() + 1
                        );
                    }

                    // Create seed entries for each home and date
                    const seedEntries = [];
                    homeIds.forEach((homeId) => {
                        const entries = dates.map((date) => ({
                            home_id: homeId,
                            date: date.toISOString().split('T')[0],
                            data_ava: Math.floor(Math.random() * 6),
                            price:
                                (Math.floor(Math.random() * 20) + 1) *
                                150,
                        }));
                        seedEntries.push(...entries);
                    });

                    // Insert the seed entries into the 'calendars' table
                    return knex('calendars').insert(seedEntries);
                });
        });
};
