'use strict';

export default (req, res, next) => {

    const fields = req.body.fields;

    res.json({
        status: true,
        message: "",
        data: ['one', 'two', 'three']
    })

};