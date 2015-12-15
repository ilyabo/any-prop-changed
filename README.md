# any-prop-changed
Utility function for checking whether object props have changed


## Installation

Add as an npm dependency to your project:

    npm install any-prop-changed --save
    

## Examples

    var anyPropChanged = require('any-prop-changed')
    
    anyPropChanged(['a', 'b'], { a: 1, b: 1 }, { a: 1, b: 1 })   // false
    anyPropChanged(['a', 'b'], { a: 1, b: 1 }, { a: 1, b: 2 })   // true
    
    anyPropChanged(['a.b.c'], { a: { b: { c: 1 }} },  { a: { b: { c: 1 }} })   // false
    anyPropChanged(['a.b.c'],  { a: { b: { c: 1 }} },  { a: { b: { c: 2 }} })  // true
