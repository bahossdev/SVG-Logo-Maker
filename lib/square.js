const Shapes = require('./shapes.js');

class Square extends Shapes {
    constructor(responses) {
        super(responses);
    }
    render() {
        const shapeColor = responses.shapeColor;
        return `<rect x="40" y="40" width="220" height="120" fill="${shapeColor}" />`
    }
}

module.exports = Square;