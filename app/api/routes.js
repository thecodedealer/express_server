'use strict';

import express from 'express';

export default () => {

    const router = express.Router();

    router.get('/', (req, res, next) => {
        try {
            res.end('API Home');
        }
        catch (err) {
            next(err);
        }
    });

    router.get('/users', (req, res, next) => {
        try {
            res.end('API Users');
        }
        catch (err) {
            next(err);
        }
    });

    /*
	    Method not found (must be the last one)
	*/
    router.all('*', (req, res, next) => {
        try {
            res.json({
                status: false,
                message: `API method not found`,
                data: {}
            });
        } catch (err) {
            next(err);
        }
    });

    return router;
};