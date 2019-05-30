"use strict";
module.exports=function(regNo){
  var list = regNo.split(', ');
  var paarlList= [];
  //console.log(list)
  for (var i=0; i<list.length;i++){
    if (list[i].startsWith('CJ')){
        	paarlList.push(list[i]);
        }
  }
  return paarlList.length;
}
