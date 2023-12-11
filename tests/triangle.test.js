const Triangle = require('../lib/triangle.js');

describe('render', () => {
    test('must render the triangle colors properly when user chooses to have gradient background', () => {
        const responses = {
            shapeColor1: '#ACFF33',
            shapeColor2: '#1B9280',
            gradientBG: true,
        }
        const expectedScript = `
    <defs>
        <linearGradient id="grad" x1="0%" y1="40%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#ACFF33; stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1B9280; stop-opacity:1" />
        </linearGradient>
    </defs>
    <polygon points="135,18 229,182 41,182" fill="url(#grad)" />`
        const triangle = new Triangle(responses);
        expect(triangle.render()).toEqual(expectedScript);
    })

    test('must render the triangle color properly when user chooses to have solid color background', () => {
        const responses = {
            shapeColor1: 'violet',
            gradientBG: false,
        }
        const expectedScript = `
    <defs>
        <linearGradient id="grad" x1="0%" y1="40%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:violet; stop-opacity:1" />
            <stop offset="100%" style="stop-color:violet; stop-opacity:1" />
        </linearGradient>
    </defs>
    <polygon points="135,18 229,182 41,182" fill="url(#grad)" />`
        const triangle = new Triangle(responses);
        expect(triangle.render()).toEqual(expectedScript);
    })
})