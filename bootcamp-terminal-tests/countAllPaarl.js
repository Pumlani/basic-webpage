module.exports = function(list){
  var regNumbers=list.split(", ");
  var paarl=[];
  for (var i=0; i<regNumbers.length; i++){
    if(regNumbers[i].startsWith("CJ")){
      paarl.push(regNumbers[i]);
    }

  }
 return paarl.length;
}
