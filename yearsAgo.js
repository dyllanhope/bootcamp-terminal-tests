"use strict";
module.exports=function(year) {
  var d = new Date();
  var dif ;
  var currentYear = d.getFullYear();
  if (currentYear > year){
    return currentYear - year;
  } else{
    return "not possible";
  }
}
