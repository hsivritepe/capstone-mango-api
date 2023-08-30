// require('dotenv').config();

// module.exports = {
//     development: {
//         client: 'mysql2',
//         connection: {
//             host: process.env.DB_HOST,
//             port: 3306,
//             user: process.env.DB_USERNAME,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_DATABASE,
//             charset: 'utf8',
//         },
//         migrations: {
//             directory: __dirname + '/knex/migrations',
//         },
//         seeds: {
//             directory: __dirname + '/knex/seeds',
//         },
//     },
//     production: {
//         client: 'mysql2',
//         connection: {
//             host: process.env.DB_HOST,
//             port: 3306,
//             user: process.env.DB_USERNAME,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_DATABASE,
//             charset: 'utf8',
//         },
//         migrations: {
//             directory: __dirname + '/knex/migrations',
//         },
//         seeds: {
//             directory: __dirname + '/knex/seeds',
//         },
//     },
// };

module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: 'rootroot',
            database: 'capstone',
            charset: 'utf8',
        },
        migrations: {
            directory: __dirname + '/knex/migrations',
        },
        seeds: {
            directory: __dirname + '/knex/seeds',
        },
    },
};
