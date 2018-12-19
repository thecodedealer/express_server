'use strict';
const _ = require('underscore');

/*
    CONSTANTS
*/
const GAMES_ID = [649, 540, 777];

class AnalyzeService {
    constructor() {
        /*
            Variables
        */
        this.mapToCat = {
            id_649: {
                main: {
                    hit_3: "cat_4",
                    hit_4: "cat_3",
                    hit_5: "cat_2",
                    hit_6: "cat_1"
                },
                extra: {
                    index_0: 'cat_1',
                    index_1: 'cat_2',
                    index_2: 'cat_3',
                    index_3: 'cat_4',
                    index_4: 'cat_5',
                    index_5: 'cat_np3',
                    index_6: 'cat_nm3',
                }
            },
            id_540: {
                main: {
                    hit_4: "cat_3",
                    hit_5: "cat_2",
                    hit_5_s: "cat_1"
                },
                extra: {
                    index_0: 'cat_1',
                    index_1: 'cat_2',
                    index_2: 'cat_3',
                    index_3: 'cat_4',
                    index_4: 'cat_5',
                    index_5: 'cat_2',
                    index_6: 'cat_3',
                    index_7: 'cat_4',
                    index_8: 'cat_5',
                }
            },
            id_777: {
                main: {
                    hit_1_j: "cat_8",
                    hit_2_j: "cat_7",
                    hit_3: "cat_6",
                    hit_3_j: "cat_5",
                    hit_4: "cat_4",
                    hit_4_j: "cat_3",
                    hit_5: "cat_2",
                    hit_5_j: "cat_1"
                }
            }
        };

        this.winnings = {
            "id_649": {
                "game": 649,
                "main": {
                    "cat_1": [
                        " REPORT ",
                        "379.656,00",
                        "798.992,00"
                    ],
                    "cat_2": [
                        " 2 ",
                        "63.276,00",
                        "-"
                    ],
                    "cat_3": [
                        " 340 ",
                        "372,21",
                        "-"
                    ],
                    "cat_4": [
                        " 7.932 ",
                        "30,00",
                        "-"
                    ],
                    "total": [
                        "1.290.056,00"
                    ]
                },
                "extra": {
                    "cat_1": [
                        "8221121",
                        "REPORT",
                        "17.925,84",
                        "685.070,26"
                    ],
                    "cat_2": [
                        "221121",
                        "REPORT",
                        "17.925,84",
                        "87.352,92"
                    ],
                    "cat_3": [
                        "21121",
                        "1",
                        "17.925,84",
                        "-"
                    ],
                    "cat_4": [
                        "1121",
                        "8",
                        "2.240,73",
                        "-"
                    ],
                    "cat_5": [
                        "121",
                        "99",
                        "362,13",
                        "-"
                    ],
                    "cat_np3": [
                        "8221124",
                        "REPORT",
                        "5.975,28",
                        "255.088,55"
                    ],
                    "cat_nm3": [
                        "8221118",
                        "REPORT",
                        "5.975,28",
                        "343.974,15"
                    ],
                    "total": [
                        "1.443.189,24"
                    ]
                }
            },
            "id_540": {
                "game": 540,
                "main": {
                    "cat_1": [
                        " REPORT ",
                        "64.021,80",
                        "683.082,40"
                    ],
                    "cat_2": [
                        " REPORT ",
                        "32.010,90",
                        "32.010,90"
                    ],
                    "cat_3": [
                        " 82 ",
                        "390,37",
                        "-"
                    ],
                    "total": [
                        "747.104,20"
                    ]
                },
                "extra": {
                    "cat_1": [
                        "978692",
                        "REPORT",
                        "3.592,38",
                        "180.962,57"
                    ],
                    "cat_2": [
                        "97869|78692",
                        "REPORT",
                        "3.592,38",
                        "3.592,38"
                    ],
                    "cat_3": [
                        "9786|8692",
                        "3",
                        "1.633,66",
                        "-"
                    ],
                    "cat_4": [
                        "978|692",
                        "58",
                        "46,45",
                        "-"
                    ],
                    "cat_5": [
                        "97|92",
                        "512",
                        "10,52",
                        "-"
                    ],
                    "total": [
                        "197.538,79"
                    ]
                }
            },
            "id_777": {
                "game": 777,
                "main": {
                    "cat_1": [
                        " REPORT ",
                        "144.102,86",
                        "2.845.818,45"
                    ],
                    "cat_2": [
                        " 1 ",
                        "420.717,43",
                        "-"
                    ],
                    "cat_3": [
                        " 1 ",
                        "31.157,37",
                        "-"
                    ],
                    "cat_4": [
                        " 30 ",
                        "519,28",
                        "-"
                    ],
                    "cat_5": [
                        " 37 ",
                        "526,30",
                        "-"
                    ],
                    "cat_6": [
                        " 1.636 ",
                        "30,94",
                        "-"
                    ],
                    "cat_7": [
                        " 638 ",
                        "36,62",
                        "-"
                    ],
                    "cat_8": [
                        " 3.023 ",
                        "24,47",
                        "-"
                    ],
                    "total": [
                        "3.480.742,81"
                    ]
                },
                "extra": {
                    "cat_1": [
                        "994577",
                        "REPORT",
                        "14.574,34",
                        "47.418,36"
                    ],
                    "cat_2": [
                        "99457|94577",
                        "REPORT",
                        "14.574,34",
                        "14.574,34"
                    ],
                    "cat_3": [
                        "9945|4577",
                        "18",
                        "607,26",
                        "-"
                    ],
                    "cat_4": [
                        "994|577",
                        "147",
                        "74,35",
                        "-"
                    ],
                    "cat_5": [
                        "99|77",
                        "1.228",
                        "17,80",
                        "-"
                    ],
                    "total": [
                        "105.715,71"
                    ]
                }
            }
        };
    }

