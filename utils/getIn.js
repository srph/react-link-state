/**
 * Originally from:
 * https://github.com/tungd/react-catalyst/blob/master/src/catalyst/LinkedStateMixin.js
 *
 * @param {object}
 * @param {string}
 * @return {object}
 */
module.exports = function getIn(obj, path) {
  var stack = path.split('.');

  while ( stack.length ) {
    obj = obj[stack.shift()];
  }

  return obj;
}
