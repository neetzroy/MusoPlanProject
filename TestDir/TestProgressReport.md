# TEST PROGRESS REPORT
















`			  `Tests executed by,

Neethu R

Date of Execution:

10/09/2021






# **Automation Testing on MusoPlan Project**

For Automation Testing, the main MusoPlan project has divided into 3 separate test module files.

**Test Module 1: Data validation on User Prompt Input Values**

**Test Case 1**

|User requirement to be tested|Input Data|Expected Outcome|Actual Outcome|Test Status|
| :- | :- | :- | :- | :- |
|Musician name must be between 3- and 30-character length|“BOB”|No error message|No error message|<p></p><p></p><p></p><p></p><p>Success</p>|
||“bob”|No error message|No error message||
||“Bob Mob” |No error message|No error message||
||“BO”|Error Message|Error Message|<p></p><p>Success</p>|
||“BOBBBBBBBBBBBBBBBBBBBBBBBBBBBBB”|Error message|Error Message||

**Test Case 2**

|User requirement to be tested|Input Data|Expected Outcome|Actual Outcome|Test Status|
| :- | :- | :- | :- | :- |
|<p>User must be able to select a musician from the list: guitarist, bassist, percussionist, or flautist.</p><p></p>|“Guitarist”|No error message|No error message|<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p>Success</p>|
||“Bassist”|No error message|No error message||
||“Percussionist”|No error message|No error message||
||<p>“Flautist”</p><p></p>|No error message|No error message||
||“guitarist”|No error message|No error message||
||“flautist”|No error message|No error message||
||“bassist”|No error message|No error message||
||<p>“percussionist”</p><p></p>|No error message|No error message||
||<p>“jazzist”</p><p></p>|Error message|Error message|<p></p><p>Success</p>|
||“abcde”|Error message|Error message||



**Test Case 3**

|User requirement to be tested|Input Data|Expected Outcome|Actual Outcome|Test Status|
| :- | :- | :- | :- | :- |
|Musician Playing Year must be a non-negative year|2020|No error message|No error message|<p></p><p></p><p></p><p></p><p>Success</p>|
||1893|No error message|No error message||
||99|Error message|Error message||
||-11|Error message|Error message|<p></p><p>Success</p>|
||-2019|Error message|Error message||


**Test Case 4**

|User requirement to be tested|Input Data|Expected Outcome|Actual Outcome|Test Status|
| :- | :- | :- | :- | :- |
|Musician hourly rate must be above 50|55|No error message|No error message|<p></p><p></p><p></p><p></p><p>Success</p>|
||50|No error message|No error message||
||100|No error message|No error message||
||-50|Error message|Error message|<p></p><p>Success</p>|
||20|Error message|Error message||

**Test Module 2: Testing Parent class and Child class methods**

**Test Case 5**

|User requirement to be tested|Input Data|Expected Outcome|Actual Outcome|Test Status|
| :- | :- | :- | :- | :- |
|User must be able to create a musician using user input prompt values|Enter musician name = “Bob Mob”|No error message|No error message|<p></p><p></p><p></p><p></p><p></p><p>Success</p>|
||Enter musician type from the list: guitarist/bassist/percussionist/flautist = “Bassist”|No error message|No error message||
||Enter musician year playing= “2020”|No error message|No error message||
||Enter musician hourly playing rate= “55”|No error message|No error message||
||Enter the interesting fact= “I love my bass with rhythm”|No error message|No error message||
||Enter musician name = “Bo”|Error message|Error message|<p></p><p></p><p></p><p></p><p>Success</p>|
||Enter musician type from the list: guitarist/bassist/percussionist/flautist = “Jassi”|Error message|Error message||
||Enter musician year playing= “-2020”|Error message|Error message||
||Enter musician hourly playing rate= “10”|Error message|Error message||

**Test Case 6**

