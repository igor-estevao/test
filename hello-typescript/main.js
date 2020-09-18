var minhaVar = "minha variável";
function minhafunc(x, y) {
    return x + y;
}
;
var numeros = [1, 2, 3];
//arrow functions serve para abstrair função
//exemplo:
numeros.map(function (valor) {
    return valor * 2;
});
//com o arrow functions
numeros.map(function (valor) { return valor * 2; }); //ES2015
