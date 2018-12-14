/* do all the reagent home page examples with pure javascript.

make state and pubsub internal, abstract them away
make state be any value
*/

function pubSub() {
  const listeners = [];
  return {
    dispatch: (event) => listeners.forEach((l) => l(event)),
    subscribe: (fun) => listeners.push(fun)
  }
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
    setValue
  }
}

const button = document.querySelector('.app button');
const showState = document.querySelector('.app p');
const appEvents = pubSub();
const appState = state(0, appEvents);

button.addEventListener('click', () => {
  appState.setValue(appState.getValue() + 1);
});

appEvents.subscribe((newValue) => {
  showState.innerText = `The number is now ${newValue}`
});
