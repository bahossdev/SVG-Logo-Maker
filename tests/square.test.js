const Square = require('../lib/square.js');

describe('render', () => {
    test('must render the square colors properly when user chooses to have gradient background', () => {
        const responses = {
            shapeColor1: 'yellow',
            shapeColor2: 'red',
            gradientBG: true,
        }
        const expectedScript = `
    <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:yellow; stop-opacity:1" />
            <stop offset="100%" style="stop-color:red; stop-opacity:1" />
        </linearGradient>
    </defs>
    <rect x="60" y="45" width="150" height="150" rx="8" ry="8" fill="url(#grad)" />`
        const square = new Square(responses);
        expect(square.render()).toEqual(expectedScript);
    })

    test('must render the square color properly when user chooses to have solid color background', () => {
        const responses = {
            shapeColor1: '#1B9280',
            gradientBG: false,
        }
        const expectedScript = `
    <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#1B9280; stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1B9280; stop-opacity:1" />
        </linearGradient>
    </defs>
    <rect x="60" y="45" width="150" height="150" rx="8" ry="8" fill="url(#grad)" />`
        const square = new Square(responses);
        expect(square.render()).toEqual(expectedScript);
    })
})