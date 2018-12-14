'use strict';

const _ = require('underscore');

class testService {
    constructor() {

    }

    checkMain(gameId, played, result) {
        // IN: type -> game id || played -> array with objects (payed variants) || result -> array with results
        //
        let winType = 'main';
        let winnings = [];

        //iterate played variants
        played.forEach((variant, index, arr) => {

            let hits = null;

            switch (gameId) {
                case 649:
                    let hits = _.intersection(variant.numbers, result);

                    winnings.push({
                        name: variant.name,
                        hits: hits,
                        win: this.getMainWinnings(gameId, winType, hits)
                    });

                    break;
                case 540:
                    break;
                case 777:
                    break;
            }

        });

        console.log(winnings);
    }

    checkExtra(gameId, played, result) {

    }


    getMainWinnings(gameId, type, hits) {

        if (type === 'main')
            switch (gameId) {
                case 649:
                    break;
                case 540:
                    break;
                case 777:
                    break;
            }
    }

    getExtraWinnings(gameId, type, hits) {

        if (type === 'extra')
            switch (gameId) {
                case 649:
                    break;
                case 540:
                    break;
                case 777:
                    break;
            }
    }


    mapHitToCat(gameId, type, hit) {

    }

    /*

        HELPERS
    */


}

module.exports = new testService();