    grabData(tickets, result) {
        return {
            tickets: JSON.stringify(tickets),
            result: JSON.stringify(result)
        }
    }


    /*
        METHODS
    */
    checkMainVariants(gameId, played, result) {
        let winnings = [];

        // iterate thru played variants
        played.forEach((variant, index, arr) => {
            let hits = this.getMainHits(gameId, variant.numbers, result);

            winnings.push({
                name: variant.name,
                hit: gameId === 649 ? hits : hits.hits,
                win: this.getMainWinnings(gameId, hits)
            });

            // set joker ig game 777
            if (gameId === 777)
                winnings[index].joker = hits.flag;
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

    /*
        ROUTING
    */
    getMainHits(gameId, played, result) {
        switch (gameId) {
            case 649:
                return this._hitMain649(played, result);
            case 540:
                return this._hitMain540(played, result);
            case 777:
                return this._hitMain777(played, result);
        }
    }

    getExtraHits(gameId, played, result) {
        switch (gameId) {
            case 649:
                return this._hitExtra649(played, result);
            case 540:
                return this._hitExtra540(played, result);
            case 777:
                return this._hitExtra77(played, result);
        }
    }

    getMainWinnings(gameId, hits) {
        switch (gameId) {
            case 649:
                return this._main649winning(hits);
            case 540:
                return this._main540winning(hits);
            case 777:
                return this._main777winning(hits);
        }
    }

    getExtraWinnings(gameId, hits) {
        switch (gameId) {
            case 649:
                return this._extra649winning(hits);
            case 540:
                return this._extra540winning(hits);
            case 777:
                return this._extra777winning(hits);
        }
    }


    /*
        HELPERS
    */
    _hitMain649(played, result) {
        return _.intersection(played, result)
    }

    _hitMain540(played, result) {
        let flag = false; //for 5 hits straight

        let hits = _.intersection(played, result);

        //check if is 5 hits straight
        if (hits.length === 5) {
            result.pop();
            flag = hits.length === _.intersection(played, result).length
        }

        return {
            hits: hits,
            flag: flag
        };
    }

    _hitMain777(playedOriginal, resultOriginal) {
        const result = [...resultOriginal];
        const joker = result.pop();
        const played = [...playedOriginal];
        const playedJoker = played.pop();

        //set joker
        const hasJoker = joker === playedJoker;
        const hits = _.intersection(played, result);

        return {
            hits: hits,
            flag: hasJoker
        }
    }

    _main649winning(hits) {
        // IN -> array with hit numbers
        // OUT -> obj winning
        let win = {};

        //map hit to cat and get winnings
        let mappedHits = this.mapToCat.id_649.main[`hit_${hits.length}`];

        if (hits.length >= 3) {
            win[mappedHits] = this.winnings.id_649.main[mappedHits][1];
            return win
        } else
            return false;
    }

    _main540winning(hits) {
        // IN -> array with hit numbers
        // OUT -> obj winning
        let win = {};

        //prepare hit type
        let hitType = hits.flag ? '5_s' : hits.hits.length;

        //map hit to cat and get winnings
        let mappedHits = this.mapToCat.id_540.main[`hit_${hitType}`];

        if (hits.hits.length >= 4) {
            win[mappedHits] = this.winnings.id_540.main[mappedHits][1];
            return win
        } else
            return false;
    }

    _main777winning(hits) {
        // IN -> array with hit numbers
        // OUT -> obj winning
        let win = {};

        //prepare hit type
        let hitType = hits.flag ? `${hits.hits.length}_j` : hits.hits.length;

        //map hit to cat and get winnings
        let mappedHits = this.mapToCat.id_777.main[`hit_${hitType}`];

        if (hits.hits.length >= 4) {
            win[mappedHits] = this.winnings.id_777.main[mappedHits][1];
            return win
        } else
            return false;
    }

    _hitExtra649(played, result) {
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

    _hitExtra540(played, result) {
        const mainChecks = [0, 5, 4, 3, 2];
        const reverseChecks = [1, 2, 3, 4]

        // generate union between main and special checks
        let checks = _.union(
            _.map(mainChecks, num => {
                return num === 0 ? result : result.substr(0, num);
            }),

            _.map(reverseChecks, num => {
                return result.substr(num);
            })

        );

        // find hit
        let hit = _.find(checks, num => played.indexOf(num) !== -1);

        // find index -> for matching to cat
        let flag = checks.indexOf(hit);


        return {
            hit: hit,
            flag: flag
        };
    }

    _hitExtra77(played, result) {

    }

    _extra649winning(hits) {
        let win = {};

        if (hits.hit) {
            let mappedHits = this.mapToCat.id_649.extra[`index_${hits.flag}`];
            win[mappedHits] = this.winnings.id_649.extra[mappedHits][2];
            return win;
        } else
            return false;
    }

    _extra540winning(hits) {
        let win = {};

        if (hits.hit) {
            let mappedHits = this.mapToCat.id_540.extra[`index_${hits.flag}`];
            win[mappedHits] = this.winnings.id_540.extra[mappedHits][2];
            return win;
        } else
            return false;
    }

    _extra777winning(hits) {

    }

}

module.exports = new AnalyzeService();