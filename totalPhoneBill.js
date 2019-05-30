"use strict";
module.exports =function(data) {
 	var cellData = data.split(', ');
  	var smsCount = 0;
  	var callCount = 0;
  
  	for (var i=0;i<cellData.length;i++){
      	if(cellData[i] === "call"){
           callCount++;
        }else if(cellData[i]==="sms"){
          smsCount++;
        }
    }
  var total = (smsCount*0.65) + (callCount*2.75);
  return 'R' + total.toFixed(2);
}
