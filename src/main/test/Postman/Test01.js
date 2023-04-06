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


//validation json fields in Response
pm.test("validation of fields ", ()=>{
    var jsonData = pm.response.json();
    pm.expect(jsonData.firstname).to.eql("Josh");
    pm.expect(jsonData.lastname).to.eql("Allen");
    pm.expect(jsonData.totalprice).to.eql(111);
    pm.expect(jsonData.depositpaid).to.eql(true);
});

//json schema validation
pm.test('schema is valid', function(){
    var jsonData = pm.response.json();
var schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "firstname": {
      "type": "string"
    },
    "lastname": {
      "type": "string"
    },
    "totalprice": {
      "type": "integer"
    },
    "depositpaid": {
      "type": "boolean"
    },
    "bookingdates": {
      "type": "object",
      "properties": {
        "checkin": {
          "type": "string"
        },
        "checkout": {
          "type": "string"
        }
      },
      "required": [
        "checkin",
        "checkout"
      ]
    },
    "additionalneeds": {
      "type": "string"
    }
  },
  "required": [
    "firstname",
    "lastname",
    "totalprice",
    "depositpaid",
    "bookingdates",
    "additionalneeds"
  ]
}

    pm.expect(tv4.validate(jsonData, schema)).to.be.true;
});