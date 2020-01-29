const express = require('express');
const bodyParser = require('body-parser')
const userRepo = require('./userRepository.js');

process.env.PORT = 65453;

var app = express();
app.use(bodyParser.json());

//render out a simple default page. 
app.get('/user', (req, res) => {
    var userId = parseInt(req.query.userId);
    if (isNaN(userId)) {
        return { result: -1, error: 'UserId must be numeric;' };
    }
    let user = userRepo.GetUserById(userId);
    res.send(user);
});

app.put('/user/update', (req, res) => {
    //updates the user.
    var user = req.body; 
    res.send(userRepo.UpdateUser(user));
});

app.post('/user/add', (req, res) => {
    var user = req.body; 
    res.send(userRepo.AddUser(user));
});

app.listen(process.env.PORT, () => {
    console.log('Server is up and running on port', process.env.PORT);
});
