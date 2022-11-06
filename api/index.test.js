const axios = require('axios')

test('signup', async ()=> {
    const data = JSON.stringify({
        'email': 'rubskaiserman@gmail.com',
        'username': 'rubskaiserman',
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

    const response = await axios(config)
    expect(JSON.stringify(response.data)).toBe(data)
});