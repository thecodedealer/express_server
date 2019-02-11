'use strict';

import testController from './test/controller'


export default router => {
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
            res.nok('API Users');
        }
        catch (err) {
            next(err);
        }
    });

    router.get('/get-error', (req, res, next) => {
        try {
            res.error('API Users');
        }
        catch (err) {
            next(err);
        }
    });


    /*
	    Endpoint not found
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
