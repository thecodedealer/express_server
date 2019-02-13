'use strict';

const cron = require('./cronService');
const moment = require('moment');
const crawlerScripts = require('../crawler/scripts');


/* INIT LOGS */
const Logger = require('../log/logService');
const log = new Logger('cron');


const execute = () => {
    console.log('Cron service start.');

    cron.register('test', '* * * * *', () => {
        console.log(`-- Test cron run: ${moment().format()}`);
        crawlerScripts.findWinners();
    });

    /*
        CRAWLER
    */
    cron.register('crawler', '*/30 19 * * 4,7', () => {
        console.log(`-- Crawler cron run: ${moment().format()}`);
    });

    /*
        SETTLING WINNERS
    */
    cron.register('settleWinnings', '*/30 19 * * 4,7', () => {
        console.log(`-- Crawler cron run: ${moment().format()}`);
    });

};

const CRONS = [
    {
        name: 'SITE_CRAWLER',
        period: '*/30 19 * * 4,7',
        timeout: 0,
        fn: () => {
            crawlerScripts.findResults();
        }
    },
    {
        name: 'ANALYZE_WINNINGS',
        period: '*/30 19 * * 4,7',
        timeout: 10 * 1000,
        fn: () => {
            crawlerScripts.findWinners();
        }
    }
];

class CronCtrl {
    constructor() {
        this.cronStack = this.loadCrons()
    }

    loadCrons() {
        return CRONS;
    }

    init() {
        try {
            this.cronStack.forEach(crons => {
                cron.register(crons.name, crons.period,
                    () => {
                        setTimeout(() => {
                            log.info(`Cron [ ${crons.name} ] executed at [ ${moment().format()} ]`);
                            crons.fn()
                        }, crons.timeout)
                    },
                    {
                        timeout: crons.timeout
                    })

            });
            log.info('Cron loaded successfully')
        } catch (e) {
            log.error('Load cron service failed!')
        }

        return cron.getRegisterCrons();
    }
}

module.exports = new CronCtrl();
