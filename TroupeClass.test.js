
//TEST CASES FOR TROUPE CLASS AS SEPARATE

const { test, expect } = require('@jest/globals')
const Troupe = require('./TroupeClass');

test('match text values of Musician ', () => {
    myClassobj= new Troupe()

    myClassobj.setMyMusName('John')
    expect(myClassobj.setMyMusName('Be')).toBe(Error)

    myClassobj.setMyMusYear(2020)
    expect(myClassobj.setMyMusType(-2020)).toBe(Error)

    myClassobj.setMyMusRate(55)
    expect(myClassobj.setMyMusRate(10)).toBe(Error)

    const output="MusicianName: John MusicianPlayingYear: 2020 HourlyRate: 55"
    expect(myClassobj.addMusician()).toEqual(output)
})
test('match text values of Musician ', () => {
    myClassobj= new Troupe()

    myClassobj.setMyMusName('John')
    expect(myClassobj.setMyMusName('Be')).toBe(Error)

    myClassobj.setMyMusType('bassist')
    expect(myClassobj.setMyMusType('othertype')).toBe(Error)

    myClassobj.setIntFact('I love my music band')

    const output = " I AM John I AM A bassist INTERESTING FACT ABOUT ME IS : I love my music band"
    expect(myClassobj.showMusicianSummary()).toEqual(output)
})
test('Calculate Cost of Troupe ', () => {
    myTroupeObj= new Troupe()
    myTroupeObj.setHourlyVal(100)
    myTroupeObj.setDuration(3)
    const output = 300
    expect(myTroupeObj.costOfTroupe()).toBe(output)
 })
 test('check if duration is greater than 0.5hrs and less than 3hrs', () => {
    myTroupeObj= new Troupe()
    myTroupeObj.setDuration(2)
    const output = 2
    expect(myTroupeObj.checkDurationHours()).toBe(output)
 })
 test('check if duration is greater than 0.5hrs and less than 3hrs', () => {
    myTroupeObj= new Troupe()
    myTroupeObj.setDuration(-2)
    const output = Error
    expect(myTroupeObj.checkDurationHours()).toBe(output)
 })
 test('check if correct genre selected from list', () => {
    myTroupeObj= new Troupe()
    myTroupeObj.setGenre('pop')
    const output = 'pop'
    expect(myTroupeObj.checkGenre()).toBe(output)
 })
 test('check if correct genre selected from list', () => {
    myTroupeObj= new Troupe()
    myTroupeObj.setGenre('bazz')
    const output = Error
    expect(myTroupeObj.checkGenre()).toBe(output)
 })
 test('match text values of Troupe ', () => {
     myTroupeObjs= new Troupe('BestTroupe',10,'Rock',2,100)
     const output = "Troupe Name is:BestTroupeNo of instruments included: 10Genre Playing: RockDuration of Play :2Hourly rate of troupe: 100"
    expect(myTroupeObjs.showtroupeSummary()).toEqual(output)
 })
 test('read file for success', () => {
    myTroupeObj= new Troupe()
    expect(myTroupeObj.readMusListFile()).toBe(true)
 })
 test('read file for success', () => {
    myTroupeObj= new Troupe()
    expect(myTroupeObj.writeMusListFile()).toBe(true)
 })
