function makeAdder(x){
    function adder(y) {
        return x + y;
    }
    return adder;
}

var adderByTwo = makeAdder(2);
console.log(adderByTwo(2));
console.log(adderByTwo(10));
