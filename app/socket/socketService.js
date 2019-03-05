'use strict';

import socket_io from 'socket.io';


export default app => {

    class SocketService {
        constructor() {
            this.clients = 0;
            this.actions = {};

        }

        init() {
            const server = app.get('server');
            const io = socket_io(server);

            io.on('connection', socket => {

                console.log('Client connected');
                this.clients += 1;


                socket.on('hello', msg => {
                    console.log(msg)
                });

                socket.on('auth', data => {
                    console.log(data)
                });

                socket.emit('action', {
                    message: 'Hello'
                });

                socket.on('disconnect', () => {
                    console.log('Client disconnected');
                    this.clients -= 1;
                });
            });
        }


        getUsers() {
            return this.clients;
        }
    }


    return new SocketService();
}

