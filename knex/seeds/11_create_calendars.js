exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'calendar' table
    return knex('calendar')
        .del()
        .then(function () {
            // Generate an array of dates from 2023-06-01 to 2023-06-30
            const startDate = new Date('2023-01-01');
            const endDate = new Date('2023-12-31');
            const dates = [];
            const currentDate = new Date(startDate);
            while (currentDate <= endDate) {
                dates.push(new Date(currentDate));
                currentDate.setDate(currentDate.getDate() + 1);
            }

            // Create seed entries for each date
            const seedEntries = [];
            for (let i = 1; i < 22; i++) {
                const entries = dates.map((date) => ({
                    home_id: i,
                    date: date.toISOString().split('T')[0],
                    data_ava: Math.floor(Math.random() * 6),
                    price: (Math.floor(Math.random() * 20) + 1) * 150,
                }));
                seedEntries.push(...entries);
            }

            // Insert the seed entries into the 'calendar' table
            return knex('calendar').insert(seedEntries);
        });
};
