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

//validation json fields in Response
pm.test("validation of fields ", ()=>{
    var jsonData = pm.response.json();
    pm.expect(jsonData.firstname).to.eql("John");
    pm.expect(jsonData.lastname).to.eql("Smith");
    pm.expect(jsonData.totalprice).to.eql(111);
    pm.expect(jsonData.depositpaid).to.eql(true);
});