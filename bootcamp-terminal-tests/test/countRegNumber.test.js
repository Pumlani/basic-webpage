let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('countRegNumber function' , function(){
    it('should return three registration numbers.' , function(){

      assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);

    });

    it('should return an error.' , function(){
      assert.notEqual(countRegNumber('CA 182736,CY 523519,CJ 812328'),0);

    });


});
