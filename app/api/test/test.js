const obj = {
    name : 'Ion',
    age : 24,
    money: 'good'
}


const {name, ...objWithoutMoney} = obj;

console.log(objWithoutMoney);