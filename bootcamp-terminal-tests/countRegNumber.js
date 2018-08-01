module.exports = function(RegNumber){
var listOFReg=RegNumber.split(',');
  //console.log(listOFReg);
var list=[];
for (var i=0; i<listOFReg.length; i++){
    list.push(listOFReg[i]);

  }
  return list.length;
}
