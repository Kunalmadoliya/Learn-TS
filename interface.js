function abc(obj) {
    console.log(obj.name, obj.age, obj.isActive);
}
function isAdmin(ad) {
    console.log(ad.admin);
}
console.log(isAdmin({ name: "kunal", age: 12, isActive: false, admin: false }));
console.log(abc({ name: "kunal", age: 12, isActive: false }));
