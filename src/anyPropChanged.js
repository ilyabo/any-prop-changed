"use strict";

/**
 * Performs a comparison of the given props in objA and objB.
 * Returns true if at least one prop from the list changed.
 *
 * @param objA
 * @param objB
 * @param {Array} props Names of the object properties to check
 * @returns {boolean}
 */
function anyPropChanged(props, objA, objB) {
  if (arguments.length === 2) {
    let [ objA, objB ] = [ props, objA ];
    return hasChanged(objA, objB);
  }
  return hasChanged(objA, objB, props);
}




anyPropChanged.debug = function(objA, objB) {
  if (!anyPropChanged(objA, objB)) {
    console.log('No props changed');
    return false;
  }

  var changes;
  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    changes = 'object types';
  } else {
    var changedProps = {};
    for (let prop of Object.keys(objA).concat(Object.keys(objB))) {
      if (objA[prop] !== objB[prop]) changedProps[prop] = true;
    }
    changes = Object.keys(changedProps);
  }
  console.log('Some props changed: '+changes);
  return true;
}


function get(obj, propPath) {
  var i, props = propPath.split('.'), val = obj;
  for (i = 0; i < props.length; i++) {
    val = val[props[i]]
    if (val == null) return val;
  }
  return val
}


// This is based on
// https://github.com/gaearon/react-pure-render/blob/master/src/shallowEqual.js

function hasChanged(objA, objB, propPaths) {
  if (objA === objB) {
    return false;
  }

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return true;
  }

  if (propPaths) {
    for (var i = 0; i < propPaths.length; i++) {
      if (get(objA, propPaths[i]) !== get(objB, propPaths[i])) {
        return true;
      }
    }

  } else {
    // no props to check specified
    var propsA = Object.keys(objA);
    var propsB = Object.keys(objB);
    if (propsA.length !== propsB.length) {
      return true;
    }

    // Test for A's keys different from B.
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var i = 0; i < propsA.length; i++) {
      if (!bHasOwnProperty(propsA[i]) || objA[propsA[i]] !== objB[propsA[i]]) {
        return true;
      }
    }
  }


  return false;
}



module.exports = anyPropChanged;