**Getting Started**
Please follow the instructions to install the project to your local environment.

-   npm install
-   create the .env file in your root with the variables listed in envsample file
-   create a database in your localhost
-   execute `knex migrate:latest` command to create the tables
-   execute `knex seed:run` command to create seeds

_BONUS_

-   you can execute the `./delete_tables.sh` script to delete the database and execute knex migrate and knex seed commands from your command line.

Only be aware that the script is using capstone as database name so change the script accordingly before using it.
