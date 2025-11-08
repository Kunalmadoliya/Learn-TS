function abc<T>(val :T){
console.log(val);

}

abc("kunal")


interface Users <T> {
    name : string ,
    age : number ,
    key : T
}

function ab ( obj : Users <string>){

}
ab()