const Square = require('./square.js');
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Shapes = require('./shapes.js');



function createLogo(responses) {
  const logoText = new Shapes(responses).renderLogoText();
  let shape;

  switch (responses.shape) {
    case 'square':
      shape = new Square(responses).render();
      break;
    case 'circle':
      shape = new Circle(responses).render();
      break;
    case 'triangle':
      shape = new Triangle(responses).render();
      break;
    default:
      throw new Error('Invalid shape choice! 😵‍💫');
  }

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${shape}
  ${logoText}

</svg>`
}

module.exports = { createLogo };