exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'homes' table
    return knex('homes')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('homes').insert([
                {
                    home_vs_name: 'Sunset Retreat',
                    home_real_name: 'Golden Sands Villa',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: true,
                },
                {
                    home_vs_name: 'Coastal Oasis',
                    home_real_name: 'Sea Breeze Haven',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: false,
                },
                {
                    home_vs_name: 'Beachfront Bliss',
                    home_real_name: 'Sandy Bay Retreat',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: true,
                },
                {
                    home_vs_name: 'Seaview Hideaway',
                    home_real_name: 'Azure Waters Villa',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: true,
                },
                {
                    home_vs_name: 'Cozy Beach Cottage',
                    home_real_name: 'Seaside Haven',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: false,
                },
                {
                    home_vs_name: 'Luxury Oceanfront Villa',
                    home_real_name: 'Paradise Cove Mansion',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: true,
                },
                {
                    home_vs_name: 'Villa Seaside',
                    home_real_name: 'Coastal Dream House',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: true,
                },
                {
                    home_vs_name: 'Beach House Paradise',
                    home_real_name: 'Sunny Shores Villa',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: false,
                },
                {
                    home_vs_name: 'Seaview Serenity',
                    home_real_name: 'Tropical Retreat',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: true,
                },
                {
                    home_vs_name: 'Seaside Haven',
                    home_real_name: 'Sunny Sands Villa',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: true,
                },
                {
                    home_vs_name: 'Coastal Escape',
                    home_real_name: 'Ocean Breeze Retreat',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: false,
                },
                {
                    home_vs_name: 'Beachfront Paradise',
                    home_real_name: 'Sandy Serenity Villa',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: true,
                },
                {
                    home_vs_name: 'Seaview Retreat',
                    home_real_name: 'Azure Coastline Villa',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: true,
                },
                {
                    home_vs_name: 'Cozy Beach House',
                    home_real_name: 'Seaside Bliss Cottage',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: false,
                },
                {
                    home_vs_name: 'Luxury Seaside Villa',
                    home_real_name: 'Paradise Bay Mansion',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: true,
                },
                {
                    home_vs_name: 'Coastal Getaway',
                    home_real_name: 'Seascape Retreat House',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: true,
                },
                {
                    home_vs_name: 'Beach House Oasis',
                    home_real_name: 'Sunny Shores Paradise Villa',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: false,
                },
                {
                    home_vs_name: 'Seaview Tranquility',
                    home_real_name: 'Tropical Beach Retreat',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: true,
                },
                {
                    home_vs_name: 'Seaside Retreat',
                    home_real_name: 'Sandy Paradise Villa',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: true,
                },
                {
                    home_vs_name: 'Villa Rescape',
                    home_real_name: 'Oceanfront Bliss Retreat',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: false,
                },
                {
                    home_vs_name: 'Beachfront Hideaway',
                    home_real_name: 'Seaside Serenity Villa',
                    ho_contact_id: Math.floor(Math.random() * 20) + 1,
                    destination_id:
                        Math.floor(Math.random() * 20) + 1,
                    is_open_for_sale: true,
                },
            ]);
        });
};
