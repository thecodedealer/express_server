'use strict';
import express from 'express';

import apiRoutes from './api/routes';

const router = express.Router();

export default app => {

    // Load API routes
    app.use('/api', apiRoutes(router));

    // Default routes
    app.get('/', (req, res, next) => {
        try {
            res.end('Home');
        }
        catch (err) {
            next(err);
        }
    });

    app.get('/users', (req, res, next) => {
        try {
            res.end('Users');
        }
        catch (err) {
            next(err);
        }
    });


    /*
	    Method not found (must be the last one)
	*/
    app.all('*', (req, res, next) => {
        try {
            res.end('404 Page not found!')
        } catch (err) {
            next(err);
        }
    });

    /*
        Error handler
    */
    app.use((err, req, res, next) => {
        res.json({
            status: false,
            message: `Internal server error`,
            data: {}
        });
        console.log(`Error on routing:`);
        console.error(err);
    });
};
