exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'destinations' table
    return knex('destinations')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('destinations').insert([
                {
                    destination_name: 'Antalya',
                },
                {
                    destination_name: 'Bodrum',
                },
                {
                    destination_name: 'Marmaris',
                },
                {
                    destination_name: 'Izmir',
                },
                {
                    destination_name: 'Alanya',
                },
                {
                    destination_name: 'Kemer',
                },
                {
                    destination_name: 'Fethiye',
                },
                {
                    destination_name: 'Cesme',
                },
                {
                    destination_name: 'Side',
                },
                {
                    destination_name: 'Kusadasi',
                },
                {
                    destination_name: 'Didim',
                },
                {
                    destination_name: 'Datca',
                },
                {
                    destination_name: 'Bitez',
                },
                {
                    destination_name: 'Kalkan',
                },
                {
                    destination_name: 'Gocek',
                },
                {
                    destination_name: 'Kaş',
                },
                {
                    destination_name: 'Gumuldur',
                },
                {
                    destination_name: 'Akyaka',
                },
                {
                    destination_name: 'Belek',
                },
                {
                    destination_name: 'Hisaronu',
                },
            ]);
        });
};
