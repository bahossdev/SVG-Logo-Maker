// Importing shape classes and the Shapes class
const Square = require('./square.js');
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Shapes = require('./shapes.js');

// Function to create a logo based on user responses
function createLogo(responses) {

  // Create logo text using the Shapes class
  const logoText = new Shapes(responses).renderLogoText();
  let logoShape;

  // Determine the shape chosen by the user and create the corresponding shape
  switch (responses.shape) {
    case 'square':
      logoShape = new Square(responses).render();
      break;
    case 'circle':
      logoShape = new Circle(responses).render();
      break;
    case 'triangle':
      logoShape = new Triangle(responses).render();
      break;
    default:
      // Throw an error for an invalid shape choice
      throw new Error('Invalid shape choice! 😵‍💫');
  }

  // Return the SVG markup for the complete logo
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${logoShape}
  ${logoText}

</svg>`
}

// Export the createLogo function
module.exports = { createLogo };