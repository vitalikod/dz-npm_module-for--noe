const weather = require('weather-js');

const sity = (name) => {
  weather.find({search: name, degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
    const data = (JSON.stringify(result, null, 2));
    const dat = (JSON.parse(data));
    console.log(dat[0].location.name, dat[1].current.temperature, dat[1].current.date);
  });
}

// ==============================================================================================

// const sity = (name) => {
//   return new Promise((resolve, reject) => {
//     weather.find({search: name, degreeType: 'C'}, function(err, result) {
//       if(err) console.log(err);
//       resolve(result[1].current.temperature);
//     })
//   })
// }
module.exports = sity;