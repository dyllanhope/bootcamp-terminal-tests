"use strict";
module.exports=function(list,num){
  var overNum = []
  	for (var i=0; i<list.length; i++){
      	if (list[i].qty > num){
            	overNum.push(list[i]);
            }
    }

  	return overNum;
}