|User requirement to be tested|Input Data|Expected Outcome|Actual Outcome|Test Status|
| :- | :- | :- | :- | :- |
|<p>The user must be able to select musician type, according to</p><p>the type, the musicians name, years playing and hourly must be recorded.</p>|<p>1. Musician name: “Bob Mob”</p><p>2. Musician type: “Bassist”</p><p>3. Musician year: “2020”</p><p>4. Hourly rate: “55”</p><p></p>|<p>`	`Successfully displays the recorded musician details of “Bassist” such as Name, year playing and hourly rate on the command screen.</p><p></p><p>RECORDING BASSIST DETAILS: ----------> </p><p>Musician Name: Bob Mob</p><p>Year of Playing: 2020</p><p>Hourly Rate: 55</p>|<p>`	`Successfully displays the recorded musician details of “Bassist” such as Name, year playing and hourly rate on the command screen.</p><p></p><p>RECORDING BASSIST DETAILS: ----------></p><p>` `Musician Name: Bob Mob</p><p>Year of Playing: 2020</p><p>Hourly Rate: 55</p>|<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p>Success</p>|

**Test Case 7**

|User requirement to be tested|Input Data|Expected Outcome|Actual Outcome|Test Status|
| :- | :- | :- | :- | :- |
|<p>The user must be able to select musician type, according to</p><p>the type, the musicians name, years playing and hourly must be recorded.</p>|<p>1. Musician name: “Bob Mob”</p><p>2. Musician type: “GUITARIST”</p><p>3. Musician year: “2020”</p><p>4. Hourly rate: “55”</p><p></p>|<p>`	`Successfully displays the recorded musician details of “GUITARIST” such as Name, year playing and hourly rate on the command screen.</p><p></p><p>RECORDING GUITARIST DETAILS: ----------> </p><p>Musician Name: Bob Mob</p><p>Year of Playing: 2020</p><p>Hourly Rate: 55</p>|<p>`	`Successfully displays the recorded musician details of “GUITARIST” such as Name, year playing and hourly rate on the command screen.</p><p></p><p>RECORDING GUITARIST DETAILS: ----------></p><p>` `Musician Name: Bob Mob</p><p>Year of Playing: 2020</p><p>Hourly Rate: 55</p>|<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p>Success</p>|

**Test Case 8**

|User requirement to be tested|Input Data|Expected Outcome|Actual Outcome|Test Status|
| :- | :- | :- | :- | :- |
|<p>The user must be able to select musician type, according to</p><p>the type, the musicians name, years playing and hourly must be recorded.</p>|<p>1. Musician name: “Bob Mob”</p><p>2. Musician type: “FLAUTIST”</p><p>3. Musician year: “2020”</p><p>4. Hourly rate: “55”</p><p></p>|<p>`	`Successfully displays the recorded musician details of “FLAUTIST” such as Name, year playing and hourly rate on the command screen.</p><p></p><p>RECORDING FLAUTIST DETAILS: ----------> </p><p>Musician Name: Bob Mob</p><p>Year of Playing: 2020</p><p>Hourly Rate: 55</p>|<p>`	`Successfully displays the recorded musician details of “FLAUTIST” such as Name, year playing and hourly rate on the command screen.</p><p></p><p>RECORDING FLAUTIST DETAILS: ----------></p><p>` `Musician Name: Bob Mob</p><p>Year of Playing: 2020</p><p>Hourly Rate: 55</p>|<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p>Success</p>|

**Test Case 9**

|User requirement to be tested|Input Data|Expected Outcome|Actual Outcome|Test Status|
| :- | :- | :- | :- | :- |
|<p>The user must be able to select musician type, according to</p><p>the type, the musicians name, years playing and hourly must be recorded.</p>|<p>1. Musician name: “Bob Mob”</p><p>2. Musician type: “PERCUSSIONIST”</p><p>3. Musician year: “2020”</p><p>4. Hourly rate: “55”</p><p></p>|<p>`	`Successfully displays the recorded musician details of “PERCUSSIONIST” such as Name, year playing and hourly rate on the command screen.</p><p></p><p>RECORDING PERCUSSIONIST DETAILS: ----------> </p><p>Musician Name: Bob Mob</p><p>Year of Playing: 2020</p><p>Hourly Rate: 55</p>|<p>`	`Successfully displays the recorded musician details of “PERCUSSIONIST” such as Name, year playing and hourly rate on the command screen.</p><p></p><p>RECORDING PERCUSSIONIST DETAILS: ----------></p><p>` `Musician Name: Bob Mob</p><p>Year of Playing: 2020</p><p>Hourly Rate: 55</p>|<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p>Success</p>|



**Test Module 3: Testing Troupe Class and methods**

**Test Case 10**

