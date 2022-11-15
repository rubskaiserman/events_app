const fs = require('fs');
const dataPath =  '../database/clients.json';

module.exports.saveUser = (user) => {
    let databaseraw = fs.readFileSync(dataPath);
    let database = JSON.parse(databaseraw);

    database["users"].push(user);
    fs.writeFileSync(dataPath, JSON.stringify(database));

    return "success"
}
