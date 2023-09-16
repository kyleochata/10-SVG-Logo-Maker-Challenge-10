/*
Inquirer will be on index.

create a different js script with combining all the inquirer outputs to send into a svg.logo maker fxn

questions: 
  1. Ask for text
  2. Ask for text color: keyword or hex
  3. Ask for shape: list: circle, triangle, square
  4. Ask for shape color: keyword or hex

need fs to writetofile named 'logo.svg'
*/
const inquirer = require('inquirer');
const fs = require('fs');
const makeLogo = require('./library/shapes')
const filePnN = `./examples/logo.svg`;
const questions = [
  {
    type: `input`,
    message: `Please choose no more than 3 characters to put in your logo.`,
    name: `text`
},
{
  type:`input`,
  message:`Please choose what color your text will be. Name of the color or hexadecimal numbers in the format of #{xxxxxx} are acceptable.`,
  name: `textColor`,
  default: `green`,
},
{
  type: `list`,
  message: `Please select a shape.`,
  choices: [`circle`, new inquirer.Separator(),
  `triangle`, new inquirer.Separator(),
  `square`, new inquirer.Separator(),
  ],
  name: `shape`,
  default: `circle`,
},
{
  type: `input`,
  message: `What color would you like your shape to be? Name of the color or hexadecimal numbers in the format of #{xxxxxx} are acceptable.`,
  name: `shapeColor`,
  default: `black`,
},
];

//create a function to write a logo.svg file
const createLogo = (response) => {
  const handleResponse = makeLogo(response);
  fs.writeFile(filePnN, handleResponse, () => {
    console.log(`logo.svg created! Check it out in the "examples" folder`)
  })
}
//create a function initialize the app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      createLogo(answers)
    })
    .catch(err => {
      throw new Error(err);
    })
}
init();