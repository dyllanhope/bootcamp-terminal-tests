let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('countRegNumber' , function(){
    it('Should return 3 from counting entered registration numbers' , function(){
        assert.equal(countRegNumber("CY1234, CA5674, CJ2468"),3);
    });
    it('Should return 2 from counting entered registration numbers' , function(){
        assert.equal(countRegNumber("CY1234, CA5674"),2);
    });
    it('Should return 1 from counting entered registration numbers' , function(){
        assert.equal(countRegNumber("CY1234"),1);
    });
    it('Should return 0 when the string is empty' , function(){
        assert.equal(countRegNumber(""),0);
    });
});
