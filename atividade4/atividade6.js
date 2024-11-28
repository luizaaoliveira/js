let idades = [16, 50, 65, 29, 56, 38, 92]

let maior18 = idades.filter( idade => idade > 18)

console.log(maior18);

idades.forEach(idade => {
    console.log(`Sua idade é: ${idade}`);
    
});