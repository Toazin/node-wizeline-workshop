const createCat = (body) => {
    const name = body.name;
    const color = body.color;

    console.log("CAT NAME: ", name);
    console.log("CAT COLOR: ", color);

    return new Promise(function (accept,reject) {
        if(!name) reject("NO NAME");
        if(!color) reject("NO COLOR");
        accept({
            name: name,
            color: color
        });
    })
}


module.exports.createCat = createCat;
