var bottleMaker = /** @class */ (function () {
    function bottleMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return bottleMaker;
}());
var b1 = new bottleMaker("cello", 1200);
console.log(b1);
