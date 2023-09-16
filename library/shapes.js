/*
in this logo fxn.js:

will need to have all the functions needed to generate a svg logo
*/
const colorArr = require('./color-key'); // make another color.js with just an arr that has every color keyword
const hexArr = require('./hex-key');
//create class Shape
class Shape {
  constructor (text, textColor, shape, shapeColor) {

    //set text if text input is less than 3 char
    if(text.length <= 3 && text !== ''){
      this.text = text;
    } else {
      this.text = undefined;
    };

    //handle and set textColor
  let tKeyColor = textColor.toLowerCase().trim();
  let tHexColor = textColor.toUpperCase().trim();
    if (textColor === '') {
      console.log(`You must enter a valid color. Please try again.`);
    } else {
      if(tHexColor[0] === `#` && tHexColor.length === 7) {
        if (hexArr.includes(tHexColor)) {
          this.textColor = tHexColor;
        } else {
          this.textColor = undefined;
        }
      }
      else if (colorArr.includes(tKeyColor)) {
        this.textColor = tKeyColor;
      } else {
        this.textColor = undefined;
      }
    };
    //set shape property
    this.shape = shape;

//handle and set shapeColor based on user input
  let sHexColor = shapeColor.toUpperCase().trim();
  let sKeyColor = shapeColor.toLowerCase().trim();
  if (shapeColor === '') {
    console.log(`You must enter a valid color. Please try again.`)
  } else {
    //checks to see if user
    if(sHexColor[0] === `#` && sHexColor.length === 7) {
      if (hexArr.includes(sHexColor)) {
        this.shapeColor = sHexColor;
      } else {
        this.shapeColor = undefined;
      }
    }
    else if (colorArr.includes(sKeyColor)) {
      this.shapeColor = sKeyColor;
    } else {
      this.shapeColor = undefined;
    }
  };
//create props with constant values needed for all shapes in rendering the svg file
    this.svgOpenTag = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    this.elementTextTag = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    this.svgCloseTag = `</svg>`;
};
}
//create class Circle that will inherit shape
class Circle extends Shape {
  constructor(text, textColor, circle, shapeColor) {
    super(text, textColor, circle, shapeColor);
  }
  render() {
    return `
    ${this.svgOpenTag}

    <${this.shape} cx="150" cy="110" r="80" fill="${this.shapeColor}" />

    ${this.elementTextTag}

    ${this.svgCloseTag}`
  }
}

//create class triangle that will inherit shape
class Triangle extends Shape {
  constructor(text, textColor, triangle, shapeColor) {
    super(text, textColor, triangle, shapeColor);
  }
  render() {
    return `${this.svgOpenTag}

    <polygon points="150, 15 300, 175 15, 175"  fill="${this.shapeColor}" />

    ${this.elementTextTag}

    ${this.svgCloseTag}`
  }
}
//create class square that will inherit shape
class Square extends Shape {
  constructor(text, textColor, square, shapeColor) {
    super(text, textColor, square, shapeColor);
  }
  render() {
    return `
    ${this.svgOpenTag}

    <rect x="45" width="200" height="200" fill="${this.shapeColor}" />
  
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

    ${this.svgCloseTag}`
  }
}

//function that will take inquirer data and return a <svg> with user input variables from inquirer to then be sent into a writeFile function on the index
const makeLogo = (response) => {
  const { text, textColor, shape, shapeColor  } = response;

  if (shape === `circle`) {
    const newCircle = new Circle(text, textColor, shape, shapeColor );
    return newCircle;
  }
  if (shape === `triangle`) {
    const newTriangle = new Triangle(text, textColor, shape, shapeColor);
    return newTriangle;
  }
  if (shape === `square`) {
    const newSquare = new Square(text, textColor, shape, shapeColor);
    return newSquare;
  }
}

module.exports = { makeLogo, Shape, Circle, Triangle, Square };


