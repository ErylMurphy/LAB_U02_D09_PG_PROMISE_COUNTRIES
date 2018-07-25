const db = require('../database/connection');
const City = {};

City.all = () => {return db.any("SELECT * FROM city")};

City.all = id => {return db.any("SELECT * FROM city WHERE id < 6")};

City.find = id => db.one("SELECT * FROM city WHERE id = $1", [id]);

City.create = city => db.one("INSERT INTO city (name, countrycode, district, population) VALUES ($1, $2, $3) RETURNING *", [city.name, city.countrycode, city.district, city.population]); 

module.exports = City;