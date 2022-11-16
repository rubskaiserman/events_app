const axios = require('axios');
const password = require('./password.js')
const bcrypt = require('bcrypt')

test('signup', async ()=> {
    const data = JSON.stringify({
        'email': 'rubskaiserman@gmail.com',
        'name': 'Rubens Kaiserman',
        'password': 'batatinha'
    });

    var config = {
    method: 'post',
    url: 'http://localhost:3000/signup',
    headers: {
        'Content-Type': 'application/json'
    },
    data: data
    };

    let response;
    response = await axios(config)
    expect(response.data).toBe("Usuário cadastrado com sucesso")
    response = await axios(config);
    expect(response.data).toBe("Erro. Usuário já cadastrado.")
});

test('password.js', async ()=> {
    plainTextPassword = 'batatinha123';
    hashedPassword = await password.encripter(plainTextPassword);

    passwordTrueCheckage = await password.decripter(plainTextPassword, hashedPassword);
    passwordFalseCheckage = await password.decripter('batatinha1234', hashedPassword);
    expect(passwordTrueCheckage).toBe(true)
    expect(passwordFalseCheckage).toBe(false)
});