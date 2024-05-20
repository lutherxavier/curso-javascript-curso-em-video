let valores = [9, 4, 5, 3, 2, 6, 4, 2]
for (pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let num = [7, 7, 4, 2, 3, 3, 9, 9]
for (let posicao in num) {
    console.log(`Valores com for in: ${num[posicao]}`)
}