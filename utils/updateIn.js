/**
 * Originally from:
 * https://github.com/tungd/react-catalyst/blob/master/src/catalyst/LinkedStateMixin.js
 *
 * @param {object}
 * @param {string}
 * @param {any}
 * @return {object}
 */
module.exports = function updateIn(obj, path, value) {
  var current = obj;
  var stack = path.split('.');

  while ( stack.length > 1 ) {
    current = current[stack.shift()];
  }
  current[stack.shift()] = value;

  return obj;
}
