'use strict';

import jwt from 'jsonwebtoken';
import time from '../timeService';


// users hardcoded for simplicity, store in a db for production applications
const users = [{id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User'}];
const secret = 'jewfpojwepfw///.d2378947209ru 23nm!!!!E.rheuufh3kj09ru34';

const ERRORS_NAME = ['TokenExpiredError', 'JsonWebTokenError'];

class TokenizeService {
    constructor() {
        /*
            JWT OPTIONS
        */
        this.options = {
            expiresIn: '1d'
        }
    }

    /**
     * CREATE TOKEN
     * @param  {object} payload
     * @returns {Promise} token
     * */
    async createToken(payload) {
        return jwt.sign(payload, secret, this.options)
    }

    /**
     * VALIDATE TOKEN
     * @param {string} token
     * @returns {Promise} {payload}
     * */
    async validate(token) {
        return jwt.verify(token, secret)
    }

    /**
     *  CHECK TOKEN EXPIRATION
     *  @param {string} token
     *  @returns {Promise} true/false
     * */
    async isExpired(token) {
        let isExpired = false;
        await jwt.verify(token, secret, (err, data) => {
            if(err)
                isExpired = (err.name === 'TokenExpiredError' || ERRORS_NAME.indexOf(err.name) !== -1);
        });
        return isExpired;
    }

    /**
     *  GET TOKEN EXPIRATION DATE
     *  @param {string} token
     *  @returns {Promise}
     * */
    async getExp(token) {
        const payload = await this.validate(token);
        return payload.exp;
    }
}

export default new TokenizeService();