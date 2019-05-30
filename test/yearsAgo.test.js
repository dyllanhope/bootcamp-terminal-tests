let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('yearsAgo' , function(){
    it('Should return 19 with the entered year being 2000' , function(){
        assert.equal(yearsAgo(2000), 19);
    });
    it('Should return 2 with the entered year being 2017' , function(){
        assert.equal(yearsAgo(2017),2);
    });
    it('Should return "not possible" as the year 2200 has not occured yet' , function(){
        assert.equal(yearsAgo(2200),"not possible")
    });
});
