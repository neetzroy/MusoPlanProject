


|Project Name:|Musoplan Software|Test Designed by|Neethu Royce|
| :- | :- | :- | :- |
|Module Name:|User Input Data Validation|Date:|01/09/2021|
|Version Tested|Version1|Test executed by:|Neethu Royce|
|Release Date|03/09/2021|Task Performed|Unit Testing|
Globex Corporation



|STEP|STEP DETAILS|EXPECTED RESULTS|ACTUAL RESULTS|OTHERS|
| :-: | :-: | :-: | :-: | :-: |
|Check whether the entered name character length is between 3 & 30|<p>Enter a name: “Ben”</p><p></p><p></p>|<p>Input taken with no prompt message</p><p></p>|<p>Input taken with no prompt message</p><p></p>|<p>Verified</p><p></p><p></p>|
||Enter a name with characters less than 3: “Be”|Shows a prompt message to the user to enter a valid name|Show a prompt message to the user to enter a valid name|<p>Verified</p><p></p>|
||Enter a name with characters greater than 30|Shows a prompt message to the user to enter a valid name|Show a prompt message to the user to enter a valid name|<p>Verified</p><p></p>|
|<p>Check the musician type entered is one of the lists: Guitarist/</p><p>Bassist/Flautist/</p><p>Percussionist</p><p></p>|<p>Enter a musician type:</p><p>Input 1: Guitarist</p><p>Input 2: Bassist</p><p>Input 3: Flautist</p><p>Input 4: Percussionist</p>|<p>Input taken with no prompt message</p><p></p>|<p>Input taken with no prompt message</p><p></p>|<p>Verified</p><p></p>|
||Input 5: Violinist|Shows a prompt message to the user to enter a valid type|Show a prompt message to the user to enter a valid type|<p>Verified</p><p></p>|
|Check the musician playing year as non-negative|<p>Enter a year.</p><p></p><p>Input 1: 2020</p>|<p>Input taken with no prompt message</p><p></p>|<p>Input taken with no prompt message</p><p></p>|<p>Verified</p><p></p>|
||Input 2: -2020|Shows a prompt message to the user to enter a valid type|Show a prompt message to the user to enter a valid type|<p>Verified</p><p></p>|
|Check the music troupe duration is between 0.5 and 3 hours|<p>Enter an hour value.</p><p>Input 1: 2</p><p></p>|<p>Input taken with no prompt message</p><p></p>|<p>Input taken with no prompt message</p><p></p>|<p>Verified</p><p></p>|
||<p>Input 2: 0.4</p><p>Input 3: 4</p>|Shows a prompt message to the user to enter a valid duration|Show a prompt message to the user to enter a valid duration|<p>Verified</p><p></p>|
|Check the genre is from the list: Pop / Jazz/ Rock|<p>Enter a genre.</p><p>Input 1: Pop</p><p>Input 2: Jazz</p><p>Input 3: Rock</p>|<p>Input taken with no prompt message</p><p></p>|<p>Input taken with no prompt message</p><p></p>|<p>Verified</p><p></p>|
||Input 4: Bass|Shows a prompt message to the user to enter a valid duration|Shows a prompt message to the user to enter a valid duration|<p>Verified</p><p></p>|
|Check the musician hourly rate is greater than 50|<p>Enter a rate.</p><p>Input 1: 60</p>|<p>Input taken with no prompt message</p><p></p>|<p>Input taken with no prompt message</p><p></p>|<p>Verified</p><p></p>|
||Input 2: 40|Shows a prompt message to the user to enter a valid rate|Shows a prompt message to the user to enter a valid rate|<p>Verified</p><p></p>|

