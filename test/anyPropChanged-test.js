var tape = require("tape"),
    anyPropChanged = require("../dist/anyPropChanged");

tape("anyPropChanged properly detects changes in objects", function(test) {

  test.false(anyPropChanged(['a', 'b'], { a: 1 }, { a: 1 }))
  test.true(anyPropChanged(['a', 'b'], { a: 1 }, { a: 2 }))

  test.false(anyPropChanged(['a', 'b'], { a: 1, b: 1 }, { a: 1, b: 1 }))
  test.true(anyPropChanged(['a', 'b'], { a: 1, b: 1 }, { a: 1, b: 2 }))

  test.end();
});



tape("anyPropChanged properly detects changes in objects using prop paths", function(test) {

  test.false(anyPropChanged(['a.b.c'], { a: { b: { c: 1 }} },  { a: { b: { c: 1 }} }))
  test.true(anyPropChanged(['a.b.c'],  { a: { b: { c: 1 }} },  { a: { b: { c: 2 }} }))

  test.end();
});

