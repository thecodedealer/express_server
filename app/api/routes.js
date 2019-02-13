'use strict';

import express from 'express';

import testController from './test/controller'
import contentController from './content/controller';

const router = express.Router();

export default () => {
    /*
        API ROUTES
    */
    router.post('/', (req, res, next) => {
        try {
            testController(req, res, next);
        }
        catch (err) {
            next(err);
        }
    });

    router.get('/getContent', (req, res, next) => {
       try {
           contentController(req, res, next)
       }
       catch (e) {
           next(e)
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
	    API method not found
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