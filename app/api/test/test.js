const testService = require('./testService');


let testPlayed = [
    {
        name: 'A',
        numbers : [17, 49, 3, 4, 8, 6]
    },
    {
        name: 'B',
        numbers : [34, 23, 12, 1, 44, 6]
    }
];

let testResult = [12, 44, 2, 5, 6, 23];


testService.checkMain(649, testPlayed, testResult);