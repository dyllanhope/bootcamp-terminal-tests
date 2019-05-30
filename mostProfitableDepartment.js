"use strict";
module.exports = function(data){
  	var mostProfitable = 0;
  	var mostProfitableDept= '';
  	var departmentMap = {};
  	for (var i=0; i<data.length;i++){
      	if (departmentMap[data[i].department] === undefined){
          	departmentMap[data[i].department] = 0;
        }
     departmentMap[data[i].department] += data[i].sales;
    }
  	for(var x in departmentMap){
     	if(departmentMap[x]>mostProfitable){
          	mostProfitable = departmentMap[x]
          	mostProfitableDept = x;
           }
    }
  return mostProfitableDept;
}
