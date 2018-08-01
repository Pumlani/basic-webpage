let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('isFromBellville function' , function(){
    it("should return the registration is from Bellville." , function(){
     var name =  "CY 2345";
        assert.equal(isFromBellville(name), true);

    });
    it("should return the registration is not from Bellville." , function(){
     var name =  "CA 3456";
        assert.equal(isFromBellville(name), false);

    });
    it("should not give an error on an empty space", function(){

    var name = "";
    assert.equal("", isFromBellville(name));

  });

});
