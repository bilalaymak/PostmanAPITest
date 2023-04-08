const assert = require('chai').assert;

Postman generally use Chai Assertion library (javascript framework)

pm.test("Test Name", function ()   //normal function
{
    //assertion;
}
);

pm.test("Test Name", () =>   //arrow function  //most popular function
{
   //assertion;
}
);

GET

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

POST

pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201, 202]);
});

DELETE

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

to negative test

pm.test("Status code is 404", function () {
    pm.response.to.have.status(404);
});

//status code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

//get request
pm.test("Successful Get request", () =>{
    pm.expect(pm.response.code).to.be.oneOf([200,201]);
});

//testing headers presence
pm.test("Content-Type header is present", () => {
    pm.response.to.have.header("Content-Type");
});

//content type
pm.test("Content-Type header is application/json", () => {
    pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json; charset=utf-8');
});

//time
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

//RESPONSE BODY

const jsonData = pm.response.json();
pm.test("test data type of the response", () =>{
    pm.expect(jsonData).to.be.an("object");
    pm.expect(jsonData.id).to.be.an("number");
    pm.expect(jsonData.name).to.be.an("string");
    pm.expect(jsonData.describtion).to.be.an("object");
    pm.expect(jsonData.price).to.be.an("number");
});

//array properties
pm.test("test array properties", () =>{
    pm.expect(jsonData.courses).to.include("Java");
    pm.expect(jsonData.courses).to.have.members("Java","Selenium","API");
})


//status code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

//get request
pm.test("Successful Get request", () =>{
    pm.expect(pm.response.code).to.be.oneOf([200,201]);
});

//testing headers presence
pm.test("Content-Type header is present", () => {
    pm.response.to.have.header("Content-Type");
});

//content type
pm.test("Content-Type header is application/json", () => {
    pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json; charset=utf-8');
});

//content length
pm.test("Content-Length header is application/json", () => {
    pm.expect(pm.response.headers.get('Content-length')).to.eql('178');
});

//time
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(400);
});

//RESPONSE BODY

const jsonData = pm.response.json();
pm.test("test data type of the response", () =>{
    pm.expect(jsonData).to.be.an("object");
     pm.expect(jsonData.firstname).to.be.a("string");
    pm.expect(jsonData.lastname).to.be.a("string");
    pm.expect(jsonData.totalprice).to.be.a("number");
    pm.expect(jsonData.depositpaid).to.be.an("boolean");
    pm.expect(jsonData.bookingdates).to.be.a("object");
});

//array properties
pm.test("test array properties", () =>{
    pm.expect(jsonData.courses).to.include("Jane");
    pm.expect(jsonData.courses).to.have.members("Doe",111,true);
})

//cookies
pm.test("Cookie 'language' is present", () => {
    pm.expect(pm.cookies.has('currency')).to.be.true;
});

//cookies
pm.test("Cookie 'language' has values", () => {
    pm.expect(pm.cookies.get('language')).to.eql('en-gb');
});

const cookieJar = pm.cookies.jar();

// create a cookie
cookieJar.set(URL, "cookie name", "cookie value", callback(error, cookie));

// create a PostmanCookie
cookieJar.set(URL, { name: "cookie name", value: "cookie value", httpOnly: true }, callback (error, cookie));

// get the created cookie
cookieJar.get(URL, "cookie name", callback(error, cookie));

// Delete the created cookie
cookieJar.unset(URL , "cookie name", callback (error));

// delete the set cookies
cookieJar.clear(URL, callback (error));

//Deleting and then setting cookies in sequence
cookieJar.clear(URL, (error) => {
    jar.set(URL, "cookie name", "cookie value", callback(error, cookie));
});


//access a variable at any scope including local
pm.variables.get("variable_key");
//access a global variable
pm.globals.get("variable_key");
//access a collection variable
pm.collectionVariables.get("variable_key");
//access an environment variable
pm.environment.get("variable_key");


//to create automatic id
const { v4: uuidv4 } = require('uuid');
const jsonData = {
  id: uuidv4(),
  name: 'John Doe',
  email: 'johndoe@example.com'
};








