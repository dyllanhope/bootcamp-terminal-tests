let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('isFromBellville' , function(){
    it('Should return true if a valid registration number is entered (starts with CY)' , function(){
        assert.equal(isFromBellville("CY1234"),true);
    });
    it('Should return false if an invalid registration number is entered ( does not start with CY)' , function(){
        assert.equal(isFromBellville("CJ43215"), false);
    });

});
