const Shapes = require('./shapes.js');

class Triangle extends Shapes {
    constructor(responses) {
        super(responses);
    }
    render() {
        const shapeColor1 = this.responses.shapeColor1;
        let shapeColor2;

        if (!this.responses.gradientBG) {
            shapeColor2 = this.responses.shapeColor1;
        } else {
            shapeColor2 = this.responses.shapeColor2;
        }
        return `
    <defs>
        <linearGradient id="grad" x1="0%" y1="40%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:${shapeColor1}; stop-opacity:1" />
            <stop offset="100%" style="stop-color:${shapeColor2}; stop-opacity:1" />
        </linearGradient>
    </defs>
    <polygon points="135,18 229,182 41,182" fill="url(#grad)" />`
    }
}

module.exports = Triangle;