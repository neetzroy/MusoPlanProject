# Test Plan
## MusoPlan Software
Prepared by

Neethu R, Programmer.


### Contents

# Contents
` `TOC \o "1-3" \h \z \u [Test Plan	 PAGEREF _Toc81903424 \h 1](#_Toc81903424)

[MusoPlan Software	 PAGEREF _Toc81903425 \h 1](#_Toc81903425)

[Contents	 PAGEREF _Toc81903426 \h 1](#_Toc81903426)

[Introduction	 PAGEREF _Toc81903427 \h 2](#_Toc81903427)

[Scope	 PAGEREF _Toc81903428 \h 2](#_Toc81903428)

[Quality Objective	 PAGEREF _Toc81903429 \h 2](#_Toc81903429)

[Test Plan	 PAGEREF _Toc81903430 \h 2](#_Toc81903430)

[Conclusion	 PAGEREF _Toc81903431 \h 3](#_Toc81903431)
















### **Introduction**
This test plan is designed to confirm that the newly developed software, MusoPlan is successfully meeting all the requirements mentioned in the client requirement documentation according to the company, Globex Corporates’ policies and standards.
### **Scope**
Scope of the software testing of this application is defined and confirmed using,

`	`Base cases

`	`Corner cases

`	`Edge cases.
### **Quality Objective**
The main test objective of this test plan is to verify all the units, functions, and the whole system of MusoPlan is operating without any compromise on quality and without any defects.
### **Test Plan** 
The proposed test plan steps are as follows:

**Identifier: Test1**

Test Case: **Create musician module.**

1. User must be able to create a musician using user prompt questions.
1. User must be able to type the musician details in the command line.

Input Values:

- Enter musician name = “Bob Mob”
- Enter musician type from the list: guitarist/bassist/percussionist/flautist = “Bassist”
- Enter musician year playing= “2020”
- Enter musician hourly playing rate= “55”
- Enter the interesting fact= “I love my bass with rhythm”

Execution steps:

1. Run the software using command prompt.
1. Enter the input values.

Output Values:

- Enter musician name = “Bob Mob” --àSuccess
- Enter musician type from the list: guitarist/bassist/percussionist/flautist = “Bassist”-àSuccess
- Enter musician year playing= “2020”-àSuccess
- Enter musician hourly playing rate= “55”-àSuccess
- Enter the interesting fact= “I love my bass with rhythm”-àSuccess
- Displays the recorded musicians’ details on the command screen-àSuccess

**Identifier: Test2**

Test case:

1. User enters the musician’s name in command line.
1. The name character number must be between 3 and 30 characters.

Input Values: 

1. “BOB”
1. “bob”
1. “Bob Mob”
1. “BO”
1. “BOBBBBBBBBBBBBBBBBBBBBBBBBBBBBB”


Execution Steps:

1. Run the software using command prompt.
1. Enter the input values.

Output Values:

1. “BOB” = Takes the input successfully.
1. “bob” = Takes the input successfully.
1. “Bob Mob” = Takes the input successfully.
1. “Bo” = Error: shows prompt message to enter correctly.

` `5.“Bobbbbbbbbbbbbbbbbbbbbbbbbbbbbbb”= Error: shows prompt message to enter correctly.

**Identifier: Test3**

Test case:

1. User must be able to select a musician from the list: guitarist, bassist, percussionist, or flautist.

Input Values:

- “Guitarist”
- “Bassist”
- “Percussionist”
- “Flautist”
- “guitarist”
- “bassist”
- “percussionist”
- “flautist”
- “jazzist”
- “abcde”

Execution steps:

1. Run the software in command prompt.
1. Enter the input values one by one.

Output Values:

- “Guitarist”: Takes input successfully
- “Bassist”: Takes input successfully
- “Percussionist”: Takes input successfully
- “Flautist”: Takes input successfully
- “guitarist”: Takes input successfully
- “bassist”: Takes input successfully
- “percussionist”: Takes input successfully
- “flautist “: Takes input successfully
- “jazzist”: Error: shows prompt message to enter correctly.
- “abcde”: Error: shows prompt message to enter correctly.

**Identifier: Test4**

Test case:

1. User must be able to enter musician year playing.
1. Year must be a non-negative year.

Input Values:

- 2020
- 1893
- 99
- -11
- -2019

Execution steps:

1. Run the software in command prompt.
1. Enter the input values one by one.

Output Values:

- 2020: Takes input successfully
- 1893: Takes input successfully
- 99: Error: shows prompt message to enter a valid year
- -11: Error: shows prompt message to enter a valid year
- -2019: Error: shows prompt message to enter a valid year

**Identifier: Test5**

Test case:

1. User must be able to enter a rate per hour.
1. The rate must be above 50

Input Values:

- 55
- 50
- 100
- -50
- 20

Execution steps:

1. Run the software in command prompt.
1. Enter the input values one by one.

Output Values:

- 55: Takes input successfully
- 50: Takes input successfully
- 100: Takes input successfully
- -50: Error: shows prompt message to enter correctly.
- 20: Error: shows prompt message to enter correctly.

**Identifier: Test6**

Test case:

1. If the user able to select musician type, 

the selected musicians name, years playing and hourly must be recorded.

Input Values:

1. Musician name: “Bob Mob”
1. Musician type: “Bassist”
1. Musician year: “2020”
1. Hourly rate: “55”

Execution steps:

1. Run the software in command prompt.
1. Enter the input values one by one.
1. Execute the whole program.

Output Values:

`	`Successfully displays the recorded musician details such as Name, year playing and hourly rate on the command screen.




**Identifier: Test7** 

Test Case: **Create Troupe module**

1. Troupe name characters must be between 3 and 30.

Input Values: 

- “Best Troupe”
- “Best”
- “Be”
- “Besttttttttttttttttttttttttttttttttttttttttttttt”

Execution Steps:

1. Run the software in command prompt.
1. Enter the input values one by one.
1. Execute the whole program.

Output Values:

- “Best Troupe” = Takes input successfully
- “Best” = Takes input successfully
- “Be” = Error: shows prompt message to enter correctly. 
- “Besttttttttttttttttttttttttttttttttttttttttttttt” = Error: shows prompt message to enter correctly.

**Identifier: Test8**

Test Case: 

1. Test the number of musicians added is no more than 5.

Input Values:

- Musician Details Set 1: “Bob A”,” Bassist”, “2020”, “55”, “I love my Bass”
- Musician Details Set 2: “Bob B”,” Guitarist”, “2017”, “55”, “I love my Guitar”
- Musician Details Set 3: “Bob C”,” Flautist”, “2020”, “55”, “I love my Flute”
- Musician Details Set 4: “Bob D”,” Bassist”, “2019”, “55”, “I love my Bass rhythm”
- Musician Details Set 5: “Bob E”,” Percussionist”, “1800”, “55”, “I love my Percussion”
- Musician Details Set 6: “Bob F”,” Flautist”, “2020”, “1900”, “I love my Flute rhythm”

Execution Steps:

1. Run the software in command prompt.
1. Enter the input values one by one.
1. Execute the whole program.

Output Values:

- Musician Details Set 1: “Bob A”,” Bassist”, “2020”, “55”, “I love my Bass”àSuccess
- Musician Details Set 2: “Bob B”,” Guitarist”, “2017”, “55”, “I love my Guitar”àSuccess
- Musician Details Set 3: “Bob C”,” Flautist”, “2020”, “55”, “I love my Flute”àSuccess
- Musician Details Set 4: “Bob D”,” Bassist”, “2019”, “55”, “I love my Bass rhythm”àSuccess
- Musician Details Set 5: “Bob E”,” Percussionist”, “1800”, “55”, “I love my Percussion”àSuccess
- Musician Details Set 6: “Bob F”,” Flautist”, “2020”, “1900”, “I love my Flute rhythm”à shows error prompt message that “No more than 5 musicians can be added”






**Identifier: Test9**

Test Case: 

1. Check whether user enters a valid troupe genre from the list: “Pop/Jazz/Rock”

Input Values:

- “Pop”
- “POP”
- “pop”
- “Bass”
- “Jazz”
- “Rock”

Execution Steps:

1. Run the software in command prompt.
1. Enter the input values one by one.
1. Execute the whole program.

Output Values:

- “Pop” = Takes input successfully
- “POP” = Takes input successfully
- “pop” = Takes input successfully
- “Bass” = Error: shows a prompt message to enter correctly
- “Jazz” = Takes input successfully
- “Rock” = Takes input successfully

**Identifier: Test10**

Test Case: 

1. Check whether user enters a valid troupe duration between 0.5 and 3 hours.

Input Values:

- 0.5
- 2
- 3
- 0.2
- 4
- -1

Execution Steps:

1. Run the software in command prompt.
1. Enter the input values one by one.
1. Execute the whole program.

Output Values:

- 0.5 = Takes input successfully
- 2 = Takes input successfully
- 3 = Takes input successfully
- 0.2 = Error: shows a prompt message to enter correctly
- 4 = Error: shows a prompt message to enter correctly
- -1 = Error: shows a prompt message to enter correctly

**Identifier: Test11**

Test Case: 

1. Test ADD MUSICIAN function

Input Values:

- Musician Details Set 1: “Bob A”,” Bassist”, “2020”, “55”, “I love my Bass”àSuccess

Execution Steps:

1. Run the software in command prompt.
1. Enter the input values one by one.
1. Execute the whole program.

Output Values:

- Musician Details Set 1: “Bob A”,” Bassist”, “2020”, “55”, “I love my Bass”

àSuccess, Displays a message on the screen that musician has added to the troupe and shows added musician details.

**Identifier: Test12**

Test Case: 

1. Test whether the TROUPE SUMMARY function displays a troupe summary printed on the command screen.

Input Values:

- Troupe name: 'Best troupe'
- No of instruments: 10
- Genre of troupe: “Rock”
- Duration of troupe: 2
- Hourly rate of troupe: 50

Execution Steps:

1. Run the software in command prompt.
1. Enter the input values one by one.
1. Execute the whole program.

Output Values:

` `Successfully displays the troupe summary details on the command screen.

**Identifier: Test13**

Test Case: 

1.Test whether the TROUPE DETAILED DESCRIPTION function displays a troupe detailed description with troupe summary printed on the command screen.

Input Values:

- Troupe name: 'Best troupe'
- No of instruments: 10
- Genre of troupe: “Rock”
- Duration of troupe: 2
- Hourly rate of troupe: 50

Execution Steps:

1. Run the software in command prompt.
1. Enter the input values one by one.
1. Execute the whole program.

Output Values:

Successfully displays the troupe detailed description details with troupe summary on the command screen.




**Identifier: Test14**

Test Case: 

1. Check whether the Calculate cost of deployment function gives correct cost taking troupe details as input.

Input Values:

- Duration of troupe: 2
- Hourly rate of troupe: 50

Execution Steps:

1. Run the software in command prompt.
1. Enter the input values one by one.
1. Execute the whole program.

Output Values:

Successfully calculate the cost of troupe taking Duration and Hourly rate as inputs: ”100”

**Identifier: Test15**

Test Case: Check whether the READ FILE function is reading and populating troupe name list and prints on the command screen.

Input Values:

- Duration of troupe: 2
- Hourly rate of troupe: 50

Execution Steps:

`	`1.Run the software in command prompt.

`	`2.Enter the input values one by one.

`	`3.Execute the whole program.

Output Values:

Successfully reads from the Read List text file and populates and prints the contents on the command screen also successfully read as a Troupe name.

**Identifier: Test16**

Test Case: Check whether the WRITE FILE function is writing a new text file with troupe details in the text as contents.

Input Values:

- Troupe name: 'Best troupe'
- No of instruments: 10
- Genre of troupe: “Rock”
- Duration of troupe: 2
- Hourly rate of troupe: 50

Execution Steps:

`	`1.Run the software in command prompt.

`	`2.Enter the input values one by one.

`	`3.Execute the whole program.

Output Values:

Successfully writes a new text file with troupe details in the text as contents.

### **Conclusion**
Expecting the software MusoPlan would be defect free and working successfully as a whole system without any defects. Appropriate actions should be taken in case of defects and on quality compromise.



