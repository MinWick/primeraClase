console.log("filtro");
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numeroMenor = function (numero) {
    var menor = numeros.filter(function (item) { return item < numero; });
    return menor;
};
console.log(numeroMenor(6));
