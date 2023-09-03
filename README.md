<h1 align="center" id="title">Mango - Villa Rental API</h1>

<p id="description">This is an API build for villa rental business.</p>

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   CRUD properties (houses) contacts home attributes home categories calendars bookings destinations users etc
*   Manage a villa rental business with this API when it is finished.
<br/>

<h2>💻 Built with</h2>

Technologies used in the project:

*   Node.js
*   Express.js
*   MySQL
*   Joi for data validation
*   knex - ORM
*   swagger - API documentation

<br/>
<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the repository</p>

<p>2. Install the dependencies</p>

```
npm install
```

<p>3. Edit the .env file with your variable values</p>

<p>4. Create a DB in your localhost</p>

<p>5. Create tables in your DB</p>

```
knex migrate:latest
```

<p>6. Create the data with seeds</p>

```
knex seed:run
```

<p>7. To start the server</p>

```
npm run start:development
```
BONUS

you can execute the ./delete_tables.sh script to delete the database and execute knex migrate and knex seed commands from your command line.
Only be aware that the script is using capstone as database name so change the script accordingly before using it.
