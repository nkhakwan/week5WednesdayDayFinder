import { DayCalculate } from './../src/dayCalculate.js';

describe('DayCalculate', () => {
  var dayCalculate;

  beforeEach(() => {
     dayCalculate = new DayCalculate(2021,6,7);
  });

  test('should test whether our number of days are correct', () => { 
    expect(dayCalculate.dayFinder()).toEqual("Wednesday");
  });
  
}); // end of describe
