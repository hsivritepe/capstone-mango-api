#!/bin/bash

mysql -u root -prootroot --silent --skip-column-names -e "SHOW TABLES" capstone | xargs -L1 -I% echo 'SET FOREIGN_KEY_CHECKS = 0; DROP TABLE %; SET 
FOREIGN_KEY_CHECKS = 1;' | mysql -u root -prootroot -v capstone

# Run knex migration and seed
knex migrate:latest && knex seed:run

