const myString=require('./MusoPlanCode')

test('match text values ', () => {
    expect(myString.displayName('neethu')).toMatch('neethu')
})




/*
beforeAll(() => {
    musarr = ["BOB","Bassist","2020",55,"I love my bass rhythm"];
    musName= "BOB"
    musType= "Bassist"
    yearsPlaying= "2020"
    hourlyRate = 55
    interestFact= "I love my bass rhythm"
  });

test('match input values ', () => {
    expect(myString.enterMus(musarr)).toBe(["BOB","Bassist","2020",55,"I love my bass rhythm"])
})
test('match input values ', () => {
    expect(myString.enterMus(musName)).toBe("BOB")
})
test('match input values ', () => {
    expect(myString.enterMus(musType)).toBe("Bassist")
})
test('match input values ', () => {
    expect(myString.enterMus(yearsPlaying)).toBe("2020")
})
test('match input values ', () => {
    expect(myString.enterMus(hourlyRate)).toBe(55)
})
test('match input values ', () => {
    expect(myString.enterMus(interestFact)).toBe("I love my bass rhythm")
})*/