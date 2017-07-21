function Batman(){
    return{
        identity: 'Bruce Wayne',

        fightCrime: function () {
            console.log("Fighting Crime BEATCH! ");
        },

        goCivilian: function () {
            console.log("Attend event as: " + this.identity);
        }
    }
}

///Con function en ves de parte... yreturn lo que qiero mostrar.

function Batman2(){

    return{

    }
}

var character = Batman();

character.identity = 'LOL';
character.goCivilian();
