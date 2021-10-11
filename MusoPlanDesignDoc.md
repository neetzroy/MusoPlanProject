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



`		`Create troupe with musicians ()

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

- Class Descriptions and relationships.

Important data structures and functions to be used in the project are,

Object oriented principles like Abstraction, Inheritance, polymorphism, and Encapsulation.

Musician Class is the parent class and all the child classes such as Guitarist, bassist, flautist and percussionist will inherit properties and functions from the parent class.

Musician class has the musician details such as Musician name, year of playing, hourly rate, year of playing and interesting fact about them. These properties will be inherited to all the child classes.

- Program inputs and outputs.

Program inputs will be given as user prompt inputs such as musician name, year of playing, hourly rate, and interesting fact. Also inputs such as troupe name, number of instruments, troupe genre and duration and hourly rate.

Program output will be processed and calculated according to the inputs and shows the musician and troupe summary, details of newly added musician and their interesting facts etc.


- Version Control System for the project.

Git is a distributed version control system and has good online supporting systems. Better and effective branching system in Git is suitable for Globex’s requirement for branching. After analysing the pros and cons of popular version control systems used today, it is evident that, Git is the most efficient one in terms of usability, speed, and performance. Also, Git complies and meet the organisational requirements.

- Software Development Life Cycle Pattern.

Selected SDLC pattern for this project is Waterfall methodology as it’s the most popular and effective version of SDLC for IT projects. Waterfall method follows a sequential, single directed process that flows like a waterfall and it’s easy to implement in projects. It has different stages. The team can’t move to the next phase until the previous ones finished and approved. If any issues occurs at one stage, the team has to go back to the first level and must solve the issue and runs through the phases all over again.

The below are the main phases in this methodology:

1. Requirement gathering phase: This phase analyse and fully understand the user requirements and problems. This is more like a research and initial design phase.
1. Design Phase: At this stage, the developer team designs a technical solution according to the project requirements. This includes different solution scenarios, data flow, layouts, and models.
1. Implementation Phase: Once the design phase is done and approved, the developer starts the coding part and implementation step.
1. Testing: After the completion of coding part, testing should be done before releasing to the user. The software testing team will be carrying out the relevant test cases to check if the software meets the user requirements or not.
1. Maintenance: This is the final and after phase of a software being released to the customer to ensure its running without any issues.




