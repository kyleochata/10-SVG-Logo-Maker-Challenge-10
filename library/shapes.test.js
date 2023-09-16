//import class constructors
const { Shape } = require('./shapes')
const { Circle } = require('./shapes');
const { Triangle } = require('./shapes');
const { Square } = require('./shapes');

//test shape constructor 
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

//test circle class is inheriting from Shape and having it's own render fxn
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

//test Triangle and ensure it inherits Shape with it's own render fxn
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

//test Square and ensure it inherits Shape with it's own render fxn
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

