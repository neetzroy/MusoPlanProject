
//TESTING CODE FOR USER INPUT PROMPT VALUE FUNCTION AS SEPARATE

function enterMus(musName)
{       
      if(musName.length<30 && musName.length>3)
       return musName  
       else
       return Error
}
function enteryearPlaying(yearsPlaying)
{  
    if (yearsPlaying>1 || isNaN(yearsPlaying) || yearsPlaying.length>4)
    return yearsPlaying
    else 
    return Error
}
function enterHourRate(hourlyRate)
{
    if((hourlyRate>=50) || isNaN(hourlyRate))
    return hourlyRate
    else
    return Error
}
function entermusTypes(musType)
{
        var types= ['guitarist','bassist','percussionist','flautist']
        
          if(musType== types[0]||musType== types[1]||musType== types[2]||musType== types[3])         
          return musType
          else 
          return Error
}  
function intFact(interestFact)
{
    return interestFact
}
module.exports = {enterMus,enteryearPlaying,enterHourRate,intFact,entermusTypes}