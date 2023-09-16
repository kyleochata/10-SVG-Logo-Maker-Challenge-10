/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
*/
const {Shape} = require('./shapes')
const {Circle} = require('./shapes');
const {Triangle} = require('./shapes');
const {Square} = require('./shapes');
describe(`Shape`, () => {
  it (`Should take in user inputs and build a shape object`, () => {
    const textI = "HHH";
    const textColor = "green" ;
    const shape = "circle";
    const shapeColor = "black";
    const newShape = new Shape(textI, textColor, shape, shapeColor);
    const outcome = {
      text: "HHH",
      textColor: "green",
      shape: "circle",
      shapeColor: "black",
      svgOpenTag: `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`,
      elementTextTag: `<text x="150" y="125" font-size="60" text-anchor="middle" fill="green">HHH</text>`,
      svgCloseTag: `</svg>`,
    };
    expect(newShape).toMatchObject(outcome);
  });
});

describe(`Circle`, () => {
  describe(`render`, () =>{
    it (`Render function should take in parameters for building a Circle constructed object and return code to write to a file.`, () => {
      const newCircle = new Circle('TTT', 'blue', 'circle', 'white');
      const outcome = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="110" r="80" fill="white" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">TTT</text>

    </svg>`;
      expect(newCircle.render()).toEqual(outcome);
    });
  });
});

describe(`Triangle`, () => {
  describe(`render`, () => {
    it (`Render function should take in parameters for building a Circle constructed object and return code to write to a file.`, () => {
      const newTriangle = new Triangle('UCI', 'gold', 'triangle', 'blue');
      const outcome = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 15 300, 175 15, 175"  fill="blue" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="gold">UCI</text>

    </svg>`;

      expect(newTriangle.render()).toEqual(outcome);
    });
  });
});

describe(`Square`, () => {
  describe(`render`, () => {
    it (`Render function should take in parameters for building a Circle constructed object and return code to write to a file.`, () => {
      const newSquare = new Square("REE", "#1E90FF", "square", "#E0FFFF");
      const outcome = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="45" width="200" height="200" fill="#E0FFFF" />

    <text x="150" y="115" font-size="60" text-anchor="middle" fill="#1E90FF">REE</text>

    </svg>`;
      expect(newSquare.render()).toEqual(outcome);
    });
  });
});

