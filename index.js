const weather = require('weather-js');
 
weather.find({search: 'odessa, ua', degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);
 
  const data = (JSON.stringify(result, null, 2));
  const dat = (JSON.parse(data));
  console.log(dat[0].location.name, dat[1].current.temperature, dat[1].current.date);
});