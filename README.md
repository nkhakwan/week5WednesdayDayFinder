# _Day Finder_

#### _Epicodus Week 5 Wednesday and Thursday combined Project_

#### By _**KhaanSahab**_ and _**Matt Stroud**_

## Description

_This mind jogging coding Program takes three parameters from users or in our particular case from test we would be writing in jest and gives us back the day corresponding to the date, month and year parameters it had provided_

## Setup/Installation Requirements

* Clone this repository.
* run npm install
* run npm test
* subsequently go to ./__tests__ directory and change the parameters manually in day.test.js file and run npm test again.


## Known Bugs

None so far 

## Support and contact details

_Have a bug or an issue with this application contact Matt thru his email at lixingke06@gmail.com_

## Technologies Used

HTML
Git and GitHub
JavaScript
constructors
prototype
Creating and Saving Objects
ES 6 classes

* Test would provide year, month and date to our dayCalculate class in dayCalculate.js file in ./src directory.
1 The class should be able to calculate the number of days in that particular year till to the date provided by the test. The number of days would vary by one day depending the year is divisiable by 4 or not.
2 The class should be able to find the first day of that particular year. rounded to floor(Year inserted minus 2020) /4) Plus (year inserted minu 2020)%7
3 Find the offset of the first day of the year from Monday.
4 number of days calculated in  step 1 divided by 7 and the modulo is added with number of offset calculated in step 3 would give us our day when we again divide it by 7.  




### Specs Input
| Spec | Input | result |
| :-------------  | :-----------------------------------------------------| :----------------------------------------|
| **Pizza Size**  | User Input:"choice of small medium large or family size" | Output: "displays the size selected" |
| **topping One** | User Input: "choice of chicken, mutton, beef or none" | Output: "displays the topping selected"|
| **topping two** | User Input: "choice of 'olives/artechoke', 'mushrooms/gardenSalad' or none | Output: "displays the selection" |
| **Displays Calculated Cost** | User Input: "Click-Submit" | Output: "calculated cost is displayed" |


### License

This software is licensed under the Epicodus inc license.

Copyright (c) 2020 **_Khan Sahab & Matt Stroud_**