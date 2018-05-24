# pg-promise Lab

In this lab, you will create model objects for cities.

## Database setup

## Enter psql

```bash
psql
```

## Create database

```sql
CREATE DATABASE world;
```

## Import data

```sql
\c world
\i database/world.sql
```

## Install required pg-promise dependencies

```bash
npm install --save pg-promise bluebird pg-monitor
```

## Create a JavaScript database connection file

Copy and paste the connection boilerplate into `database/connection.js`.

Make sure to replace the `database-name` with the name of your database.

```js
const promise = require("bluebird");
const monitor = require("pg-monitor");

let initOptions = {};

// Display better error stack traces in development.
if (process.NODE_ENV !== "production") {
    promise.config({
        longStackTraces: true
    });
    initOptions = {
        promiseLib: promise
    };
}

// attach to all events at once;
monitor.attach(initOptions, ["query", "error"]);

// Import pg-promise and initialize the library with an empty object.
const pgp = require("pg-promise")(initOptions);

// Prepare the connection URL from the format: 'postgres://username:password@host:port/database';
const connectionURL = "postgres://localhost:5432/database-name";

// Creating a new database connection with the provided URL.
const db = pgp(connectionURL);

module.exports = db;
```

## Create a model

Create a model file `models/city.js`

The file should define and export a single `City` object.

Define a `City.all` function that returns a promise using `pg-promise` that queries all cities in the database.

Use the `City.all` function in the `index.js` file to log the name of the first five cities from the query.

Define a `City.find` function that accepts an ID returns a promise that queries the database for the city with that ID.

Use the `City.find` function in the `index.js` file to log the population of the city with the ID of 100.

Define a `City.create` function that accepts a `city` object and inserts
a new row into the city table with the provided information.

Use the `City.create` function in the `index.js` file to create a new city.

Define a `City.update` function that accepts a `cityUpdates` object that contains
values for all columns of an existing city, along with the ID. The function should
update that row in the city table with this information.

Use the `City.update` function in the `index.js` file to update a city.

Define a `City.delete` function that accepts an ID and removes the corresponding city in the table.

Create a `City.allInCountry` function that accepts a country name like `Brazil` and returns all columns in the city table that match.