|User requirement to be tested|Input Data|Expected Outcome|Actual Outcome|Test Status|
| :- | :- | :- | :- | :- |
|Troupe name characters must be between 3 and 30.|“Best Troupe”|No error message|No error message|<p></p><p></p><p></p><p>Success</p>|
||“Best”|No error message|No error message||
||“Be”|Error Message|Error Message||
||<p>“Besttttttttttttttttttttttttttttttttttttttttttttt”</p><p></p>|Error Message|Error Message||

**Test Case 11**

|User requirement to be tested|Input Data|Expected Outcome|Actual Outcome|Test Status|
| :- | :- | :- | :- | :- |
|Check whether user enters a valid troupe duration between 0.5 and 3 hours.|0.5|No error message|No error message|<p></p><p></p><p></p><p></p><p>Success</p>|
||2|No error message|No error message||
||3|No error message|No error message||
||0.2|Error Message|Error Message||
||4|Error Message|Error Message||
||<p>-1</p><p></p>|Error Message|Error Message||

**Test Case 11**

|User requirement to be tested|Input Data|Expected Outcome|Actual Outcome|Test Status|
| :- | :- | :- | :- | :- |
|<p>Test ADD MUSICIAN function</p><p></p>|<p>Musician Details Set 1: “Bob A”,” Bassist”, “2020”, “55”, “I love my Bass</p><p></p>|<p>`    `ADDED MUSICIAN DETAILS:</p><p>Musician Name: Bob A Musician Playing Year: 2020 Hourly Rate: 55</p>|<p>`    `ADDED MUSICIAN DETAILS:</p><p>Musician Name: Bob A Musician Playing Year: 2020 Hourly Rate: 55</p>|<p></p><p></p><p></p><p></p><p>Success</p>|



**Test Case 11**

|User requirement to be tested|Input Data|Expected Outcome|Actual Outcome|Test Status|
| :- | :- | :- | :- | :- |
|<p>Test whether the TROUPE SUMMARY function displays a troupe summary printed on the command screen.</p><p></p>|<p>Troupe name: 'Best troupe'</p><p>No of instruments: 10</p><p>Genre of troupe: “Rock”</p><p>Duration of troupe: 2</p><p>Hourly rate of troupe: 50</p><p></p>|<p>"Troupe Name is:</p><p>Best Troupe</p><p>No of instruments included: 10</p><p>Genre Playing: Rock</p><p>Duration of Play :2</p><p>Hourly rate of troupe: </p><p>100"</p><p></p>|<p>"Troupe Name is:</p><p>Best Troupe</p><p>No of instruments included: 10</p><p>Genre Playing: </p><p>Rock</p><p>Duration of Play :2</p><p>Hourly rate of troupe: 100"</p><p></p>|<p></p><p></p><p></p><p></p><p></p><p>Status</p>|

**Test Case 12**

|User requirement to be tested|Input Data|Expected Outcome|Actual Outcome|Test Status|
| :- | :- | :- | :- | :- |
|<p>Check whether the Calculate cost of deployment function gives correct cost taking troupe details as input.</p><p></p>|<p></p><p>Duration of troupe: 2</p><p></p><p>Hourly rate of troupe: 50</p><p></p><p></p><p></p>|100|100|<p></p><p></p><p></p><p>Success</p>|

**Test Case 12**

|User requirement to be tested|Input Data|Expected Outcome|Actual Outcome|Test Status|
| :- | :- | :- | :- | :- |
|<p>Check whether the READ FILE function is reading and populating troupe name list and prints on the command screen.</p><p></p>|<p>Create a text file with values as Troupe names list</p><p></p>|<p>Successfully reads from the Read List text file and populates and prints the contents on the command screen also successfully read as a Troupe name.</p><p></p><p></p><p></p>|<p>Successfully reads from the Read List text file and populates and prints the contents on the command screen also successfully read as a Troupe name.</p><p></p>|<p></p><p></p><p></p><p></p><p>Success</p>|

**Test Case 13**

|User requirement to be tested|Input Data|Expected Outcome|Actual Outcome|Test Status|
| :- | :- | :- | :- | :- |
|Check whether the WRITE FILE function is writing a new text file with troupe details in the text as contents.|<p>Troupe name: 'Best troupe'</p><p>No of instruments: 10</p><p>Genre of troupe: “Rock”</p><p>Duration of troupe: 2</p><p>Hourly rate of troupe: 50</p><p></p>|<p>Successfully writes a new text file with troupe details in the text as contents.</p><p></p>|<p>Successfully writes a new text file with troupe details in the text as contents.</p><p></p>|<p></p><p></p><p></p><p>Success</p>|


