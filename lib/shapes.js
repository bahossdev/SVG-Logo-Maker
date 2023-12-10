
class Shapes {

    constructor(responses = []) {
        this.responses = responses;
    }
    render() {
        throw new Error('The type of the input must be string.');
    }
    checkString() {
        return this.responses
            .filter(response => (response !== this.responses.shape))
            .map(response => {
                return typeof response === 'string'
                    ? response
                    : response.render();
            }).join('');
    }
    renderLogo(){
        const text = this.responses.text;
        const textColor = this.responses.textColor;
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
}

module.exports = Shapes