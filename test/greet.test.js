let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andre', greet('Andre'));
    });
    it('should greet Dyllan correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Dyllan', greet('Dylan'));
    });
});