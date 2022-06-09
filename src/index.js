// complete the function
function prime (num) {
  // code goes here
  for (let index = 0; index < num; index++) {
    if (index === 1) {
      continue;
    }
    if(num % index === 0){
      return false
    }
  }
  return true
}
function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
