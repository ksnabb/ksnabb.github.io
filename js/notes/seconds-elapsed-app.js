function pubSub() {
  const listeners = [];
  return {
    dispatch: (event) => listeners.forEach((l) => l(event)),
    subscribe: (fun) => listeners.push(fun),
  };
}

function state(initialValue, pubsub) {
  let val = initialValue;

  function setValue(newValue) {
    val = newValue;
    pubsub.dispatch(newValue);
  }

  function getValue() {
    return val;
  }

  return {
    getValue,
    setValue,
  };
}

const appEvents = pubSub();
const appState = state(0, appEvents);

function timer() {
  appState.setValue(appState.getValue() + 1);
  setTimeout(timer, 1000);
}
setTimeout(timer, 1000);

function updateTimerView(val) {
  document.querySelector(
    ".seconds-elapsed"
  ).innerText = `seconds elapsed ${val}`;
}

appEvents.subscribe(updateTimerView);
