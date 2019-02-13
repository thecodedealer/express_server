'use strict';

export default (req, res, next) => {

<<<<<<< HEAD
    const fields = req.body.fields;

    res.json({
        status: true,
        message: "",
        data: ['one', 'two', 'three']
    })
=======
    res.ok('Home')
>>>>>>> 27f21086bce5051b227888a5b908af50be95d0c9

};
