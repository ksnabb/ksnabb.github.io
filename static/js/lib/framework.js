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
