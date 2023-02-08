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
//7)d_
var MarcasDeAutos=[
    {marca: "Nissan", model: "Frontier"},
    {marca: "Ferrari", model: "488"},
    {marca: "Ford", model: "Falcon"},
    {marca: "Chevrolet", model: "Super Sport 250"},
    {marca: "Peugeot", model:"504"}
    ];
    var MarcaModelo=MarcasDeAutos.map(function(MarcaYmodelo){
        console.log(`Marca: ${MarcaYmodelo.marca} Modelo: ${MarcaYmodelo.model}`)
    })

function LlamarMarca_o_Modelo(marcaYmodelo) {
    if(marcaYmodelo=="Marcas"){
        var marcas=MarcasDeAutos.map(function(laMarca){
            return laMarca.marca});
            return marcas
    } else if(marcaYmodelo=="Modelos"){
        var model=MarcasDeAutos.map(function(modelo){
            return modelo.model})
            return model
    } else if(marcaYmodelo=="Marca y Modelo") {
    return MarcaModelo
    }
}
LlamarMarca_o_Modelo("Marca y Modelo");
LlamarMarca_o_Modelo("Marcas");
LlamarMarca_o_Modelo("Modelos");