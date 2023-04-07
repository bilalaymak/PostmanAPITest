//PRE-REQUEST SCRIPTS
/*
//pre-requestScripts--->request--->response--->tests

collection level
folder level
request level




*/
console.log("prerequest script at request level");

/*
VARIBLES
----------------


SCOPE of VARIABLES
-------------------
workspace--->collections--->requests


global ==> global is the level of workspace and it access its childs(collections-requests),accessible everywhere
{{url_global}}/api/users/13

collection ==> accessible within collection
{{url_collect}}/api/users/13


environment ==> we can access in all collections, but we need to switch to particular environment
when we use environment, we can access its variables in all collections and requests
without switching to environment, we cannot use its variables
{{url_QA_env}}/api/users/13

local-->accessible only within request(specific to request)
//we can define variables(local variable) in request level just in the pre-request Script field
//we cab also define global, collection, environment within pre-request Script

//local variable
pm.variables.set("url_local","https://reqres.in/api");
//{{url_local}}/users?page=1

//global variable through prerequest script




data--> external files csv/text..


*/

//CREATING VARIABLES IN PREREQUEST SCRIPT

//we can define variables(local variable) in request level just in the pre-request Script field
//local variable
pm.variables.set("url_local","https://reqres.in/api");
//{{url_local}}/users?page=1

//global variable through prerequest script
pm.globals.set("userId_global","2");

//environment variable
pm.environment.set("userId_qa_env","2");

//collection variable
pm.collectionVariables.set("userId_collect","2");


//PRINTING VARIABLES ON THE CONSOLE

//capture the values from variables
//to print variables on the console
console.log(pm.variables.get("url_local"));
console.log(pm.globals.get("userId_global"));
console.log(pm.environment.get("userId_qa_env"));
console.log(pm.collectionVariables.get("userId_collect"));


//DELETING/REMOVING VARIABLES WITHIN THE PREREQUEST SCRIPT

//to delete a variable ==> we type our codes in test script,
//because prerequest part executes first, then test scripts executes
//we use unset() method

 //local variable
  pm.variables.unset("url_local","https://reqres.in/api");
 //{{url_local}}/users?page=1

//global variable through prerequest script
 pm.globals.unset("userId_global","2");

 //environment variable
 pm.environment.unset("userId_qa_env","2");

 //collection variable
 pm.collectionVariables.unset("userId_collection","2");








