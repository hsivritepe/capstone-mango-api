exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'users' table
    return knex('users')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {
                    username: 'hakan',
                    password: '12345',
                    email: 'hakan@sivritepe.com',
                    is_admin: true,
                    first_name: 'Hakan',
                    last_name: 'Sivritepe',
                },
                {
                    username: 'jane_smith',
                    password: 'password456',
                    email: 'jane@example.com',
                    is_admin: true,
                    first_name: 'Jane',
                    last_name: 'Smith',
                },
                {
                    username: 'john_doe',
                    password: 'password123',
                    email: 'john@example.com',
                    is_admin: false,
                    first_name: 'John',
                    last_name: 'Doe',
                },
                {
                    username: 'mary_johnson',
                    password: 'mary123',
                    email: 'mary@example.com',
                    is_admin: false,
                    first_name: 'Mary',
                    last_name: 'Johnson',
                },
                {
                    username: 'alex_wilson',
                    password: 'alex987',
                    email: 'alex@example.com',
                    is_admin: false,
                    first_name: 'Alex',
                    last_name: 'Wilson',
                },
                {
                    username: 'sam_jackson',
                    password: 'sam789',
                    email: 'sam@example.com',
                    is_admin: false,
                    first_name: 'Sam',
                    last_name: 'Jackson',
                },
            ]);
        });
};
