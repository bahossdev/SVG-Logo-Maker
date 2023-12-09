const Shapes = require('./shapes.js');

class Circle extends Shapes {
    constructor (shape, shapeColor, text, textColor) {
        super(shape, shapeColor, text, textColor);
        shape = 'circle';
    }
}

module.exports = Circle;