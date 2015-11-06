module.exports = function updateIn(obj, path, value) {
  var current = obj;
  var stack = path.split('.');

  while ( stack.length > 1 ) {
    current = current[stack.shift()];
  }
  current[stack.shift()] = value;

  return obj;
}
