const chalk = require('chalk');

const getNotes = require('./notes');

const msg = getNotes();
console.log(msg);


const greenMeg = chalk.green.bold.inverse('Success');

console.log(greenMeg);












/*
const add = require('./utils');
const sum = add(4,-2);
console.log(sum);*/


