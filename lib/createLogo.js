const Shapes = require('./shapes.js');
// const Circle = require('./circle.js');
// const circle = new Circle()
const shape = new Shapes(data.shape).render();
const shapeColor = new Shapes().shapeColor;
const text = new Shapes().text;
const textColor = new Shapes().textColor;

function createLogo () {
return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`
}

module.exports = { createLogo };