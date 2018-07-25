const City = require('./models/City');

City.all().then(world => {
    console.log(world)
})

City.all().then(city => {
    console.log(city)
})

City.find(1).then(city => {
    console.log(city);
})

City.find(100).then(city => {
    console.log(city.population)
})

City.create({
    name: "Florence",
    countrycode: "ITA",
    district: "Tuscany",
    population: 383084
}).then(city => {
    console.log(city);
});