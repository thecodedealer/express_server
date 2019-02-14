'use strict';

import testController from './test/controller'
import contentController from './content/controller';


export default router => {
    /*
        API ROUTES
    */
    router.get('/', (req, res, next) => {
        try {
            res.ok("API Home")
        }
        catch (err) {
            next(err);
        }
    });

    router.post('/', (req, res, next) => {
        try {
            testController(req, res, next);
        }
        catch (err) {
            next(err);
        }
    });

    router.post('/getTestTable', (req, res, next) => {
        try {

            // console.log('Requested fields: ', req.body.fields);

            res.ok('ok', [
                ['Tiger Nixon', 'System Architect', 'Edinburgh', '61', '2011/04/25', '$320,800'],
                ['Tiger Nixon', 'System Architect', 'Edinburgh', '62', '2011/04/25', '$320,800'],
                ['Tiger Nixon', 'System Architect', 'Edinburgh', '63', '2011/04/25', '$320,800']
            ])
        }
        catch (err) {
            next(err);
        }
    });

    router.post('/getTestChart', (req, res, next) => {
        try {

            // console.log('Requested fields: ', req.body.fields);

            res.ok('ok', [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451])
        }
        catch (err) {
            next(err);
        }
    });

    router.post('/getTestBars', (req, res, next) => {
        try {

            // console.log('Requested fields: ', req.body.fields);

            res.ok('ok', [4215, 5312, 6251, 7841, 9821, 14984])
        }
        catch (err) {
            next(err);
        }
    });

    router.post('/getTestPie', (req, res, next) => {
        try {

            // console.log('Requested fields: ', req.body.fields);

            res.ok('ok', [12.21, 15.58, 11.25, 8.32])
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

    router.all('*', (req, res, next) => {
        try {
            res.json({
                status: false,
                message: `API method not found`,
                data: {}
            });
        } catch (err) {
            res.error(err);
            next(err);
        }
    });

    return router;
};
