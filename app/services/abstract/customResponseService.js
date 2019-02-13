'use strict';

export default express => {
    const res = express.response;

    res.ok = function (message = "", data = {}) {
        // log.info(message, data);
        this.status(200);
        this.json({
            status: true,
            message: message,
            data: data
        });
    };

    res.nok = function (message = "", data = {}) {
        // log.info(message, data);
        this.status(200);
        this.json({
            status: false,
            message: message,
            data: data
        })
    };

    res.error = function (err) {
        // log.error(err);
        this.status(500);
        this.json({
            status: false,
            message: "Server error!",
            data: err
        })
    }
}
