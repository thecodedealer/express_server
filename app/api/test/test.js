const _ = require('underscore');
const mongoose = require('mongoose');
const config = require('../../config');
const Promise = require('bluebird');

const timeService = require('../timeService');

//Models
const Results = require('../../models/resultsModel');
const Tickets = require('../../models/ticketModel');


const crawlerService = require('./crawlerService');
const analizeService = require('./analizeService');

const Logger = require('../log/logService');
// mongoose.connect(config.database, {useNewUrlParser: true});

//instantiate Logger
const log = new Logger('../../logs/crawler.log');


const RESULT = {
    date: {
        full: '',
        year: '',
        month: '',
        day: ''
    },
    type: '',
    results: {},
    winnings: {}
};

const findResults = () => {
    log.info('Crawler start ...');

    /*
        VARIABLES
    */
    const nextGameDate = timeService.getNGD().gameDate.split('|')[0];
    const lastSavedResultDate = crawlerService.getLastSavedDate();

    // If next game date is matching last date saved in local DB => exit function
    if (lastSavedResultDate === nextGameDate) {
        log.info(`Results already acquired for [ ${nextGameDate} ]`);
        process.exit();
        return;
    } else
        crawlerService.fetchLotoHomePage(true)
            .then(data => {
                const $ = data;

                // Check Loto Home page for date and compare with last saved date
                // If no now date => log
                // Else if new date => start crawling for results and winnings
                const lottoDate = crawlerService.getHomePageDate($);

                if (lottoDate === lastSavedResultDate) {
                    log.error(`- NO new results [SITE DATE: ${lottoDate} | LAST DATE: ${crawlerService.getLastSavedDate()} ]`);
                    process.exit();
                } else {
                    log.info('Crawling ...');

                    // 1. Check if special extraction
                    let isSpecial = crawlerService.isSpecial($);

                    // 2. resolve results
                    RESULT.results = !isSpecial ? crawlerService.getResults($)
                        : crawlerService.addSpeciale(crawlerService.getResults($), crawlerService.getResultsSpecial($));

                    // 3. resolve winning
                    crawlerService.fetchLotoWinningsPages(true)
                        .then(data => {

                            //4. get winnigs
                            let winnings = crawlerService.getWinnings(data, lottoDate);

                            //5. check for winnings sanity
                            if (!winnings.sanityCheck.status) {
                                log.error(`Sanity check error! - ${winnings.sanityCheck.message} -`);
                                process.exit();
                            } else {
                                RESULT.winnings = winnings.winnings;

                                // console.log(JSON.stringify(RESULT.winnings, null, '\t'));

                                log.info('Results acquired.');

                                // console.log(RESULT);

                                // resolve date
                                RESULT.date = {
                                    full: lottoDate,
                                    year: lottoDate.split('-')[2],
                                    month: lottoDate.split('-')[1],
                                    day: lottoDate.split('-')[0]
                                };

                                // save result to DB
                                Results.create({
                                    resultsId: '1234',
                                    date: RESULT.date,
                                    type: isSpecial ? 2 : 1,
                                    results: RESULT.results,
                                    winnings: RESULT.winnings
                                })
                                    .then(data => {
                                        log.info('Result saved to DB successful');
                                        mongoose.connection.close();

                                        //add date to local dates DB
                                        crawlerService.saveNewDateLocal(lottoDate, err => {
                                            if (err) log.error(err);
                                            log.info('Date saved local.');
                                        });
                                    })
                                    .catch(err => {
                                        log.error('Error from saving result to DB.');
                                        mongoose.connection.close();
                                    });
                            }
                        })
                        .catch(err => log.error(err));
                }
            })
            .catch(err => log.error(err))
};

const testTickets = [
    {
        "money": {
            "price": "5.6"
        },
        "lucky": {
            "numbers": []
        },
        "main": {
            "variants": [
                {
                    "name": "A",
                    "numbers": [
                        37,
                        35,
                        32,
                        16,
                        4
                    ]
                },
                {
                    "name": "B",
                    "numbers": [
                        3,
                        14,
                        24,
                        20,
                        28
                    ]
                }
            ],
            "main_type": 1
        },
        "extra": {
            "variants": 3
        },
        "_id": "5bf90c2df33b8357e8bad4da",
        "userId": 1,
        "gameId": 540,
        "number": 1,
        "gameDay": "25.11.2018|7",
        "status": 0,
        "gameDate": "",
        "created_at": "2018-11-24T08:30:37.492Z",
        "updatedAt": "2018-11-24T08:30:37.492Z",
        "__v": 0
    }
];
const testResult = {
    "date": {
        "full": "09-12-2018",
        "year": 2018,
        "month": 12,
        "day": 9
    },
    "_id": "5c0d6228dd7bf00d1c088c56",
    "resultsId": "1234",
    "type": 1,
    "results": {
        "id_649": {
            "game": 649,
            "main": [
                22,
                23,
                24,
                9,
                47,
                33
            ],
            "extra": [
                8,
                2,
                2,
                1,
                1,
                2,
                1
            ]
        },
        "id_540": {
            "game": 540,
            "main": [
                14,
                2,
                15,
                13,
                36,
                4
            ],
            "extra": [
                9,
                7,
                8,
                6,
                9,
                2
            ]
        },
        "id_777": {
            "game": 777,
            "main": [
                38,
                14,
                37,
                12,
                19,
                20
            ],
            "extra": [
                9,
                9,
                4,
                5,
                7,
                7
            ]
        }
    },
    "winnings": {
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
    },
    "created_at": "2018-12-09T18:42:48.549Z",
    "updatedAt": "2018-12-09T18:42:48.549Z",
    "__v": 0
};

const findWinners = () => {
    let tickets = [];
    let result = {};
    let gameDate = '';

    /* Promise.all([Results.findOne({"date.full": "09-12-2018"}), Tickets.find({gameDay: "25.11.2018|7"})])
         .then(data => {
             result = data[0];
             tickets = data[1];

             console.log('---------');
             console.log(JSON.stringify(tickets, null, '\t'))
             console.log(JSON.stringify(result, null, '\t'))
             // console.log(analizeService.grabData(tickets, result));
         })
         .catch(err => console.error(err))
         .finally(() => mongoose.connection.close())
 */
};

// findResults();

// findWinners();

let result = [
    22,
    23,
    24,
    9,
    3,
    20,
];

let played = [
    {
        "name": "A",
        "numbers": [
            37,
            35,
            32,
            16,
            9,
            20
        ]
    },
    {
        "name": "B",
        "numbers": [
            22,
            23,
            24,
            9,
            3,
            20
        ]
    }
];

// analizeService.checkMainVariants(777, played, result);

let testPlayedExtra = {
    number: '330633',
    variants: 1
};

let testResultExtra = '612633';


analizeService.checkExtra(540, testPlayedExtra, testResultExtra);