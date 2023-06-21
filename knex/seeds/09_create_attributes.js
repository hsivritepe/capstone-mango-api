exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'attributes' table
    return knex('attributes')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('attributes').insert([
                {
                    id: 1,
                    attribute_name: 'Single-family house',
                    ha_category_id: 1,
                },
                {
                    id: 2,
                    attribute_name: 'Apartment',
                    ha_category_id: 1,
                },
                {
                    id: 3,
                    attribute_name: 'Condo',
                    ha_category_id: 1,
                },
                {
                    id: 4,
                    attribute_name: 'Townhouse',
                    ha_category_id: 1,
                },
                {
                    id: 5,
                    attribute_name: 'Villa Cabin',
                    ha_category_id: 1,
                },
                {
                    id: 6,
                    attribute_name: 'Sandy beach',
                    ha_category_id: 2,
                },
                {
                    id: 7,
                    attribute_name: 'Rocky beach',
                    ha_category_id: 2,
                },
                {
                    id: 8,
                    attribute_name: 'Pebble beach',
                    ha_category_id: 2,
                },
                {
                    id: 9,
                    attribute_name: 'Surfing beach',
                    ha_category_id: 2,
                },
                {
                    id: 10,
                    attribute_name: 'Secluded beach',
                    ha_category_id: 2,
                },
                {
                    id: 11,
                    attribute_name: 'Family-friendly beach',
                    ha_category_id: 2,
                },
                {
                    id: 12,
                    attribute_name: 'Honeymoon discount',
                    ha_category_id: 3,
                },
                {
                    id: 13,
                    attribute_name: 'Exclusive Villa',
                    ha_category_id: 3,
                },
                {
                    id: 14,
                    attribute_name: 'Heated pool',
                    ha_category_id: 3,
                },
                {
                    id: 15,
                    attribute_name: 'New home',
                    ha_category_id: 3,
                },
                {
                    id: 16,
                    attribute_name: 'Bedrooms',
                    ha_category_id: 4,
                },
                {
                    id: 17,
                    attribute_name: 'Bathrooms',
                    ha_category_id: 4,
                },
                {
                    id: 18,
                    attribute_name: 'Square footage',
                    ha_category_id: 4,
                },
                {
                    id: 19,
                    attribute_name: 'Accommodates',
                    ha_category_id: 4,
                },
                {
                    id: 20,
                    attribute_name: 'Pet-friendly',
                    ha_category_id: 4,
                },
                {
                    id: 21,
                    attribute_name: 'Distance to beach',
                    ha_category_id: 5,
                },
                {
                    id: 22,
                    attribute_name: 'Distance to city center',
                    ha_category_id: 5,
                },
                {
                    id: 23,
                    attribute_name: 'Distance to airport',
                    ha_category_id: 5,
                },
                {
                    id: 24,
                    attribute_name: 'Distance to attractions',
                    ha_category_id: 5,
                },
                {
                    id: 25,
                    attribute_name: 'Homes with gardens',
                    ha_category_id: 7,
                },
                {
                    id: 26,
                    attribute_name: "Homes with children's pool",
                    ha_category_id: 7,
                },
                {
                    id: 27,
                    attribute_name:
                        "Homes with children's playground",
                    ha_category_id: 7,
                },
                {
                    id: 28,
                    attribute_name: 'Homes with sea view',
                    ha_category_id: 7,
                },
                {
                    id: 29,
                    attribute_name: 'Entertainment and activities',
                    ha_category_id: 7,
                },
                {
                    id: 30,
                    attribute_name: 'Pet-friendly homes',
                    ha_category_id: 7,
                },
                {
                    id: 31,
                    attribute_name: 'Homes with heated pool',
                    ha_category_id: 7,
                },
                {
                    id: 32,
                    attribute_name: 'Homes with jacuzzi',
                    ha_category_id: 7,
                },
                {
                    id: 33,
                    attribute_name: 'Luxury homes',
                    ha_category_id: 7,
                },
                {
                    id: 34,
                    attribute_name: 'Homes near the city center',
                    ha_category_id: 7,
                },
                {
                    id: 35,
                    attribute_name: 'Homes with private pool',
                    ha_category_id: 7,
                },
                {
                    id: 36,
                    attribute_name: 'Homes with secluded pool',
                    ha_category_id: 7,
                },
                {
                    id: 37,
                    attribute_name: 'Homes with fireplace',
                    ha_category_id: 7,
                },
                {
                    id: 38,
                    attribute_name: 'Featured attribute 1',
                    ha_category_id: 8,
                },
                {
                    id: 39,
                    attribute_name: 'Featured attribute 2',
                    ha_category_id: 8,
                },
                {
                    id: 40,
                    attribute_name: 'Featured attribute 3',
                    ha_category_id: 8,
                },
                {
                    id: 41,
                    attribute_name: 'Featured attribute 4',
                    ha_category_id: 8,
                },
                {
                    id: 42,
                    attribute_name: 'Featured attribute 5',
                    ha_category_id: 8,
                },
                {
                    id: 43,
                    attribute_name: 'Featured attribute 6',
                    ha_category_id: 8,
                },
                {
                    id: 44,
                    attribute_name: 'Home website URL',
                    ha_category_id: 9,
                },
                {
                    id: 45,
                    attribute_name: 'Home YouTube video URL',
                    ha_category_id: 9,
                },
                {
                    id: 46,
                    attribute_name: 'Home GPS coordinates (Latitude)',
                    ha_category_id: 9,
                },
                {
                    id: 47,
                    attribute_name:
                        'Home GPS coordinates (Longitude)',
                    ha_category_id: 9,
                },
                {
                    id: 48,
                    attribute_name: 'Homes near the beach',
                    ha_category_id: 10,
                },
                {
                    id: 49,
                    attribute_name: 'Holiday close to nightlife',
                    ha_category_id: 10,
                },
                {
                    id: 50,
                    attribute_name: 'Holiday getaway',
                    ha_category_id: 10,
                },
                {
                    id: 51,
                    attribute_name: 'Romantic holiday/honeymoon',
                    ha_category_id: 10,
                },
                {
                    id: 52,
                    attribute_name:
                        'Similiar Homes within the complex',
                    ha_category_id: 11,
                },
                {
                    id: 53,
                    attribute_name: 'Send Email Images Later',
                    ha_category_id: 11,
                },
                {
                    id: 54,
                    attribute_name: 'Original images',
                    ha_category_id: 11,
                },
                {
                    id: 55,
                    attribute_name: 'Priority sale',
                    ha_category_id: 12,
                },
                {
                    id: 56,
                    attribute_name: 'Money-back guarantee',
                    ha_category_id: 12,
                },
                {
                    id: 57,
                    attribute_name: 'WhatsApp',
                    ha_category_id: 12,
                },
                {
                    id: 58,
                    attribute_name: 'Inquiry sale',
                    ha_category_id: 12,
                },
                {
                    id: 59,
                    attribute_name: 'Barbecue / Grill',
                    ha_category_id: 13,
                },
                {
                    id: 60,
                    attribute_name: 'Baby cot',
                    ha_category_id: 13,
                },
                {
                    id: 61,
                    attribute_name: 'Regional TV',
                    ha_category_id: 13,
                },
                {
                    id: 62,
                    attribute_name: 'Dishwasher',
                    ha_category_id: 13,
                },
                {
                    id: 63,
                    attribute_name: 'Refrigerator with freezer',
                    ha_category_id: 13,
                },
                {
                    id: 64,
                    attribute_name: 'Washing machine',
                    ha_category_id: 13,
                },
                {
                    id: 65,
                    attribute_name: 'DVD player',
                    ha_category_id: 13,
                },
                {
                    id: 66,
                    attribute_name: 'Internet (paid common area)',
                    ha_category_id: 13,
                },
                {
                    id: 67,
                    attribute_name: 'Internet (paid)',
                    ha_category_id: 13,
                },
                {
                    id: 68,
                    attribute_name: 'Internet (free common area)',
                    ha_category_id: 13,
                },
                {
                    id: 69,
                    attribute_name: 'Internet (free)',
                    ha_category_id: 13,
                },
                {
                    id: 70,
                    attribute_name: 'Highchair',
                    ha_category_id: 13,
                },
                {
                    id: 71,
                    attribute_name: 'Microwave oven',
                    ha_category_id: 13,
                },
                {
                    id: 72,
                    attribute_name: 'Mini refrigerator',
                    ha_category_id: 13,
                },
                {
                    id: 73,
                    attribute_name: 'Hairdryer',
                    ha_category_id: 13,
                },
                {
                    id: 74,
                    attribute_name: 'Fireplace',
                    ha_category_id: 13,
                },
                {
                    id: 75,
                    attribute_name: 'Toaster',
                    ha_category_id: 13,
                },
                {
                    id: 76,
                    attribute_name: 'Iron',
                    ha_category_id: 13,
                },
                {
                    id: 77,
                    attribute_name: 'Satellite TV',
                    ha_category_id: 13,
                },
                {
                    id: 78,
                    attribute_name:
                        'Satellite TV (Foreign channels only)',
                    ha_category_id: 13,
                },
            ]);
        });
};
