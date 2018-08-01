module.exports = function(day){

var isWeek=!day.startsWith("S");
  console.log("It is a week day:"+ isWeek);
  return(isWeek);
}
