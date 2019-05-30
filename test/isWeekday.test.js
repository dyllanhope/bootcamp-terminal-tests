let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('isWeekday' , function(){
    it('Should return true if the entered day is a weekday(Mon-Fri)' , function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it('Should return false if the entered day is on a weekend(Sat-Sun)' , function(){
        assert.equal(isWeekday('Saturday'), false);
    });

});
