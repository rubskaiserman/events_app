const fs = require('fs');
const dataPath =  '../database/clients.json';

module.exports.saveUser = async (user) => {
    let databaseraw = fs.readFileSync(dataPath);
    let database = JSON.parse(databaseraw);

    for(let i = 0; i < database["users"].length; i++) {
        if(database["users"][i]["id"] == user.email) {
            return "Erro. Usuário já cadastrado.";
        }
    }
    database["users"].push(user);
    fs.writeFileSync(dataPath, JSON.stringify(database))
    return "Usuário cadastrado com sucesso";
}
