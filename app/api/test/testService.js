'use strict';

const _ = require('underscore');

class testService {
    constructor() {

    }

    checkMain(gameId, played, result) {
        // IN: type -> game id || played -> array with objects (payed variants) || result -> array with results
        let winnings = [];

        //iterate played variants
        played.forEach((variant, index, arr) => {


            let hits = this.getMainHits(gameId, variant.numbers, result);

            winnings.push({
                name: variant.name,
                hits: hits,
                win: this.getMainWinnings(gameId, winType, hits)
            });


        });

        console.log(winnings);
    }

    checkExtra(gameId, played, result) {
        // IN: type -> game id || played -> array with objects (payed variants) || result -> array with results

        let winnings = [];
        const baseNum = parseInt(played.number);

        // generate variants of numbers
        let variants = _.map(_.range(0, played.variants), num => {
            return (baseNum + num).toString();
        });

        // iterate played variants
        variants.forEach((variant, index, arr) => {
            let hits = this.getExtraHits(gameId, variant, result);

            winnings.push({
                number: variant,
                hits: hits.hit,
                win: this.getExtraWinnings(gameId, hits)
            });
        });

        console.log(winnings);
    }

    getExtraHits(gameId, played, result) {
        switch (gameId) {
            case 649:
                return this._hit649Extra(played, result);
            case 540:
                break;
            case 777:
                break;
        }
    }

    getMainHits(gameId, played, result) {

        switch (gameId) {
            case 649:
                break;
            case 540:
                break;
            case 777:
                return this._hit777Main(played, result)
        }
    }


    getMainWinnings(gameId, type, hits) {


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
        switch (gameId) {
            case 649:
                break;
            case 540:
                break;
            case 777:
                break;
        }
    }


    /*
        HELPERS
    */
    _hit649Extra(played, result) {
        const mainChecks = [0, 1, 2, 3, 4];
        const specialChecks = [3, -3];

        // generate union between main and special checks
        let checks = _.union(
            _.map(mainChecks, num => {
                return num === 0 ? result : result.substr(num)
            }),
            _.map(specialChecks, num => {
                return (parseInt(result) + num).toString();
            }));

        // find hit
        let hit = _.find(checks, num => played.indexOf(num) !== -1);

        // find index -> for matching to cat
        let flag = checks.indexOf(hit);


        return {
            hit: hit,
            flag: flag
        };
    }

}

module.exports = new testService();