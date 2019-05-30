let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('countAllFromTown' , function(){
    it('Should return 3 from a string of registration plates with the location code "CL"' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);
    });
    it('Should return 1 from a string of registration plates with the location code "CJ")' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ'),1);
    });
    it('Should return 0 if the string does not contain the a registration plate starting with "CA")' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CA'),0);
    });
});

