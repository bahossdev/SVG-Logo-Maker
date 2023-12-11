class Shapes {

    // Constructor initializing the responses object with default value of an empty array
    constructor(responses = []) {
        this.responses = responses;
    }

    // Abstract method that should be implemented by child classes
    render() {
        throw new Error('Child class must implement a render() method.');
    }

    // Function to validate the length of the input text, throwing an error if more than 3 characters
    validateText() {
        if (this.responses.text.length > 3) {
            throw new Error('No more than 3 characters please!');
        } else {
            return this.responses.text;
        }
    }

    // Renders the logo text with validated input and specified text color
    renderLogoText() {
        const text = this.validateText(this.responses.text);
        const textColor = this.responses.textColor;
        
        // Generates SVG text element with specified attributes and styles
        return `<text x="135" y="135" font-size="60" text-anchor="middle" style="font-weight: bold; font-family: Arial, Sans;" fill="${textColor}">${text}</text>`;
    }
}

module.exports = Shapes