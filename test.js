const chai = require("chai");
const expect = chai.expect;

const minDivSteps = require("./minDivSteps");

describe("Given a number N, Minimum number of steps required to make N = 0", () => {
  let notPossible = "Not possible";

  it("Given the input as 'apple' the output should be 'Not possible'", () => {
    expect(minDivSteps("apple")).to.equal(notPossible);
  });

  it("Given the input as any special character '@' the output should be 'Not Possible'", () => {
    expect(minDivSteps("@")).to.equal(notPossible);
  });

  it("Given the input as any negative number like -24 the output should be 'Not Possible'", () => {
    expect(minDivSteps(-24)).to.equal(notPossible);
  });

  it("Given the input as 0 the output should be 'Not Possible'", () => {
    expect(minDivSteps(0)).to.equal(notPossible);
  });

  it("Given the input as 8 the output should be 'Not Possible'", () => {
    expect(minDivSteps(8)).to.equal(notPossible);
  });

  it("Given the input as 24 the output should be 4", () => {
    expect(minDivSteps(24)).to.equal(4);
  });

  it("Given the input as 9 the output should be 3", () => {
    expect(minDivSteps(9)).to.equal(3);
  });
});
