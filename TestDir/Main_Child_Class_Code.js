
//TESTING CODE FOR MAIN & CHILD CLASSES AS SEPARATE

class Musician
{
    constructor(musName1,musType1,yearsPlaying1,hourlyRate1,interestFact1)
    {
        this.musName= musName1
        this.musType=musType1
        this.yearsPlaying= yearsPlaying1
        this.hourlyRate= hourlyRate1
        this.interestFact=interestFact1
    } 
   displayDetails()
    {
        console.log("SHOWING MUSICIAN DETAILS AND THEIR INTERESTING FACT----> ")
        var dispData=" I AM "+this.musName+" I AM A "+ this.musType+" & "+" INTERESTING FACT ABOUT ME IS : "+ this.interestFact
        console.log(dispData)
        return dispData
    }
 
}
class Guitarist extends Musician{
    constructor()
    {   
        super()  
        this.myMusName=''
        this.myMusYear=''
        this.myMusRate=''
        this.myMusType=''
    }
    setMyMusName(musName)
    {
        if(musName.length<30 && musName.length>3)
        return this.myMusName=musName
        else
        return Error
    }
    setMyMusYear(year)
    { 
        if (year>1 || isNaN(year) || year>4)
        return this.myMusYear=year
        else
        return Error
    }
    setMyMusRate(rate)
    {
        if((rate>=50) || isNaN(rate))
        return this.myMusRate=rate 
        else
        return Error
    }
    setMyMusType(musType)
    {  
        var types= ['guitarist','bassist','percussionist','flautist']  
        if(musType== types[0]||musType== types[1]||musType== types[2]||musType== types[3]) 
        return this.myMusType=musType.toLowerCase()
        else
        return Error
    }
    displayDetails()
    {
        if(this.myMusType=='guitarist')
        {
            var musician= 'Musician Name: '+this.myMusName+'Year of Playing: '+this.myMusYear+'Hourly Rate: '+this.myMusRate
            console.log('\n'+"RECORDING GUITARIST DETAILS :----------> "+ musician)
        }
        return musician 
    }  
 }  

 class Bassist extends Musician{
    constructor()
    {   
        super()  
        this.myMusName=''
        this.myMusYear=''
        this.myMusRate=''
        this.myMusType=''
    }
    setMyMusName(musName)
    {
        if(musName.length<30 && musName.length>3)
        return this.myMusName=musName
        else
        return Error
    }
    setMyMusYear(year)
    { 
        if (year>1 || isNaN(year) || year>4)
        return this.myMusYear=year
        else
        return Error
    }
    setMyMusRate(rate)
    {
        if((rate>=50) || isNaN(rate))
        return this.myMusRate=rate 
        else
        return Error
    }
    setMyMusType(musType)
    {  
        var types= ['guitarist','bassist','percussionist','flautist']  
        if(musType== types[0]||musType== types[1]||musType== types[2]||musType== types[3]) 
        return this.myMusType=musType.toLowerCase()
        else
        return Error
    }
    displayDetails()
    {
        if(this.myMusType=='bassist')
        {
        var musician= 'Musician Name: '+this.myMusName+'Year of Playing: '+this.myMusYear+'Hourly Rate: '+this.myMusRate
        console.log('\n'+"RECORDING GUITARIST DETAILS :----------> "+ musician)
        }
        return musician  
    }
    
 }
 class Percussionist extends Musician{
    constructor()
    {   
        super()  
        this.myMusName=''
        this.myMusYear=''
        this.myMusRate=''
        this.myMusType=''
    }
    setMyMusName(musName)
    {
        if(musName.length<30 && musName.length>3)
        return this.myMusName=musName
        else
        return Error
    }
    setMyMusYear(year)
    { 
        if (year>1 || isNaN(year) || year>4)
        return this.myMusYear=year
        else
        return Error
    }
    setMyMusRate(rate)
    {
        if((rate>=50) || isNaN(rate))
        return this.myMusRate=rate 
        else
        return Error
    }
    setMyMusType(musType)
    {  
        var types= ['guitarist','bassist','percussionist','flautist']  
        if(musType== types[0]||musType== types[1]||musType== types[2]||musType== types[3]) 
        return this.myMusType=musType.toLowerCase()
        else
        return Error
    }
    displayDetails()
    {
        if(this.myMusType=='percussionist')
        {
            var musician= 'Musician Name: '+this.myMusName+'Year of Playing: '+this.myMusYear+'Hourly Rate: '+this.myMusRate
            console.log('\n'+"RECORDING GUITARIST DETAILS :----------> "+ musician)
        }
        return musician 
    }

}
    class Flautist extends Musician{
        constructor()
        {   
            super()  
            this.myMusName=''
            this.myMusYear=''
            this.myMusRate=''
            this.myMusType=''
        }
        setMyMusName(musName)
        {
            if(musName.length<30 && musName.length>3)
            return this.myMusName=musName
            else
            return Error
        }
        setMyMusYear(year)
        { 
            if (year>1 || isNaN(year) || year>4)
            return this.myMusYear=year
            else
            return Error
        }
        setMyMusRate(rate)
        {
            if((rate>=50) || isNaN(rate))
            return this.myMusRate=rate 
            else
            return Error
        }
        setMyMusType(musType)
        {  
            var types= ['guitarist','bassist','percussionist','flautist']  
            if(musType== types[0]||musType== types[1]||musType== types[2]||musType== types[3]) 
            return this.myMusType=musType.toLowerCase()
            else
            return Error
        }
        displayDetails()
        {
            if(this.myMusType=='flautist')
            {
                var musician= 'Musician Name: '+this.myMusName+'Year of Playing: '+this.myMusYear+'Hourly Rate: '+this.myMusRate
                console.log('\n'+"RECORDING GUITARIST DETAILS :----------> "+ musician)
            }
            return musician 
        }
    }
    module.exports = {
        Bassist:Bassist,
        Guitarist:Guitarist,
        Musician:Musician,
        Percussionist:Percussionist,
        Flautist:Flautist
    }