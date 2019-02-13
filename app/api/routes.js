'use strict';

import testController from './test/controller'
import contentController from './content/controller';


export default router => {
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
<<<<<<< HEAD
	    API method not found
=======
	    Endpoint not found
>>>>>>> 27f21086bce5051b227888a5b908af50be95d0c9
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
