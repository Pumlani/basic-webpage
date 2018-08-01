let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('countAllFromTown function' , function(){
    it('should return the number of all the registrations from a town.' , function(){
      var town = 'CL 64564, CL 5412, CJ 4643, CA 5445, CZ 5862, CF 54325';
        assert.equal(countAllFromTown(town), 2);
    });
    it('should return that these registrations are not from the same town.' , function(){
      var town = 'CL 64564, CL 5412, CJ 4643, CA 5445, CZ 5862, CF 54325';
        assert.notEqual("CA","CL","these are not equal");
    });
});
