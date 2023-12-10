const Shapes = require('./shapes.js');

class Circle extends Shapes {
    constructor(responses) {
        super(responses);
    }
    render() {
        const shapeColor = this.responses.shapeColor;
        return `<circle cx="150" cy="115" r="80" fill="${shapeColor}" />`
    }
}

module.exports = Circle;