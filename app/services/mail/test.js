const mail = require('./mailService');


// mail.send()
//     .then(data => console.log(data))
//     .catch(e => console.error(e));


const obj = {
    name: 'Niqei',
    money: {win: 2, lose: 3},
    money2: {win: 3, lose: 4},
    total: {win: 5, lose: 7}
};


let update = {
    money: {win: 3, lose: 3},
    total: {win: 6, lose: 6}
};
