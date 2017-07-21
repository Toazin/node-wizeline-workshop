var foo = "bar";

function bar(){
    var foo = 'baz';
    function baz(foo) {
        foo = 'bam';
        bam = 'yay';
    }
    baz();
}

console.log("BAR: ");
bar();
console.log("Foo: ", foo);
console.log("Bam: ", bam);
// baz();
// console.log(baz);
