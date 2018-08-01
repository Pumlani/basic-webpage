module.exports = function(str){
  console.log(str);
  var TotalBill=str.split(", ");

  var Bill=0;
  for(var i=0; i<TotalBill.length;i++){
  if(TotalBill[i]=='call'){
   Bill+=2.75; }

   else if(TotalBill[i]=='sms'){
     Bill+=0.65;}
  }
  return 'R'+ Bill.toFixed(2);
}
