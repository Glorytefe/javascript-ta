// complete the function
function palindrom(str) {
  // code goes here
  str =str.replace(/\W/g, '');
  str = str.toUpperCase();
  return str === str.split('').reverse().join('');
  
}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
