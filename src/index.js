const validateCardBrand = require('./validators/cardBrands');

const cardNumber = process.argv[2];

if (!cardNumber) {
    console.log('Por favor, forneça um número de cartão de crédito.');
    process.exit(1);
}

const brand = validateCardBrand(cardNumber);

if (brand) {
    console.log(`A bandeira do cartão é: ${brand}`);
} else {
    console.log('Número de cartão inválido ou bandeira não reconhecida.');
}