**Defects identified during testing.**

- Couldn’t find testing for user requirement for Adding no more than 5 musicians.
- Couldn’t find testing for user requirement for Showing detailed summary including musicians introducing themselves

**Strategies for amending defects**

- Planned to rework the program code and amend the missing modules before next test schedule.

**TEST COVERAGE**

|File  |% Stmts|% Branch|% Funcs|% Lines|Uncovered Line #s|
| :- | :- | :- | :- | :- | :- |
|All files                 |96|84.21|97.96|96.55||
|EnterMusFunc.js          |100|100|100|100||
|Main\_Child\_Class\_Code.js|95.92|80.95|100|95.92|44,93,142,191|
|TroupeClass.js           |95.16|83.33|94.44|96.72|32,130            |


**Appending the Junit XML Document**

<?xml version="1.0" encoding="UTF-8"?>

<testsuites name="jest tests" tests="24" failures="0" errors="0" time="2.863">

`  `<testsuite name="undefined" errors="0" failures="0" skipped="0" timestamp="2021-09-10T14:34:26" time="1.597" tests="9">

`    `<testcase classname=" match text values " name=" match text values " time="0.004">

`    `</testcase>

`    `<testcase classname=" match text values " name=" match text values " time="0.001">

`    `</testcase>

`    `<testcase classname=" match text values " name=" match text values " time="0.001">

`    `</testcase>

`    `<testcase classname=" match text values " name=" match text values " time="0">

`    `</testcase>

`    `<testcase classname=" match text values " name=" match text values " time="0.002">

`    `</testcase>

`    `<testcase classname=" match text values " name=" match text values " time="0">

`    `</testcase>

`    `<testcase classname=" match text values " name=" match text values " time="0.001">

`    `</testcase>

`    `<testcase classname=" match text values " name=" match text values " time="0">

`    `</testcase>

`    `<testcase classname=" match text values " name=" match text values " time="0.001">

`    `</testcase>

`  `</testsuite>

`  `<testsuite name="undefined" errors="0" failures="0" skipped="0" timestamp="2021-09-10T14:34:26" time="1.765" tests="10">

`    `<testcase classname=" match text values of Musician " name=" match text values of Musician " time="0.155">

`    `</testcase>

`    `<testcase classname=" match text values of Musician " name=" match text values of Musician " time="0.009">

`    `</testcase>

`    `<testcase classname=" Calculate Cost of Troupe " name=" Calculate Cost of Troupe " time="0.006">

`    `</testcase>

`    `<testcase classname=" check if duration is greater than 0.5hrs and less than 3hrs" name=" check if duration is greater than 0.5hrs and less than 3hrs" time="0.001">

`    `</testcase>

`    `<testcase classname=" check if duration is greater than 0.5hrs and less than 3hrs" name=" check if duration is greater than 0.5hrs and less than 3hrs" time="0.002">

`    `</testcase>

`    `<testcase classname=" check if correct genre selected from list" name=" check if correct genre selected from list" time="0.001">

`    `</testcase>

`    `<testcase classname=" check if correct genre selected from list" name=" check if correct genre selected from list" time="0.001">

`    `</testcase>

`    `<testcase classname=" match text values of Troupe " name=" match text values of Troupe " time="0.006">

`    `</testcase>

`    `<testcase classname=" read file for success" name=" read file for success" time="0.022">

`    `</testcase>

`    `<testcase classname=" read file for success" name=" read file for success" time="0.003">

`    `</testcase>

`  `</testsuite>

`  `<testsuite name="undefined" errors="0" failures="0" skipped="0" timestamp="2021-09-10T14:34:26" time="1.83" tests="5">

`    `<testcase classname=" match text values of Musician " name=" match text values of Musician " time="0.2">

`    `</testcase>

`    `<testcase classname=" match text values of guitarist " name=" match text values of guitarist " time="0.012">

`    `</testcase>

`    `<testcase classname=" match text values of bassist " name=" match text values of bassist " time="0.016">

`    `</testcase>

`    `<testcase classname=" match text values of flautist " name=" match text values of flautist " time="0.016">

`    `</testcase>

`    `<testcase classname=" match text values of percussionist " name=" match text values of percussionist " time="0.011">

`    `</testcase>

`  `</testsuite>

</testsuites>



