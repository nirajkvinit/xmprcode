const minDivSteps = inputNum => {
  let notPossible = "Not possible";

  if (!Number.isInteger(inputNum) || inputNum <= 0) {
    return notPossible;
  }

  // Going by the pattern, it has been deduced that only those numbers
  // which are divisable by 3 can become 0
  // So, we can uncomment the code below to save some operation time.
  // if (inputNum % 3 !== 0) {
  //   return notPossible;
  // }

  let steps = 0;

  while (inputNum !== 0) {
    if (inputNum < 3) {
      // if inputNum becomes less than 3 then return 'Not possible'
      return notPossible;
    }

    // if inputNum is even then divide it by 2
    // else substract 3 from it

    inputNum = inputNum % 2 === 0 ? inputNum / 2 : inputNum - 3;

    // for every operation increase the steps with 1
    steps++;
  }

  return steps;
};

// Execution testing
// (() => {
//   let possibleCounter = 0;
//   for (let i = 0; i < 200; i++) {
//     let result = minDivSteps(i);
//     console.log(`${i} : ${result}, `);
//     if (Number.isInteger(result)) {
//       possibleCounter++;
//     }
//   }
//   console.log(`Total possible ${possibleCounter}`);
// })();

module.exports = minDivSteps;
