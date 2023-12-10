const Shapes = require('./shapes.js');

class Square extends Shapes {
    constructor(responses) {
        super(responses);
    }
    render() {
        const shapeColor = this.responses.shapeColor;
        return `<rect x="60" y="40" width="150" height="150" fill="${shapeColor}" />`
    }
}

module.exports = Square;