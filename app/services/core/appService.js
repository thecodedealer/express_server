const config = require('../config');
const _ = require('underscore');


const URLS = {
    db : ''
};

class AppService {
    constructor() {
        /*
            VARIABLES
        */
        this.userProfile = ['name', 'sex', 'age', 'email'];
        this.reqResults = ['year', 'month'];
        this.userUpdateTicket = ['status', 'extra.number'];
    }

    getDbUrl() {
        return URLS['db'];
    }

    /*
        CREATE DYNAMIC UPDATE
    */
    createUpdate(slug, update) {
        let result = {};

        for (let key in update) {
            if (_.indexOf(this.userProfile, key) !== -1)
                result[String(slug + '.' + key)] = update[key];
        }
        return result;
    };

    /*
        MAP UPDATES CATEGORY
    */
    toCamelCase(slug) {
        let splitter = slug.split('-');
        let result = splitter[0];
        for (let i = 1; i < splitter.length; i++)
            result += splitter[i][0].toUpperCase() + splitter[i].slice(1);
        return result;
    }

    /*
        VALIDATE UPDATE
    */
    validateUpdate(slug, updates) {
        let result = {};
        _.mapObject(updates, (val, key) => {
            if (_.indexOf(this[this.toCamelCase(slug)], key) !== -1)
                result[key] = val;
        });
        return result;
    }

    /*
        Update user tickets
    */

    updateUserTickets(tickets, gameId) {
        const field = tickets['game_' + gameId];

        // Increment played ticket
        field.play = field.play + 1;

        const result = {};

        result["tickets.game_" + gameId + '.play'] = field.play + 1;

        return result;
    }

}

export default new AppService();
