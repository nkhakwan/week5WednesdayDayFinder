export class DayCalculate {
        constructor(year,month,date,firstDayOfTheYear){
          this.year = year;
          this.month = month;
          this.date = date;
          this.firstDayOfTheYear = firstDayOfTheYear;
        }
    
  

  //let numberOfDays = 0;

    
  numberOfDays ()  {
    let totalDays = 0;
    let months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if  ((this.year%4) === 0 && (this.month >2)){
        for (var i = 0; i < this.month; i=i+1){
          totalDays += months[i];
          console.log(totalDays);
        }
        totalDays = totalDays +1 + this.date;
      } else {
        for (var i = 0; i < this.month; i=i+1){
          totalDays += months[i];
          console.log(totalDays);
        }
        totalDays = totalDays + this.date;
        console.log(totalDays);
      }
      console.log(totalDays);
      //numberOfDays = totalDays;
      return totalDays;
  }

  dayFinder() {
    let days = ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let ourDay = this.numberOfDays()%7;
    let offSet = 0;
    let day = "";
    for (var i=0; i<days.length; i=i+1){
      if (this.firstDayOfTheYear === days[i]){
        offSet = (i-1);
      }
    }
    console.log(ourDay);
    for (var i = 0; i<days.length; i=i+1){
      if (ourDay === i){
        day= days[i+offSet];
        return day;
        console.log(day+"we are in the loop");
      }// end of if
    } // end of for loop
  } // end of function
} // end of class














/*export function DayCalculate() {
    this.numberOfDays,
    this.day
  }

  
  DayCalculate.prototype.numberOfDays = function(year,month,date) {
    var totalDays = 0;
    var months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if  ((year%4) === 0 && (month >2)){
        for (var i = 0; i < month; i=i+1){
          totalDays += months[i];
          console.log(totalDays);
        }
        totalDays = totalDays +1 + date;
      } else {
        for (var i = 0; i < month; i=i+1){
          totalDays += months[i];
          console.log(totalDays);
        }
        totalDays = totalDays + date;
        console.log(totalDays);
      }
      console.log(totalDays);
      this.numberOfDays = totalDays;
    return totalDays;
  }

  DayCalculate.prototype.dayFinder = function(numberOfDays, firstDayOfTheYear){
    var days = ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ourDay = numberOfDays%7;
    var offSet = 0;
    for (var i=0; i<days.length; i=i+1){
      if (firstDayOfTheYear === days[i]){
        offSet = (i-1);
      }
    }
    console.log(ourDay);
    for (var i = 0; i<days.length; i=i+1){
      if (ourDay === i){
        this.day= days[i+offSet];
        console.log(this.day+"we are in the loop");
      }
    }
  }*/





