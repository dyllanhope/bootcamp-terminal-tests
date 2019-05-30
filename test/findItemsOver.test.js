let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('findItemsOver' , function(){
    it('Should return the 2 items in the object that had a quantity exceeding 20' , function(){
        assert.deepEqual(findItemsOver([
	{"name":'apples',"qty":10},
	{"name":'pears',"qty":37},
	{"name":'bananas',"qty":27},
	{"name":'apples',"qty":3}
],20),[	
	{"name":'pears',"qty":37},
	{"name":'bananas',"qty":27}
]);
	});
	it('Should return no items from the object as none have a quantity exceeding 20' , function(){
		assert.deepEqual(findItemsOver([
	{"name":"apples","qty":10},
	{"name":"pears","qty":19},
	{"name":"bananas","qty":17},
	{"name":"apples","qty":3}
],20), []);
	});
	it('Should return the 3 items in the object that had a quantity exceeding 20' , function(){
		assert.deepEqual(findItemsOver([
	{"name":"apples","qty":40},
	{"name":"pears","qty":20},
	{"name":"bananas","qty":23},
	{"name":"apples","qty":37}
],20),[
	{"name":"apples","qty":40},
	{"name":"bananas","qty":23},
	{"name":"apples","qty":37}
]);
    });
});
