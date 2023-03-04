/* global describe it */

const expect = chai.expect;

describe("Simple Counter", () => {
  it("should have an initial state of 0", () => {
    expect(document.querySelector(".app p").textContent).to.equal(
      "The number is now 0"
    );
  });

  it("should increment the number when the increment button is clicked", () => {
    document.querySelector(".app button").click();
    expect(document.querySelector(".app p").textContent).to.equal(
      "The number is now 1"
    );
  });
});
