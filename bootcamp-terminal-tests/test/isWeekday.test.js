let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('isWeekday function' , function(){
    it("should print out it's week day." , function(){
      var day = 'Monday';
        assert.equal(isWeekday(day), true);
    });
    it("should print out it's not a week day." , function(){
      var day = 'Saturday';
        assert.equal(isWeekday(day), false);
    });
//     it("should only read strings variables." , function(){
//
//       assert.typeOf("day", 'string', 'day is a string');
// });

});
