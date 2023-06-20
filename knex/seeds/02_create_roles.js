exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'roles' table
    return knex('roles')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('roles').insert([
                {
                    role_name: 'admin',
                },
                {
                    role_name: 'user',
                },
                {
                    role_name: 'client',
                },
                {
                    role_name: 'home_owner',
                },
                {
                    role_name: 'key_holder',
                },
                {
                    role_name: 'agent',
                },
                // Add more seed data if needed
            ]);
        });
};
