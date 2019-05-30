let assert = require("assert");
let transportFee = require("../transportFee");

describe('transportFee' , function(){
    it('Should return correctly with R20 when "morning" was entered' , function(){
        assert.equal(transportFee('morning'),'R20');
    });
    it('Should return correctly with R10 when "afternoon" was entered' , function(){
        assert.equal(transportFee('afternoon'),'R10');
    });
    it('Should return correctly with "free" when "evening" was entered' , function(){
        assert.equal(transportFee('evening'),'free');
    });

});
