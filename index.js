#!/usr/bin/env node
'use strict';
const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');
const terminalLink = require('terminal-link');
const importJsx = require('import-jsx');
const {h, render} = require('ink');

const app = importJsx('./app');

clear();
console.log(
    chalk.magenta(
        figlet.textSync('MFadhil', {horizontalLayout: 'full', font: 'slant'})
    )
)

console.log('\x1b[33m', 'Wellcome to my CLI');
console.log(' ');
console.log('\x1b[32m', 'Direct', '\x1b[37m', 'link:')
console.log('\x1b[0m');

render(h(app));

