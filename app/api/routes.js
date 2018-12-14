'use strict';

import express from 'express';

import testController from './test/controller'

const router = express.Router();

export default () => {
    /*
        ROUTES
    */
    router.get('/', (req, res, next) => {
        try {
            testController(req, res, next);
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
	    Method not found
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