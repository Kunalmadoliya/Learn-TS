// interface 

interface User {
  name: string;
  age: number;
  isActive: boolean;
  gender?: string;
}
interface User {
    password ?: string
}

function abc(obj: User) {
  console.log(obj.name, obj.age, obj.isActive);
}

interface Admin extends User {
  admin: boolean;
}

function isAdmin(ad: Admin) {
  console.log(ad.admin);
}

console.log(isAdmin({name: "kunal", age: 12, isActive: false, admin: false}));

console.log(abc({name: "kunal", age: 12, isActive: false}));


// type Aliases


type Value = string | number | null
let a : Value