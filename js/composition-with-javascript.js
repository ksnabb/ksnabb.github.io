;function compose(f1, f2) {
  return function (a) {
    return f2(f1(a));
  }
}

function identity(a) {
  return a;
}

function testComposition() {
  function test1(a) {return a * 2};
  function test2(b) {return b + 2};
  const composedFunction = compose(test1, test2);
  const result1 = test1(2);
  const result2 = test2(result1);
  const composeResult = composedFunction(2);
  console.assert(result2 === composeResult, "composed function should return the same result that the original functions would returl (A -> C)") 
}

function identityTest() {
  function test1(a) {return a * 2};
  const ifn = compose(test1, identity);
  const fni = compose(identity, test1);
  console.assert(test1(2) === ifn(2), "identity test failed");
  console.assert(test1(2) === fni(2), "identity test failed");
}

testComposition();
identityTest();