const cron = require('node-cron');
const moment = require('moment');

class CronService {
    constructor() {
        this.cronStack = [];
    }


    executeCron() {
        cron.schedule('* * * * *', () => {
            console.log('running a task every minute');
        });
    }


    register(name, period, fn, options = {}) {
        cron.schedule(period, fn, options);

        //log cron
        this.cronStack.push({
            name: name,
            period: period,
            options: options
        })
    }

    validate(data) {
        console.log(cron.validate(data));
    }

    getRegisterCrons() {
        return this.cronStack;
    }

}

module.exports = new CronService();
