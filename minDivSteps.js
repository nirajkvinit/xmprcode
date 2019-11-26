const minDivSteps = inputNum => {
  let notPossible = "Not possible";

  if (!Number.isInteger(inputNum) || inputNum <= 0) {
    return notPossible;
  }

  // if number is not divisable by 3 then getting 0 is not possible
  if (inputNum % 3 !== 0) {
    return notPossible;
  }

  let steps = 0;
  let result = inputNum;

  while (result !== 0) {
    if (result % 2 === 0) {
      // if number is even then divide by 2
      result = result / 2;
    } else {
      // else substract 3 from it
      result = result - 3;
    }

    // for every operation increase the steps with 1
    steps++;
  }

  return steps;
};

// Execution testing
// (() => {
//   for (let i = 0; i < 200; i++) {
//     console.log(`${i} : ${minDivSteps(i)}, `);
//   }
// })();

module.exports = minDivSteps;
