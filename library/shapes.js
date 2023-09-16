/*
in this logo fxn.js:

will need to have all the functions needed to generate a svg logo
*/
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
      throw new Error(`You must enter a valid color. Please try again.`);
    } else if (tColor[0] !== '#' || tColor.length !== 7 || tColor.length !== 4) {
      throw new Error(`Please check your hexadecimal color and try again. Acceptable criteria are: #{xxx} or #{xxxxxx}. 3 or 6 variables after the #.`);
    } else {
      this.textColor = tColor;
    }

    this.shape = shape;

    if (shapeColor === '') {
      throw new Error(`You must enter a valid color. Please try again.`);
    } else if (shapeColor[0] !== '#' || shapeColor.length !== 7 || shapeColor.length !== 4) {
      throw new Error(`Please check your hexadecimal color and try again. Acceptable criteria are: #{xxx} or #{xxxxxx}. 3 or 6 variables after the #.`);
    } else {
      this.shapeColor = shapeColor;
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
    this.shape = triangle
  }
}
//create class square that will inherit shape
class Square extends Shape {
  constructor(text, textColor, square, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = square
  }
}

//function that will take inquirer data and return a <svg> with user input variables from inquirer to then be sent into a writeFile function on the index
const test = new Shape ('SVG', 'green', 'circle', 'black');
console.log(test);