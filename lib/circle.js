// Importing the Shapes class (parent)
const Shapes = require('./shapes.js');

class Circle extends Shapes {
    constructor(responses) {

                // Constructor receives responses from user input and passes them to the parent class constructor
                super(responses);
            }
        
            // Render method generates SVG code for a circle with optional gradient background
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
        
                // SVG code for a circle with solid or linear gradient background
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