// const app = require('express')();
// const server = require('http').Server(app);
// const io = require('socket.io')(server);
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
//
// /*
//     Middleware
// */
// app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
//
// //Set headers
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type, Accept, authorization");
//     res.header("Access-Control-Allow-Methods", ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE']);
//     res.header("Access-Control-Allow-Credentials", "true");
//     next();
// });
//
//
//
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });
//
// // keep track of users online
// let online_users = 0;
// let auth_users = 0;
//
// io.on('connection', (socket) => {
//     let headers = socket.request;
//     let cookies = JSON.stringify(headers.headers.cookie);
//
//     // console.log(cookies.split('; '));
//
//     if(socket.request.headers.cookie.auth)
//         auth_users ++;
//     else
//         online_users ++;
//
//     socket.on('disconnect', ()=>{
//         online_users --;
//     });
//
//     socket.on('hello', (data) => {
//         console.log(data);
//     });
// });
//
//
// app.get('/online-users', (req, res) => {
//     res.json({data: [online_users], status: true})
// });
//
// app.get('/send-message', (req, res) => {
//
//     io.emit('announcements', {
//         message: 'Ce zici boss?'
//     });
//     res.json('Message sent!')
// });
//
// app.get('/table-config', (req, res)  =>{
//     res.json([
//         {
//             name: ''
//         }
//     ])
// });
//
//
// // init server
// server.listen(3000);

'use strict';

const app = require('./build/server');

app.start();