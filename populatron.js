const fs = require("fs");
const parse = require("csv-parse");

module.exports = {
  totalPopulation(onFinished) {
    let total = 0;
    fs.readFile("./cities.csv", (err, csvFile) => {
      parse(csvFile, { columns: true }, (error, result) => {
        result.forEach((city) => {
          total += parseInt(city.population);
        });
        onFinished(total);
      });
    });
  },
};
