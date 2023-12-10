const Shapes = require('./shapes.js');

class Triangle extends Shapes {
    constructor(responses) {
        super(responses);
    }
    render() {
        const shapeColor = responses.shapeColor;
        return `<polygon points="150,18 244,182 56,182" fill="${shapeColor}" />`
    }
}

module.exports = Triangle;