const testService = require('./testService');


let testPlayed = [
    {
        name: 'A',
        numbers : [17, 49, 3, 4, 8, 6]
    },
    {
        name: 'B',
        numbers : [34, 23, 12, 1, 44, 10]
    }
];

let testResult = [12, 44, 2, 5, 6, 20];


// testService.checkMain(777, testPlayed, testResult);


let testPlayedExtra = {
  number: '1166867',
  variants: 2
};

let testResultExtra = '7821668';


testService.checkExtra(649, testPlayedExtra, testResultExtra);

