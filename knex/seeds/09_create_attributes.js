exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'attributes' table
    return knex('attributes')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('attributes').insert([
                {
                    attribute_name: 'Fridge',
                },
                {
                    attribute_name: 'Washing Machine',
                },
                {
                    attribute_name: 'Oven',
                },
                {
                    attribute_name: 'Dishwasher',
                },
                {
                    attribute_name: 'Microwave',
                },
                {
                    attribute_name: 'Air Conditioning',
                },
                {
                    attribute_name: 'Fireplace',
                },
                {
                    attribute_name: 'Swimming Pool',
                },
                {
                    attribute_name: 'Gym',
                },
                {
                    attribute_name: 'Sauna',
                },
                {
                    attribute_name: 'Jacuzzi',
                },
                {
                    attribute_name: 'Backyard',
                },
                {
                    attribute_name: 'Balcony',
                },
                {
                    attribute_name: 'Terrace',
                },
                {
                    attribute_name: 'Patio',
                },
                {
                    attribute_name: 'Garage',
                },
                {
                    attribute_name: 'Covered Parking',
                },
                {
                    attribute_name: 'Security System',
                },
                {
                    attribute_name: 'Smart Home Technology',
                },
                {
                    attribute_name: 'High-Speed Internet',
                },
                {
                    attribute_name: 'Cable/Satellite TV',
                },
                {
                    attribute_name: 'Home Office',
                },
                {
                    attribute_name: 'Media Room',
                },
                {
                    attribute_name: 'Game Room',
                },
                {
                    attribute_name: 'Home Theater',
                },
                {
                    attribute_name: 'Wine Cellar',
                },
                {
                    attribute_name: 'Walk-In Closet',
                },
                {
                    attribute_name: 'Ensuite Bathroom',
                },
                {
                    attribute_name: 'Hardwood Floors',
                },
                {
                    attribute_name: 'Carpeted Floors',
                },
                {
                    attribute_name: 'Tile Floors',
                },
                {
                    attribute_name: 'Open Floor Plan',
                },
                {
                    attribute_name: 'Vaulted Ceilings',
                },
                {
                    attribute_name: 'Large Windows',
                },
                {
                    attribute_name: 'Scenic View',
                },
                {
                    attribute_name: 'Waterfront',
                },
                {
                    attribute_name: 'Mountain View',
                },
                {
                    attribute_name: 'City View',
                },
                {
                    attribute_name: 'Pet-Friendly',
                },
                {
                    attribute_name: 'Wheelchair Accessible',
                },
                {
                    attribute_name: 'Near Public Transportation',
                },
                // Add more attributes if needed
            ]);
        });
};
