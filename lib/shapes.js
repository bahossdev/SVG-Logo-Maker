
class Shapes {

    constructor(responses = []) {
        this.responses = responses;
    }
    render() {
        throw new Error('Child class must implement a render() method.');
    }

    validateText() {
        if (this.responses.text.length > 3) {
            throw new Error('No more than 3 characters please!');
        } else {
            return this.responses.text;
        }
    }

    renderLogoText() {
        const text = this.validateText(this.responses.text);
        const textColor = this.responses.textColor;
        return `<text x="135" y="135" font-size="60" text-anchor="middle" style="font-weight: bold; font-family: Arial, Sans;" fill="${textColor}">${text}</text>`;
    }
}

module.exports = Shapes