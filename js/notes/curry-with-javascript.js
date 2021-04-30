function curry(f) {
  return function curried(...args) {
    if (args.length >= f.length) {
      return f.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function testCurry() {
  const adder = (a, b) => a + b;

  const curried = curry(adder);
  const add1 = curried(1);
  const add2 = curried(2);

  console.assert(
    add1(2) === add2(1),
    "curried add1(2) and add2(1) did not return the same value"
  );
}

testCurry();
