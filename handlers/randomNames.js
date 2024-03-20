const names = require('./../data/names.json');

module.exports = (req) => {
    let target = names;
    let result;
    switch (req) {
        case 1:
            result = names.female[Math.round(Math.random()*49)];
            return result;
        case 0:
            result = names.male[Math.round(Math.random()*49)];
            return result;
        default:
            return;
    }
}

