const { test, expect } = require('@jest/globals')
const musPage = require('./EnterMusFunc');

//TEST CASES FOR USER PROMPT INPUT FUNCTION

test('match text values ', () => {
    expect(musPage.enterMus('neethu')).toMatch('neethu')
})
test('match text values ', () => {
    expect(musPage.enterMus('ne')).toBe(Error)
})
test('match text values ', () => {
expect(musPage.enteryearPlaying(2020)).toBe(2020)
})
test('match text values ', () => {
    expect(musPage.enteryearPlaying(-2020)).toBe(Error)
})
test('match text values ', () => {
    expect(musPage.enterHourRate(55)).toBe(55)
})
test('match text values ', () => {
    expect(musPage.enterHourRate(44)).toBe(Error)
})
test('match text values ', () => {
    expect(musPage.entermusTypes('bassist')).toMatch('bassist')
})
test('match text values ', () => {
    expect(musPage.entermusTypes('bassi')).toBe(Error)
})
test('match text values ', () => {
    expect(musPage.intFact('i love my troupe')).toMatch('i love my troupe')
})
