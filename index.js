const readlineSync = require('readline-sync');

const chalk = require('chalk');

const resposta = chalk.green.underline

const property = [];
let input = "";

while (input != "sair"){
    input = readlineSync.question('Digite uma propriedade CSS, caso queira ver sua lista digite "mostrar" ou para sair digite "sair" : ');

    if(input == "mostrar"){
        console.log(property.sort().join('\n'));
    }else if(!property.includes(input) && input != "sair"){
        property.push(input);
    }
}

console.log(resposta(property.sort().join('\n')))