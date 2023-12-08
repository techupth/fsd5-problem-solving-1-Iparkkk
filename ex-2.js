//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  let revertS = [];
  console.log(s);
  s = s
    .toLowerCase()
    .replaceAll(",", "")
    .replaceAll(":", "")
    .replaceAll(" ", "");

  console.log(s);
  for (let i of s) {
    revertS.push(i);
  }
  revertS = revertS.reverse().join().replaceAll(",", "");
  console.log(revertS);
  return s === revertS;
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
