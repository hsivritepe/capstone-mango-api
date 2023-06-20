exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'contacts' table
    return knex('contacts')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('contacts').insert([
                {
                    first_name: 'John',
                    last_name: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                },
                {
                    first_name: 'Jane',
                    last_name: 'Smith',
                    email: 'jane.smith@example.com',
                    phone: '9876543210',
                },
                {
                    first_name: 'Michael',
                    last_name: 'Johnson',
                    email: 'michael.johnson@example.com',
                    phone: '5551234567',
                },
                {
                    first_name: 'Sarah',
                    last_name: 'Williams',
                    email: 'sarah.williams@example.com',
                    phone: '5559876543',
                },
                {
                    first_name: 'David',
                    last_name: 'Brown',
                    email: 'david.brown@example.com',
                    phone: '5557894561',
                },
                {
                    first_name: 'Emily',
                    last_name: 'Jones',
                    email: 'emily.jones@example.com',
                    phone: '5554567890',
                },
                {
                    first_name: 'Daniel',
                    last_name: 'Taylor',
                    email: 'daniel.taylor@example.com',
                    phone: '5553216547',
                },
                {
                    first_name: 'Olivia',
                    last_name: 'Miller',
                    email: 'olivia.miller@example.com',
                    phone: '5556541238',
                },
                {
                    first_name: 'William',
                    last_name: 'Davis',
                    email: 'william.davis@example.com',
                    phone: '5559874563',
                },
                {
                    first_name: 'Sophia',
                    last_name: 'Garcia',
                    email: 'sophia.garcia@example.com',
                    phone: '5554563219',
                },
                {
                    first_name: 'Matthew',
                    last_name: 'Martinez',
                    email: 'matthew.martinez@example.com',
                    phone: '5557896542',
                },
                {
                    first_name: 'Ava',
                    last_name: 'Anderson',
                    email: 'ava.anderson@example.com',
                    phone: '5551239874',
                },
                {
                    first_name: 'James',
                    last_name: 'Wilson',
                    email: 'james.wilson@example.com',
                    phone: '5559871235',
                },
                {
                    first_name: 'Isabella',
                    last_name: 'Taylor',
                    email: 'isabella.taylor@example.com',
                    phone: '5553217896',
                },
                {
                    first_name: 'Logan',
                    last_name: 'Johnson',
                    email: 'logan.johnson@example.com',
                    phone: '5556549871',
                },
                {
                    first_name: 'Mia',
                    last_name: 'Brown',
                    email: 'mia.brown@example.com',
                    phone: '5557896540',
                },
                {
                    first_name: 'Benjamin',
                    last_name: 'Miller',
                    email: 'benjamin.miller@example.com',
                    phone: '5554567891',
                },
                {
                    first_name: 'Charlotte',
                    last_name: 'Davis',
                    email: 'charlotte.davis@example.com',
                    phone: '5559873214',
                },
                {
                    first_name: 'Gard',
                    last_name: 'Jerry',
                    email: 'gard.jerry@example.com',
                    phone: '5454567291',
                },
                {
                    first_name: 'Kimberly',
                    last_name: 'Howe',
                    email: 'kimberly-howe@example.com',
                    phone: '5789814214',
                },
            ]);
        });
};
