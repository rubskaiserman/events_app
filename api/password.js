// Temp. file handle password menagement

const bcrypt = require('bcrypt');

module.exports.encripter = async (plainTextPassword) => {
    return await bcrypt.hash(plainTextPassword, 10);
}

module.exports.decripter = async (plainTextPassword, hash) => {
    return await bcrypt.compare(plainTextPassword, hash);
}