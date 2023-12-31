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
const { makeLogo } = require('./library/shapes')
const filePnN = `./examples/logo.svg`;
const questions = [
  {
    type: `input`,
    message: `Please choose no more than 3 characters to put in your logo.`,
    name: `text`
},
{
  type:`input`,
  message:`Please choose what color your text will be. Name of the color or hexadecimal numbers in the format of #{xxxxxx} are acceptable. Include the '#' if using hexadecimal`,
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
  message: `What color would you like your shape to be? Name of the color or hexadecimal numbers in the format of #{xxxxxx} are acceptable. Include the '#' if using hexadecimal`,
  name: `shapeColor`,
  default: `black`,
},
];

//Write to file fxn checks. Won't allow a file to be written if object from makeLogo has props with undefined values.
const writeFileFxn = (handledR) => {
  const { text, textColor, shapeColor } = handledR;
  if(text === undefined) {
    console.log(`Please ensure that your text is less than or equal to 3 characters long and try again.`);
    return;
  } else if (textColor === undefined) {
    console.log(`Please check the text color you have chosen matches the W3Schools CSS colors page and try again.`);
    return;
  } else if (shapeColor === undefined) {
    console.log(`Please check the shape color you have chosen matches the W3Schools CSS colors page and try again.`);
    return;
  } else {
    const render = handledR.render();
    fs.writeFile(filePnN, render, () => {
      console.log(`Generated logo.svg! Check it out in the "examples" folder`)
    })
  }
}

//create a function to write a logo.svg file
const createLogo = (response) => {
  const handleResponse = makeLogo(response);
  writeFileFxn(handleResponse);
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


