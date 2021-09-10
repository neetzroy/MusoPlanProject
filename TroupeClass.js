const { error } = require('console')

//TESTING TROUPE CLASS SEPARATE
class Troupe{
    
    constructor(troupeName,noOfInstrument,genreTroupe,durationTroupe,hourlyRateTroupe)
    {
        this.hourlyValue=''
        this.myMusName=''
        this.myMusYear=''
        this.myMusRate=''
        this.myMusType=''
        this.intFact=''
        this.troupeName= troupeName
        this.noOfInstrument=noOfInstrument
        this.genreTroupe=genreTroupe
        this.durationTroupe=durationTroupe
        this.hourlyRateTroupe=hourlyRateTroupe
    }
    setMyMusName(musName)
    {
        if(musName.length<30 && musName.length>3)
        this.myMusName=musName
        else
        return Error
    }
    setMyMusYear(year)
    { 
        if (year>1 || isNaN(year) || year>4)
        this.myMusYear=year
        else
        return Error
    }
    setMyMusRate(rate)
    {
        if((rate>=50) || isNaN(rate))
        this.myMusRate=rate 
        else
        return Error
    }
    setMyMusType(musType)
    {  
        var types= ['guitarist','bassist','percussionist','flautist']  
        if(musType== types[0]||musType== types[1]||musType== types[2]||musType== types[3]) 
        this.myMusType=musType.toLowerCase()
        else
        return Error
    }
    setIntFact(fact)
    { this.intFact=fact }

    addMusician()
    {         
            var musDetails= "MusicianName: "+ this.myMusName+" MusicianPlayingYear: "+this.myMusYear+" HourlyRate: "+this.myMusRate

            console.log('\n'+'ADDED MUSICIAN DETAILS:---------->'+'\n'+ musDetails)
            return musDetails
          
    }
    
    showMusicianSummary()
    {

         console.log('\n'+"SHOWING MUSICIAN DETAILS AND THEIR INTERESTING FACT----------> " )
         var musFacts=" I AM "+this.myMusName+" I AM A "+ this.myMusType+" INTERESTING FACT ABOUT ME IS : "+this.intFact
         console.log(musFacts)
         return musFacts
        }

    setGenre(Genre)
    {this.genreTroupe=Genre.toLowerCase()}
    checkGenre()
    {
        var genre = ['jass','rock','pop']
        if(this.genreTroupe== genre[0]||this.genreTroupe== genre[1]||this.genreTroupe== genre[2])         
          return this.genreTroupe
          else 
          return Error
    }

    setHourlyVal(Val)
    { this.hourlyValue=Val }

    setDuration(Durations)
    {this.durationTroupe=Durations}
    checkDurationHours()
    {
    if((this.durationTroupe<3) && (this.durationTroupe>0.5))
    return this.durationTroupe
    else
    return Error
    }

    showtroupeSummary()
    {  
var troupeSummary= "Troupe Name is:"+this.troupeName+"No of instruments included: "+this.noOfInstrument+"Genre Playing: "+this.genreTroupe+"Duration of Play :"+this.durationTroupe+"Hourly rate of troupe: "+this.hourlyRateTroupe
    
                console.log('\n'+"TROUPE DETAILS:----------> "+'\n'+troupeSummary)
                return troupeSummary
    }  
    costOfTroupe()
    {
        let cost= parseFloat(this.hourlyValue*this.durationTroupe)
        console.log('\n'+"COST OF TROUPE :----------> "+cost)
        return cost
    }
    readMusListFile()
    {
        const fs = require('fs')
        const r = fs.readFileSync('MusicianList.txt','utf8') 
        const list = r.split('\r\n')

        console.log('\n\n'+"POPULATING TROUPE LIST FROM READ TEXT FILE---------->")
        console.log(list)

    return true
    }
    writeMusListFile()
    {
        const fs= require('fs')

        let data='\n\n'+ "TROUPE DETAILED SUMMARY----------> "+
        '\n'+"Troupe Name is:"+this.troupeName+
        "\n"+"No of instruments included: "+this.noOfInstrument+
        "\n"+"Genre Playing: "+this.genreTroupe+
        "\n"+"Duration of Play :"+this.durationTroupe+
        "\n"+"Hourly rate of troupe: "+this.hourlyRateTroupe

        fs.appendFile("MusicianListNew.txt", data,function(err){
            if(err) throw err;
            });
    return true
    }
    
}

module.exports =Troupe

