const Circle = require('../lib/circle.js');

describe('render', () => {
    test('must render the circle colors properly when user chooses to have gradient background', () => {
        const responses = {
            shapeColor1: 'blue',
            shapeColor2: 'cyan',
            gradientBG: true,
        }
        const expectedScript = `
    <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
            <stop offset="0%" style="stop-color:blue; stop-opacity:1" />
            <stop offset="100%" style="stop-color:cyan; stop-opacity:1" />
        </radialGradient>
    </defs>
    <circle cx="135" cy="115" r="80" fill="url(#grad)" />`
        const circle = new Circle(responses);
        expect(circle.render()).toEqual(expectedScript);
    })
    
    test('must render the circle color properly when user chooses to have solid color background', () => {
        const responses = {
            shapeColor1: 'green',
            gradientBG: false,
        }
        const expectedScript = `
    <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
            <stop offset="0%" style="stop-color:green; stop-opacity:1" />
            <stop offset="100%" style="stop-color:green; stop-opacity:1" />
        </radialGradient>
    </defs>
    <circle cx="135" cy="115" r="80" fill="url(#grad)" />`
        const circle = new Circle(responses);
        expect(circle.render()).toEqual(expectedScript);
    })
})