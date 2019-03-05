'use strict';

const moment =  require('moment')

class TimeService {
    constructor() {

    }

    m() {
        return moment;
    }
}


module.exports = new TimeService();