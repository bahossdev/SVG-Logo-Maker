const Shapes = require('./shapes.js');

class Circle extends Shapes {
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
        <radialGradient id="grad" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
            <stop offset="0%" style="stop-color:${shapeColor1}; stop-opacity:1" />
            <stop offset="100%" style="stop-color:${shapeColor2}; stop-opacity:1" />
        </radialGradient>
    </defs>
    <circle cx="135" cy="115" r="80" fill="url(#grad)" />`
    }
}

module.exports = Circle;