/*
in this logo fxn.js:

will need to have all the functions needed to generate a svg logo
*/
const colorArr = require('./color-key'); // make another color.js with just an arr that has every color keyword
const hexArr = requires('./hex-key');
//create class Shape
class Shape {
  constructor (text, textColor, shape, shapeColor) {

    if(text.length <= 3){
      this.text = text;
    } else {
      throw new Error(`You may only input 3 characters or less for your logo. Please try again.`);
    };
  let tColor = textColor.toLowerCase().trim();
    if (tColor === '') {
      throw new Error(`You must enter a valid color. Please try again.`)
    } else {
      if(tColor[0] === `#` && tColor.length === 7) {
        if (tColor.includes(hexArr)) {
          this.textColor = tColor;
        } else {
          throw new Error(`Please visit W3Schools CSS Color page and pick from one of the colors available.`);
        }
      }
      if (tColor.includes(colorArr)) {
        this.textColor = tColor;
      } else {
        throw new Error(`Please visit W3Schools CSS Color page and pick from one of the colors available.`);
      }
    };

    this.shape = shape;

  let sColor = shapeColor.toLowerCase().trim();
    if (sColor === '') {
      throw new Error(`You must enter a valid color. Please try again.`);
    } else if (sColor[0] !== '#' || sColor.length !== 7 || sColor.length !== 4) {
      throw new Error(`Please check your hexadecimal color and try again. Acceptable criteria are: #{xxx} or #{xxxxxx}. 3 or 6 variables after the #.`);
    } else {
      this.shapeColor = sColor;
    };

    this.svgOpenTag = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">`;
    this.elementTextTag = `<text x='150' y='125' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>`;
    this.svgCloseTag = `</svg>`;
};
}
//create class Circle that will inherit shape
class Circle extends Shape {
  constructor(text, textColor, circle, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = circle;
  }
}
//create class triangle that will inherit shape
class Triangle extends Shape {
  constructor(text, textColor, triangle, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = triangle;
  }
}
//create class square that will inherit shape
class Square extends Shape {
  constructor(text, textColor, square, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = square;
  }
}

//function that will take inquirer data and return a <svg> with user input variables from inquirer to then be sent into a writeFile function on the index
const test = new Shape ('SVG', 'green', 'circle', 'black');
console.log(test);