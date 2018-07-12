const app = require('express')();
var morgan = require('morgan')
var http = require('http').Server(app);
var io = require('socket.io')(http);
const socket = require('./middleware/socket');
var fs = require('fs');
var path = require('path')

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
    flags: 'a'
})

// setup the logger
app.use(morgan('combined', {
    stream: accessLogStream
}))

app.get('/', function (req, res) {
    console.log(req.ip);
    res.sendfile('index.html');
});


var users_online = 0;

//Whenever someone connects this gets executed
io.on('connection', function (socket) {
    users_online++;
    // console.log('A user connected' + ' Users online: ' + users_online);

    //Send a message after a timeout of 4seconds
    //  setTimeout(function() {
    //     socket.send('Sent a message 4seconds after connection!');
    //  }, 4000);

    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
        users_online--;
        // console.log('A user disconnected' + ' Users online: ' + users_online);
    });
});

app.get('/online-users', (req, res) => {
    res.json({
        users: users_online
    });
})


app.get('/send-message', (req, res) => {
    io.on('connection', function (socket) {
        //Send a message after a timeout of 4seconds

        socket.send('Sent a message 4seconds after connection!');

    });
    res.json({
        message: 'done'
    });
})


http.listen(3000, function () {
    console.log('listening on *:3000');
});