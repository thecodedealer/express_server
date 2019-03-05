import jwtService from './tokenizeService'
import time from '../timeService'



const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU1MTQ1NDU2OCwiZXhwIjoxNTUxNDU0NTY4fQ.PNTLjvnekOvMj2vEuWwZI8--hmkMESk7PGAfKMwaGDs"; //invalid
const token2 ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU1MTcxMzAxMiwiZXhwIjoxNTUxNzEzMDEyfQ.2C4hCr3n2D1njmZNbO4BehPg3WnYDBeKoK_bjpIFvoE"; //expired
const token3 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU1MTcxMzQ1MywiZXhwIjoxNTUxNzk5ODUzfQ.5LVz3btHb2cUvsnpB4l8UrSClDSeT8yt_Xl4WXLkHjA";

// jwtService.createToken({userId: 1})
//     .then(data => console.log(data))

// jwtService.validate(token3)
//     .then(data => console.log(data))
//     .catch(e => console.error(e))


// jwtService.isExpired(token2).then(data => console.log(data));

/*
    GET EXPIRATION DATE
*/
jwtService.getExp(token3)
    .then(res => console.log(time.m().unix(res).format()))
    .catch(e => console.log(e));
