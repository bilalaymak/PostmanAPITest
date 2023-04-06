const assert = require('chai').assert;

// Test class
describe('MyTestClass', function() {

  // Test method
  it('should return true when the value is true', function() {
    const value = true;
    assert.isTrue(value);
  });

  // test method
  it('should return false when the value is false', function() {
    const value = false;
    assert.isFalse(value);
  });

});