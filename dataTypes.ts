// DATA TYPES

// 1. Primitive Datatype

let a = 15;
let b = true;

// 2. Array

let arr = [123, 123];

// 3. tuples

let arr1: [string, number] = ["kunal", 22];

// 4.Enums

enum Users {
  ADMIN = "admin",
  Users = "user",
}

console.log(Users.Users);

enum StatusCodes {
  ERROR = "404 NOT FOUND",
  INVALID = "500 Invalid",
}

console.log(StatusCodes.ERROR);

// ANY , UNKNOWN ,  VOID  , NULL , undefined , NEVER

// ANY
let ak;
ak = 5;
ak = false;

//UNKNOWN

let ab: unknown;

ab = 15;
ab = "kunal";

if (typeof ab == "string") ab.toLocaleLowerCase();

// void

function createUser(): void {
  console.log("hello");
}

function createNumber(): number {
  return 5;
}
createNumber();
createUser();

// NULL

let abc: string | null;

(abc = "kunal"), (abc = null);
