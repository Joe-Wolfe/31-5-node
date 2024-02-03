/** Command-line tool to generate Markov text. */

const MarkovMachine = require('./markov');
const fs = require('fs');

const markov = new MarkovMachine(fs.readFileSync('eggs.txt', 'utf8'));
console.log(markov.makeText(100));
