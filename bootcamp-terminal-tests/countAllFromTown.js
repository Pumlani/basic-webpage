module.exports = function(regist){
  var allReg=regist.split(", ");
  var CountTown=[];
  for(var i=0; i<allReg.length; i++){
  if(allReg[i].startsWith("CL")){
  CountTown.push(allReg[i])
  }
  }
  return CountTown.length;
}
