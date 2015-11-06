module.exports = function getIn(obj, path) {
  var stack = path.split('.');

  while ( stack.length ) {
    obj = obj[stack.shift()];
  }

  return obj;
}
