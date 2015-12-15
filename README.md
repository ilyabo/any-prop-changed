# any-prop-changed
Utility function for checking whether object props have changed


## Examples

    var anyPropChanged = require('any-prop-changed')
    
    anyPropChanged(['a', 'b'], { a: 1, b: 1 }, { a: 1, b: 1 })   // false
    anyPropChanged(['a', 'b'], { a: 1, b: 1 }, { a: 1, b: 2 })   // true
    
    anyPropChanged(['a.b.c'], { a: { b: { c: 1 }} },  { a: { b: { c: 1 }} })   // false
    anyPropChanged(['a.b.c'],  { a: { b: { c: 1 }} },  { a: { b: { c: 2 }} })  // true
