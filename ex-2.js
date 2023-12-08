//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  let revertS = [];
  console.log(s);
  s = s.toLowerCase();
  s = s.replaceAll(",", "");
  s = s.replaceAll(":", "");
  s = s.replaceAll(" ", "");
  console.log(s);
  for (let i of s) {
    revertS.push(i);
  }
  revertS.reverse();

  console.log(revertS);
  return checkEqualArray(s, revertS);
};

function checkEqualArray(array1, array2) {
  let countCorrect = 0;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        countCorrect = countCorrect + 1;
      }
    }
    if (countCorrect == array1.length) {
      return true;
    } else {
      return false;
    }
  }
}

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
