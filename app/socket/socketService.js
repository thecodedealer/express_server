'use strict';

import socket_io from 'socket.io';

export default app => {
    return class SocketService {

        constructor() {
            this.io = socket_io(app.get('server'));

            this.init();
        }

        init() {
            this.io.on('connection', socket => {
                console.log('New user connected.');
            })
        }

    }
}

