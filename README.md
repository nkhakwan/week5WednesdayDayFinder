# _Day Finder_

#### _Epicodus Week 5 Wednesday and Thursday combined Project_

#### By _**KhaanSahab**_ and _**Matt Stroud**_

## Description

_This mind jogging coding Program takes three parameters from users or in our particular case from test we would be writing in jest and gives us back the day corresponding to the date, month and year parameters it had been provided with_

## Setup/Installation Requirements

* Clone this repository.
* run npm install
* run npm test
* subsequently go to ./__tests__ directory and change the parameters manually in day.test.js file and run npm test again.


## Known Bugs

It only works for the future dates. This has been tested till 2064 to give correct day. 

## Support and contact details

_Have a bug or an issue with this application contact Matt or KhanSahab thru emails at lixingke06@gmail.com or post_khan@yahoo.com_ 

## Technologies Used

HTML
Git and GitHub
JavaScript
constructors
prototype
Creating and Saving Objects
ES 6 classes
testing with jest


### Specs Input thru __tests_/dayCalculate.test.js
* We have six tests of three different types. In first two tests, we provide "year" "month and "date" and the test tests whether the code came up with right day. It tests if expected and recieved was really a Wednesday.
* Next two tests test a function to see whether function calculates right number of days till the date we have provided to it. For instance November 15, 2025 has 315 days till that date in 2025. So the test tests that.
* The last two tests test whether the code can find first day of any given year. Whether first day of 2064 be Sunday or Wednesday, can be determined by one of the functions. For instance it is being tested what would be the first day on 2021. And we found it is going to be Friday.

| :-------------  | :-----------------------------------------------------| :----------------------------------------|
| **Testing Day Finder Function... Calculate what day of the week a date is**  | User Input:"2064 4 17" | Output: "received and expected Thursday" |
| **Testing firstDayOfTheYearFinder...What is the first day of the year of interest** | User Input: "2021 5 10" | Output: "5 (Friday)"|
| **Testing numberOfDays Function.... Testing how many days in the year of interest are there till the date inputted by the user** | User Input: "2015 11 15"| Output: "319" |


### License

This software is licensed under the Epicodus inc license.

Copyright (c) 2020 **_Khan Sahab & Matt Stroud_**