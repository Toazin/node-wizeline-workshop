var myObject = function(){
//Implisit
this.implisit = "42" * 1;
//Explicit
this.explicit = Number('42');
//
this.types = {
    string_: "dude",
    number_: 42,
    boolean_: true,
    undefined_: undefined,
    null_: null
}

}




module.exports = myObject;
