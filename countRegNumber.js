"use strict";
module.exports=function(regNo){
  if(regNo === ""){
    return 0;
  } else {
      var list = regNo.split(',');
      return list.length;
  }
}
