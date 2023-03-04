/* global describe it */

const { expect } = chai;

function setTimeoutPromise(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function waitForPageToLoad(frame) {
  return new Promise((resolve) => {
    if (frame.document.readyState === "complete") {
      return resolve();
    } else {
      return setTimeoutPromise(50)
        .then(waitForPageToLoad.bind(this, frame))
        .then(resolve);
    }
  });
}

function validateLinks(frame, domain, anchors = [], visited = new Set()) {
  return new Promise((resolve) => {
    if (anchors.length === 0 && visited.size > 0) {
      return resolve();
    }
    waitForPageToLoad(frame)
      .then(() => {
        expect(frame.document.title).not.to.equal(
          "Page not found · GitHub Pages"
        );

        const links = anchors
          .concat(Array.from(frame.document.querySelectorAll("a")))
          .filter((e) => !visited.has(e.href))
          .filter((e) => e.href.includes(domain));

        if (links.length > 0) {
          const next = links.pop();
          console.log(next.href);
          frame.window.location = next.href;
          visited.add(next.href);
          return validateLinks(frame, domain, links, visited);
        }
      })
      .then(resolve);
  });
}

describe("Notes page", () => {
  // assuming there's no other frames in the main window
  const frame = window.frames[0];

  it("should have only valid links e.g. no 404", (done) => {
    frame.location = "https://ksnabb.github.io";
    validateLinks(frame, "ksnabb.github.io").then(done);
  });
});
