
function convertToNumArray (argument) {
  //Splits input string into an array of digits
  var arg = argument.split("");
  var digits =[];
  arg.forEach(function(element) {
    var num = Number(element);
    digits.push(num);
  })
  return digits;
}

function sum(arr) {
  var total = 0;
  arr.forEach(function(element){
    total += Number(element);
  });
  return total;
}

//function returns double the number. If the result is a two digit number, it adds the two digits and returns the sum
function doubleTheDigits (num) {
  var result = num * 2;
  if(result > 9) {
    var numArr = result.toString().split("");
    var totalOfDigits = sum(numArr);
    result = totalOfDigits;
  }
  return result;
}

function checkLuhn(argument) {
  var digits = convertToNumArray(argument);
  console.log(digits);
  digitReverse = digits.reverse();
  console.log(digitReverse);
  var digitsToBeDoubled = digitReverse.filter( function(element, index) {
    if(index % 2 !== 0) {
      return element;
    }
  });
  console.log(digitsToBeDoubled);
  var digitsNotToBeDoubled = digitReverse.filter(function(element, index) {
    if(index % 2 === 0) {
      return element;
    }
  });
  console.log(digitsNotToBeDoubled);
  var doubledArr = [];
  digitsToBeDoubled.forEach(function(element) {
    doubledArr.push(doubleTheDigits(element));
  })
  console.log(doubledArr);
  var luhnSum = sum(doubledArr) + sum(digitsNotToBeDoubled);
  var luhnSum;
  if(luhnSum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  convertToNumArray: convertToNumArray,
  sum: sum,
  doubleTheDigits: doubleTheDigits,
  checkLuhn: checkLuhn
}

console.log(checkLuhn("8532"));