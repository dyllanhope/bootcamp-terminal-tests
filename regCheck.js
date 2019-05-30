"use strict";
module.exports =function(regNo,locInd){
  if (regNo.endsWith(locInd)){
      return true;
      } else {
       return false; 
      }
}
