const fs = require('fs');
const path = require('path');

const databasePath = path.join(__dirname, '../', "data/", "database.json")

module.exports.readData = (req) => {
    fs.readFile(databasePath, "utf-8", (error, data) => {
        if (error) {
            console.log(error);
        }
        
        return data;
    })
}