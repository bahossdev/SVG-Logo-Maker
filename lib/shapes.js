
class Shapes {
    // constructor (shape, shapeColor, text, textColor) {
    //     this.shape = shape;
    //     this.shapeColor = shapeColor;
    //     this.text = text;
    //     this.textColor = textColor;
    // }
    constructor(responses = []) {
        this.responses = responses;
    }
    render() {
        throw new Error('Child class must implement a render() method.');
    }
    renderLogo() {
        return this.responses
        .map(response => {
            return typeof response === 'string' 
            ? response
            : response.render();
        }).join('');
    }
}

module.exports = Shapes