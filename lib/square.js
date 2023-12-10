const Shapes = require('./shapes.js');

class Square extends Shapes {
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
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:${shapeColor1}; stop-opacity:1" />
            <stop offset="100%" style="stop-color:${shapeColor2}; stop-opacity:1" />
        </linearGradient>
    </defs>
    <rect x="60" y="45" width="150" height="150" rx="8" ry="8" fill="url(#grad)" />`
    }
}

module.exports = Square;