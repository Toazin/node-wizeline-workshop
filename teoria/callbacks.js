function sayH(ms, cb) {
    setTimeout(function () {
        console.log("HI!");
        cb();
    }, ms);
}

function cb(){
    console.log("FINISHED");
}

sayH(5000,cb);
