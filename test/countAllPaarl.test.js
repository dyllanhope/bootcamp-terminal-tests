let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('countAllPaarl' , function(){
    it('Should return 2 if the string contains 2 Paarl registration plates' , function(){
        assert.equal(countAllPaarl("CJ 345 123, CK 345, CJ 123 456"), 2);
    });
    it('Should return 1 if the string contains 1 Paarl registraion plate' , function(){
        assert.equal(countAllPaarl("CA 345 123, CK 345, CJ 123 456"), 1);
    });
    it('Should return 0 if the string does not contain any Paarl registration plates' , function(){
        assert.equal(countAllPaarl("CL 345 123, CK 345, CA 123 456"), 0);
    });

});

