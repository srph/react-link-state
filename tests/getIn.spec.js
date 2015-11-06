var expect = require('chai').expect;
var getIn = require('../utils/getIn');

describe('getIn', function() {
  it('should work', function() {
    var obj = { yolo: { please: { swag: true } } };
    var value = getIn(obj, 'yolo.please.swag');

    expect(value).to.be.true;
  });
});
