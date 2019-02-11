'use strict';

const path = require('path');
const moment = require('moment');

const {createLogger, format, transports, winston} = require('winston');
// const daily = require('winston-daily-rotate-file');
const {combine, timestamp, label, printf} = format;


const consoleFormat = printf(info => {
    return `[${info.timestamp}] ${info.level} : ${info.message}`;
});

class LogService {
    constructor(file) {
        this.logger = createLogger({
            transports: [
                new transports.Console({
                    format: combine(
                        timestamp(),
                        consoleFormat
                    )
                }),
                new transports.File({
                    filename: this._getFilePath(file),
                    format: combine(
                        timestamp(),
                        format.json()
                    )
                })
            ]
        });
    }

    info(message = '', data = {}) {
        this.logger.log('info', message, {data: data});
    }

    error(message = '', data = {}) {
        if (typeof message === 'object' && !!message.stack)
            this.logger.log('error', message.message, {data: message.stack});
        else
            this.logger.log('error', message, {data: data});
    }

    warn(message = '', data = {}) {
        this.logger.log('warn', message, {data: data})
    }


    query(cb) {
        let options = {
            from: new Date - 24 * 60 * 60 * 1000,
            until: new Date,
            limit: 10,
            start: 0,
            order: 'desc'
        };

        this.logger.query(options, function (err, result) {
            if (err) {
                throw err;
            }

            console.log(result);
        });
    }

    /*
        HELPERS
    */
    _getFilePath(file) {
        let fileName = file + '.log';
        return path.join(__dirname, '../../..', 'logs', fileName);
    }
}

module.exports = LogService;
