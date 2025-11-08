// DATA TYPES
// 1. Primitive Datatype
var a = 15;
var b = true;
// 2. Array
var arr = [123, 123];
// 3. tuples
var arr1 = ["kunal", 22];
// 4.Enums
var Users;
(function (Users) {
    Users["ADMIN"] = "admin";
    Users["Users"] = "user";
})(Users || (Users = {}));
console.log(Users.Users);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ERROR"] = "404 NOT FOUND";
    StatusCodes["INVALID"] = "500 Invalid";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.ERROR);
// ANY , UNKNOWN ,  VOID  , NULL , undefined , NEVER
// ANY
var ak;
ak = 5;
ak = false;
//UNKNOWN
var ab;
ab = 15;
ab = "kunal";
if (typeof ab == "string")
    ab.toLocaleLowerCase();
// void
function createUser() {
    console.log("hello");
}
function createNumber() {
    return 5;
}
createNumber();
createUser();
// NULL
var abc;
(abc = "kunal"), (abc = null);
