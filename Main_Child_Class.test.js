
//TEST CASES FOR TESTING MAIN & CHILD CLASSES SEPARATE


const { test, expect } = require('@jest/globals')

const bunch = require('./Main_Child_Class_Code')
const Musician = bunch.Musician
const Guitarist = bunch.Guitarist
const Bassist = bunch.Bassist
const Percussionist = bunch.Percussionist
const Flautist = bunch.Flautist


test('match text values of Musician ', () => {
    myClassobj= new Musician('John','bassist',2020,55,"l love my bass rhythm")

        const output = " I AM John I AM A bassist &  INTERESTING FACT ABOUT ME IS : l love my bass rhythm"
        expect(myClassobj.displayDetails()).toEqual(output)

})
test('match text values of guitarist ', () => {
    myClassobj= new Guitarist('Bennny','Guitarist',2020,55,"l love my guitar strings")

    expect(myClassobj.setMyMusName('Benny')).toBe('Benny')
    expect(myClassobj.setMyMusName('Be')).toBe(Error)

    expect(myClassobj.setMyMusType('guitarist')).toBe('guitarist')
    expect(myClassobj.setMyMusType('othertype')).toBe(Error)

    expect(myClassobj.setMyMusYear(2020)).toBe(2020)
    expect(myClassobj.setMyMusType(-2020)).toBe(Error)

    expect(myClassobj.setMyMusRate(55)).toBe(55)
    expect(myClassobj.setMyMusRate(10)).toBe(Error)

        const output = "Musician Name: BennyYear of Playing: 2020Hourly Rate: 55"   
        expect(myClassobj.displayDetails()).toEqual(output)

})
test('match text values of bassist ', () => {
    myClassobj= new Bassist('John','bassist',2020,55,"l love my bass rhythm")

    expect(myClassobj.setMyMusName('John')).toBe('John')
    expect(myClassobj.setMyMusName('Jo')).toBe(Error)

    expect(myClassobj.setMyMusType('bassist')).toBe('bassist')
    expect(myClassobj.setMyMusType('othertype')).toBe(Error)

    expect(myClassobj.setMyMusYear(2020)).toBe(2020)
    expect(myClassobj.setMyMusType(-2020)).toBe(Error)

    expect(myClassobj.setMyMusRate(55)).toBe(55)
    expect(myClassobj.setMyMusRate(10)).toBe(Error)

        const output = "Musician Name: JohnYear of Playing: 2020Hourly Rate: 55"
        expect(myClassobj.displayDetails()).toEqual(output)

})
test('match text values of flautist ', () => {
    myClassobj= new Flautist('Fabiola','flautist',2020,55,"l love my flute tunes")

    expect(myClassobj.setMyMusName('Fabiola')).toBe('Fabiola')
    expect(myClassobj.setMyMusName('Fa')).toBe(Error)


    expect(myClassobj.setMyMusType('flautist')).toBe('flautist')
    expect(myClassobj.setMyMusType('othertype')).toBe(Error)

    expect(myClassobj.setMyMusYear(2020)).toBe(2020)
    expect(myClassobj.setMyMusType(-2020)).toBe(Error)

    expect(myClassobj.setMyMusRate(55)).toBe(55)
    expect(myClassobj.setMyMusRate(10)).toBe(Error)

        const output = "Musician Name: FabiolaYear of Playing: 2020Hourly Rate: 55"
        expect(myClassobj.displayDetails()).toEqual(output)

})
test('match text values of percussionist ', () => {
    myClassobj= new Percussionist('Paul','percussionist',2020,55,"l love my percussion rhythm")

    expect(myClassobj.setMyMusName('Paul')).toBe('Paul')
    expect(myClassobj.setMyMusName('Pa')).toBe(Error)

    expect(myClassobj.setMyMusType('percussionist')).toBe('percussionist')
    expect(myClassobj.setMyMusType('othertype')).toBe(Error)

    expect(myClassobj.setMyMusYear(2020)).toBe(2020)
    expect(myClassobj.setMyMusType(-2020)).toBe(Error)

    expect(myClassobj.setMyMusRate(55)).toBe(55)
    expect(myClassobj.setMyMusRate(10)).toBe(Error)

        const output = "Musician Name: PaulYear of Playing: 2020Hourly Rate: 55"
        expect(myClassobj.displayDetails()).toEqual(output)

})

