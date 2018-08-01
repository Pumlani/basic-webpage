let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('countAllPaarl function' , function(){
    it("should return one registration number in the string for Paarl." , function(){
      var paarl = 'CJ 8353';
        assert.equal(countAllPaarl(paarl), 1);
    });
    it("should return all the registration numbers in the string for Paarl." , function(){
      var paarl = 'CJ 8753, CJ 5543';
        assert.equal(countAllPaarl(paarl), 2);
    });
    it("should return that these registration numbers are not all for Paarl." , function(){
      var town = 'CL 64564, CL 5412, CJ 4643, CA 5445, CZ 5862, CF 54325';
        assert.notEqual("CA","CL","these are not equal");
    });
});
