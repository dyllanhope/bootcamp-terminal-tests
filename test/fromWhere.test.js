let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('fromWhere' , function(){
    it('Should return "Cape Town" when the location code "CY" is entered' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
    it('Should return "Paarl" when the location code "CJ" is entered' , function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });
    it('Should return "Some other place!" when an unrecognised location code is entered' , function(){
        assert.equal(fromWhere('AY'), 'Some other place!');

    });

});
