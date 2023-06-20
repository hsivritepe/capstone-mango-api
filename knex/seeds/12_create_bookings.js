exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'bookings' table
    return knex('bookings')
        .del()
        .then(function () {
            // Inserts seed entries

            const seedData = [];

            for (let i = 0; i < 50; i++) {
                seedData.push({
                    user_id: Math.floor(Math.random() * 6) + 1,
                    home_id: Math.floor(Math.random() * 21) + 1,
                    customer_contact_id:
                        Math.floor(Math.random() * 20) + 1,
                    booking_owner: Math.random() < 0.5 ? 'VS' : 'HO',
                    booking_status: getRandomBookingStatus(),
                    check_in: getRandomDate().check_in, // Access the check_in value directly
                    check_out: getRandomDate().check_out, // Access the check_out value directly
                });
            }
            // Insert the seed entries
            return knex('bookings').insert(seedData);
        });
};

function getRandomBookingStatus() {
    const statuses = ['o', 'r', 'e', 'c'];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
}

function getRandomDate() {
    const startDate = new Date();
    startDate.setMonth(Math.floor(Math.random() * 12)); // Random month (0-11)
    startDate.setDate(Math.floor(Math.random() * 28) + 1); // Random day (1-28)

    const endDate = new Date(startDate);
    endDate.setDate(
        startDate.getDate() + Math.floor(Math.random() * 21) + 5
    ); // Random duration (5-25 days)

    return {
        check_in: startDate.toISOString().split('T')[0],
        check_out: endDate.toISOString().split('T')[0],
    };
}
