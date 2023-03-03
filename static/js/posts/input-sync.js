const appEvents = pubSub();
const appState = state("", appEvents);

const input = document.querySelector(".app input");
const paragraph = document.querySelector(".app p");

input.addEventListener("input", (evt) => {
  appState.setValue(evt.srcElement.value);
});

appEvents.subscribe((newValue) => {
  paragraph.textContent = newValue;
});
