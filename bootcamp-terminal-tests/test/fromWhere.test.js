let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('fromWhere function' , function(){
    it('should returns the car is from Cape Town.' , function(){
        assert.equal(fromWhere("CA 83746"), "Cape Town");
      });
      it('should returns the car is from Bellville.' , function(){
          assert.equal(fromWhere("CY 24353"), "Bellville");
        });
        it('should return the car is from Paarl.' , function(){
            assert.equal(fromWhere("CJ 24353"), "Paarl");
          });
        it('should return the registration is from some other place.' , function(){
            assert.notEqual(fromWhere("2730763 EC"), "Cape Town");
          });
});
