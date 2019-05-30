let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('totalPhoneBill' , function(){
    it('Should return the correct total of R7.45 when the string contains 3x sms & 2x call' , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
    });
    it('Should return the correct total of R3.40 when the string contains 1x sms & 1x call' , function(){
        assert.equal(totalPhoneBill('call, sms'),'R3.40');
    });
    it('Should return the correct total of R1.30 when the string contains 2x sms' , function(){
        assert.equal(totalPhoneBill('sms, sms'),'R1.30');
    });
    it('Should return the correct total of R0.00 when the string is empty' , function(){
        assert.equal(totalPhoneBill(''),'R0.00');
    });
});
