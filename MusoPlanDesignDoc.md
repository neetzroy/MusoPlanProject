**Design Document**

**Classes, Properties and Methods:**

Classes involved are Musician, Instrumentalist

Musician as Main Class. 

Has properties such as musician name, years playing, hourly rate.

Select whether a musician is a guitarist, bassist, percussionist, or flautist.

Musician Class has subclasses:  



Guitarist sub class

`	`Has musician name and interesting fact.

`	`Percussionist sub class

Has musician name and interesting fact.

`	`Bassist sub class

Has musician name and interesting fact.

`	`Flautist sub class

Has musician name and interesting fact.


Instrumentalist as Child class of Musician.

`	`Must have musician name and instrument name as properties.

`	`Methods to display available instruments and their interesting fact.

Troupe is an independent class object. 

Troupe has properties such as:

`	`Troupes name

`	`Number of instruments in the troupe.

`	`The genre the troupe plays.

`	`Minimum duration of a booking.

`	`Hourly rate for the whole troupe.

Troupe must have the below methods:

`	`Has functionality to enter troupe summary description.

`	`Has functionality to enter troupe detailed description.

Troupe must have functionalities to:

o	To add musician

o	Add musician details based on instrument.

o	To create troupes with musicians list.

o	Function to read musician list as text file.

o	Function to enter musician details by user.

o	Function to display troupe details and list as text file.

o	Function to display troupe details and list on screen.

**Data Flow as Follows:**

class Musician {

`  	`Properties:

`		`Musician Name, no of years, hourly rate, interesting fact

`	`Methods: 

`    	`Display Musician Fact ()

`     	`Display Musician Introduction ()

}

class Instrumentalist extends Musician {

`	`Properties:

`        		`Instrument Name

`	`Methods:   

`   		`Display Interesting Fact ()

`		`Conditional statements

}

class Troupe {

`	`Properties:

`		`Troupe Name, No of instruments, Genre, Duration, Hourly rate.

`	`Methods:

`		`Add musician ()

`		`{

`			`User prompt for inputting values and store

`		`}

`   		`Display troupe Summary ()

`		`Display troupe description ()



`		`Create troupe with musicians()

`		`{

`			`With manual user input prompt.

`			`And

`			`From a text file population.

}

`		`Read musician list text file ()

{ 

document read function

}

`		`Write musician list text file ()

`		`{

`		`Document write function

}

}


