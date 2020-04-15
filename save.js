import { DayCalculate } from './../src/dayCalculate.js';

describe('DayCalculate', () => {
  var dayCalculate;

  beforeEach(() => {
     dayCalculate = new DayCalculate();
    dayCalculate.numberOfDays(2020,4,4);
    dayCalculate.dayFinder(95, "Sunday");
  });

  test('should test whether our number of days are correct', () => { 
    expect(dayCalculate.day).toEqual("Wednesday");
  });
  test('should test orderPrice', () => {
    expect(dayCalculate.numberOfDays).toEqual(95);
  });
}); // end of describe
