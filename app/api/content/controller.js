'use strict';

const CONTENT = {
    "common": {
        "close": "Inchide"
    }
};

export default (req, res, next) => {

    res.json(CONTENT);

};