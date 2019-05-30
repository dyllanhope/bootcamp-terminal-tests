let assert = require("assert");
let regCheck = require("../regCheck");

describe('regCheck' , function(){
    it('Should return false if an invalid registration number is entered' , function(){
        assert.equal(regCheck("CY1234","CY"),false);
    });
    it('Should return true if a valid registration number is entered' , function(){
        assert.equal(regCheck("45112CY","CY"),true);
    });

});
