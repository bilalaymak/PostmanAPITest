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


local
data


*/
