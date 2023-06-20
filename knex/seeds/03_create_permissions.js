exports.seed = function (knex) {
    // Deletes ALL existing entries from the 'permissions' table
    return knex('permissions')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('permissions').insert([
                {
                    permission_name: 'read',
                },
                {
                    permission_name: 'write',
                },
                {
                    permission_name: 'delete',
                },
                // Add more seed data if needed
            ]);
        });
};
