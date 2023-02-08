//7)a_
var num1=30
var num2=500
//7)b_
function suma(){
    var result=num1+num2
    console.log(`La suma de las dos variables es = ${result}`);
}
suma();
//7)c_
//Piedra, papel o Tijeras
var piedra=1
var papel=2
var tijera=3
    function juego(yo, cpu) {
        if ((yo==tijera && cpu==papel)||(yo==piedra && cpu==tijera)||(yo==papel && cpu==piedra)){
            console.log ("tu ganaste")
        }else if (yo==cpu) {
            console.log("Empate")
        }else{
            console.log("Perdiste")
        }
    }
juego(piedra, tijera)