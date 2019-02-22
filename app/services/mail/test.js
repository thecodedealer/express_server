const mail = require('./mailService');


// mail.send()
//     .then(data => console.log(data))
//     .catch(e => console.error(e));



const str = JSON.stringify({"encryptedMessage":"s+zpj1MfjGpGPL6xt6Sdeg/ogM/J1RGNf2SNC0Bj8fl+Eb/EkH8JxKrpCRZeLNOWpPj8c2qR9CcGs6sVFlPvze9U9X6V9syQarq9ExcX/8Wf5OfioeIS3HoSL473S3zmqmXjV1OTOMdV/yKNGMjUawYA1bg5GzcbLMYY0UpmrsIqz2T39YsuhNbDmpDJAmB9dl0RKHLPoIO6Z/l7XENWx2J2GkgObZ/CqVZiMAsG9bOLa4EREQZSu0IzomqlKikJ2oB4f35LwYtdyqkoZ2nTT1GgbNDCb0A4lSWV7rqPHZYCeJc3r9dlPLBa9/48uLM9rMpBsrkiU34tqVjexBQiIZgGMzH0KKBa7joIpSPHmX249IfgHT+a93qtFE1Ll1O1lD2unqrOaTj/aULdElpvesWa62Ig63CVw8/2Z2scKxjGgn9BKX/Gh/Fhgw55bIvNsZbptcg2DW/qlh6Gnergv0J4DNcRmc+SzlUCCGVyc5GdbRq0hrYI","ephemeralPublicKey":"BGHit5ogNVeCyEuiUeb+tCVq7hcMXJABpXSh7GRcQOM8BHXWO/ZNN2TJlv+CW1l74Zg2w4Msl2W43oLiLrflX8Q\u003dtag"});

console.log(str.length)