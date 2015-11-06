var expect = require('chai').expect;
var updateIn = require('../utils/updateIn');

describe('updateIn', function() {
  it('should work', function() {
    var obj = { yolo: { please: { swag: true } } };
    var updated = updateIn(obj, 'yolo.please.swag', false);

    expect(obj.yolo.please.swag).to.be.false;
    expect(obj).to.eql(updated);
  });
});
