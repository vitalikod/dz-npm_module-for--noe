const weather = require('./index.js');
// weather('odessa, ua');

// ======================================================================================================
const move = async () => {
    const data = await weather('odessa, ua');
    console.log(data[0].location.name, data[1].current.temperature, data[1].current.date);
}
move();