let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('totalPhoneBill function' , function(){
    it('should return the amount for sms' , function(){
        assert.equal(totalPhoneBill('sms'), 'R0.65');
    });
    it('should return the amount for call', function(){
      assert.equal(totalPhoneBill("call"), "R2.75")
    })
});
