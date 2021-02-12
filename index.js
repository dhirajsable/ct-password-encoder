const passwordGenerator = require('./src/ctpassword');

const password = passwordGenerator.generateHashedPassword("TESTSTSTS");
console.log("==================   ", password);