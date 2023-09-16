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
    if(text.length <= 3){
      this.text = text;
    } else {
      console.log(`You may only input 3 characters or less for your logo. Please try again.`);
    };

    //handle and set textColor
  let tColor = textColor.toLowerCase().trim();
    if (tColor === '') {
      console.log(`You must enter a valid color. Please try again.`)
    } else {
      if(tColor[0] === `#` && tColor.length === 7) {
        if (hexArr.includes(tColor)) {
          this.textColor = tColor;
        } else {
          console.log(`Please visit W3Schools CSS Color page and pick from one of the colors available.`);
        }
      }
      if (colorArr.includes(tColor)) {
        this.textColor = tColor;
      } else {
        console.log(`Please visit W3Schools CSS Color page and pick from one of the colors available.`);
      }
    };
    //set shape property
    this.shape = shape;

//handle and set shapeColor based on user input
  let sColor = shapeColor.toLowerCase().trim();
  if (sColor === '') {
    console.log(`You must enter a valid color. Please try again.`)
  } else {
    if(sColor[0] === `#` && sColor.length === 7) {
      if (hexArr.includes(sColor)) {
        this.shapeColor = sColor;
      } else {
        console.log(`Please visit W3Schools CSS Color page and pick from one of the colors available.`);
      }
    }
    if (colorArr.includes(sColor)) {
      this.shapeColor = sColor;
    } else {
      console.log(`Please visit W3Schools CSS Color page and pick from one of the colors available.`);
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

    <${this.shape} cs="150" cy="100" r="80" fill="${this.shapeColor}" />

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
    return `
    ${this.svgOpenTag}

    <polygon points="100, 15 200, 200 0, 200"  fill="${this.shapeColor}" />

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

    <rect  width="200" height="200" fill="${this.shapeColor}" />
  
    ${this.elementTextTag}

    ${this.svgCloseTag}`
  }
}

//function that will take inquirer data and return a <svg> with user input variables from inquirer to then be sent into a writeFile function on the index
const makeLogo = (response) => {
  const { text, textColor, shape, shapeColor  } = response;

  if (shape === `circle`) {
    const newCircle = new Circle(text, textColor, shape, shapeColor );
    return newCircle.render();
  }
  if (shape === `triangle`) {
    const newTriangle = new Triangle(text, textColor, shape, shapeColor);
    return newTriangle.render();
  }
  if (shape === `square`) {
    const newSquare = new Square(text, textColor, shape, shapeColor);
    return newSquare.render();
  }
}


module.exports = makeLogo;