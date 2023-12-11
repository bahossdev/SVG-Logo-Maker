// Importing the Shapes class (parent)
const Shapes = require('./shapes.js');

class Square extends Shapes {

    // Constructor receives responses from user input and passes them to the parent class constructor
    constructor(responses) {
        super(responses);
    }

    // Render method generates SVG code for a square with optional gradient background
    render() {

        // Extracting shape colors from user responses
        const shapeColor1 = this.responses.shapeColor1;
        let shapeColor2;

        // Check if gradient background is enabled
        if (!this.responses.gradientBG) {
            shapeColor2 = this.responses.shapeColor1; // If not, use the same color for both stops
        } else {
            shapeColor2 = this.responses.shapeColor2; // If yes, use the specified second color
        }
        // SVG code for a square with a solid or linear gradient background
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