var assert = require("chai").assert;
var myLuhn = require("../lib/myluhn.js");

//Test for converttonumarray()
describe("Convert to a number Array", function() {
   it("Should return true if a string is converted to an object!", function() {
    var str = "4121144";
    var result = myLuhn.convertToNumArray(str);
    assert.isTrue(typeof result === "object");
   });
   it("Should return true if a string length and the number of digits in the array are the same!", function() {
    var str = "412523624";
    var result = myLuhn.convertToNumArray(str);
    assert.isTrue(result.length === str.length);
   });
 })

//Test for sum(arr)
describe("Test for sum()", function() {
  it("Should return true if the returned value is equal to the sum of the elements in array", function() {
    var arr = [1,3,4,4,2];
    var result = myLuhn.sum(arr);
    assert.isTrue(result === 14);
  });
})

//Test for double digits doubleTheDigits
describe("Test for doubleTheDigits", function() {
  it("Should return double the digit from 0 to 4 and  additon of both the digits of num x 2; when num is between 5 and 9 ", function() {
    var expectedResult = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
    for(var i = 0; i < 4; i++) {
      var num = i;
      var result = myLuhn.doubleTheDigits(num);
      assert.isTrue(result === expectedResult[i]);
    }
  });
});

// test for check luhn
describe("Test for checkLuhn()", function () {
  it("Should return true for the valid Luhn number 8532", function() {
    var luhnNo = "8532";
    var result = myLuhn.checkLuhn(luhnNo);
    assert.isTrue(result);
  });

  it("Should return true for the valid Luhn number 79927398713", function() {
    var luhnNo = "79927398713";
    var result = myLuhn.checkLuhn(luhnNo);
    assert.isTrue(result);
  });

  it("Should return false for the invalid Luhn number 79927398711", function() {
    var luhnNo = "79927398711";
    var result = myLuhn.checkLuhn(luhnNo);
    assert.isFalse(result);
  });

});