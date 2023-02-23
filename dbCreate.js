const express = require('express');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const inquirer = require("inquirer");

const app = express();
const router = require('./router');
const { sequelize } = require("./models/index");
const { Console } = require('console');
const PORT = 3000;

app.use(express.json());
app.use(router);

let drop= false;
let popullate= false;

const dropFunc= async()=> {
    let salida = await exec("npx sequelize db:drop");
    console.log('stdout:', salida.stdout);
    salida = await exec("npx sequelize db:create");
    console.log('stdout:', salida.stdout);
    salida= await exec("npx sequelize db:migrate");
    console.log('stdout:', salida.stdout);
};
const popullateFunc= async()=> {
    let salida = await exec("npx sequelize db:seed:all");
    console.log('stdout:', salida.stdout);
};

inquirer
.prompt([
    {
        type: 'checkbox',
        message: '¿Quieres dropear la base de datos antigua?',
        name: 'drop',
        choices: [
            new inquirer.Separator(' = Select = '),
            {
                name: 'Si',
            },
            {
                name: 'No',
            }
        ],
        validate(answer) {
            if (answer.length < 1) {
                return 'Tienes que elegir una opcion';
            }
            if (answer.length > 1) {
                return 'Tienes que elegir una opcion';
            }
            return true;
        },
    },
    {
        type: 'checkbox',
        message: '¿Quieres poblar la nueva base de datos?',
        name: 'popullate',
        choices: [
            new inquirer.Separator(' = Select = '),
            {
                name: 'Si',
            },
            {
                name: 'No',
            }
        ],
        validate(answer) {
            if (answer.length < 1) {
                return 'Tienes que elegir una opcion';
            }
            if (answer.length > 1) {
                return 'Tienes que elegir una opcion';
            }
            return true;
        },
    },])
.then((answers) => {
    drop= JSON.stringify(answers.drop);
    popullate= JSON.stringify(answers.popullate);
    if(drop=='["Si"]'){
        console.log("dropping");
        dropFunc()
        .then(()=>{
            
            if(popullate=='["Si"]'){
                console.log("popullating");
                popullateFunc();
            }
        });
    }
})
.catch((error) => {
    console.log("Error: "+JSON.stringify(error));
});