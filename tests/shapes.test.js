
const Shapes = require('../lib/shapes.js')

describe('Shapes', () => {
    describe('render', () => {
        test('must throw error if render function is called', () => {
            const shape = new Shapes();
            const expextedError = 'Child class must implement a render() method.';
            expect(shape.render).toThrow(expextedError);
        })
    })

    describe('validateText', () => {
        test('must thorw an error if logo text is more than 3 characters', () => {
            const responses = { text: 'text' }
            const expectedError = 'No more than 3 characters please!';
            const shape = new Shapes(responses);
            expect(() => shape.validateText()).toThrow(expectedError);
        })
    })

    describe('renderLogoText', () => {
        test('must render the logo text properly', () => {
            const responses = { text: 'OOP', textColor: 'blue' };
            const shapes = new Shapes(responses);
            const expectedScript = '<text x="135" y="135" font-size="60" text-anchor="middle" style="font-weight: bold; font-family: Arial, Sans;" fill="blue">OOP</text>';
            expect(shapes.renderLogoText()).toEqual(expectedScript)
        })
    })
})