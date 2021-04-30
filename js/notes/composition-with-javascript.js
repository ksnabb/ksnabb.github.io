// COMPOSE

function compose(f1, f2) {
  return function (a) {
    return f2(f1(a));
  };
}

// VARIADIC COMPOSE
const variadicCompose = (...fns) =>
  fns.reduce((g, f) => (...args) => f(g(...args)));

function identity(a) {
  return a;
}

function testComposition(composeFunction) {
  function test1(a) {
    return a * 2;
  }
  function test2(b) {
    return b + 2;
  }
  const composedFunction = composeFunction(test1, test2);
  const result1 = test1(2);
  const result2 = test2(result1);
  const composeResult = composedFunction(2);
  console.assert(
    result2 === composeResult,
    "composed function should return the same result that the original functions would returl (A -> C)"
  );
}

function identityTest(composeFunction) {
  function test1(a) {
    return a * 2;
  }
  const ifn = composeFunction(test1, identity);
  const fni = composeFunction(identity, test1);
  console.assert(test1(2) === ifn(2), "identity test failed");
  console.assert(test1(2) === fni(2), "identity test failed");
}

testComposition(compose);
identityTest(compose);
testComposition(variadicCompose);
identityTest(variadicCompose);
