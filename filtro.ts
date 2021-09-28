console.log("filtro")

const numeros: number[] = [1,2,3,4,5,6,7,8,9,10]

const numeroMenor=(numero: number) => {
    const menor = numeros.filter (item => item< numero)

    return menor
}
console.log(numeroMenor(6))

