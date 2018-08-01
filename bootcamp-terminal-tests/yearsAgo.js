module.exports = function(year){
console.log(year);
var d = new Date();
  console.log(d);
var fullYear=d.getFullYear();
console.log(fullYear);
  var Sum=fullYear-year;
return Sum;
}
