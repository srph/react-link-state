var getIn = require('./utils/getIn');
var updateIn = require('./utils/updateIn');

/**
 * Extracted the linkedState implementation to its own function (instead of a mixin)
 *
 * @params {ReactElement} ctx The component's `this`
 * @params {str} path State key to be updated
 * @return {object}
 */
module.exports = function linkState(ctx, path) {
  return {
    value: getIn(ctx.state, path),

    requestChange: function setPartialState(value) {
      ctx.setState(updateIn(
        ctx.state,
        path,
        value
      ));
    }
  };
}
