'use strict';

import express from 'express';
import http from 'http';
import body_parser from 'body-parser';
import cookie_parser from 'cookie-parser';
const cors = require('cors');

import Promise from 'bluebird';

import ExpressRoutes from './ExpressRoutes';


const PORT = process.env.PORT || 3000;

const config = () => {
    const app = express();
    app.set('server', http.Server(app));

    app.set('debug', true);
    app.use(body_parser.json());
    app.use(cookie_parser());
    app.use(cors())

    return app;
};

const run = async app => {
    const server = app.get('server');

    /*
        Load routes
    */
    ExpressRoutes(app);

    /*
	    Start server
	*/
    server.listen(PORT, () => {
        console.log(`App is running on port ${PORT}`);
    });
};

/*
    Start app
*/
export const start = async () => {
    try {
        const app = config();
        await run(app);
    } catch (err) {
        console.error('Server failed on booting!');
        console.error(err);
        process.exit();
    }
};

// module.exports = start;