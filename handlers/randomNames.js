const names = require('./../data/names.json');

module.exports = (req) => {
    let random = Math.round(Math.random()*49)
    switch (req) {
        case 1:
            return names.female[random];
        case 0:
            return names.male[random];
        default:
            return;
    }
}

