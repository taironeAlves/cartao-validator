function validateCardBrand(cardNumber) {
    const cardPatterns = {
        'Visa': /^4[0-9]{12}(?:[0-9]{3})?$/, // 13 ou 16 dígitos
        'Mastercard': /^5[1-5][0-9]{14}$/,
        'American Express': /^3[47][0-9]{13}$/,
        'Diners Club': /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        'Discover': /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        'enRoute': /^(?:2(?:014|149)[0-9]{11})$/,
        'JCB': /^(?:2131|1800|35\d{3})\d{11}$/,
        'Voyager': /^8(0[0-9]{3}|[1-9][0-9]{3})[0-9]{10}$/,
        'Hipercard': /^(606282|3841[0-9]{15}|637095[0-9]{13})$/,
        'Aura': /^(50[0-9]{14,17}|56[0-9]{14,17}|57[0-9]{14,17}|58[0-9]{14,17})$/
    };

    for (const [brand, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) {
            if (brand === 'Visa' && !(cardNumber.length === 13 || cardNumber.length === 16)) {
                return 'Número de cartão Visa inválido. Deve ter 13 ou 16 dígitos.';
            }
            return `${brand}`;
        }
    }
    return 'Invalid card number or brand.';
}

module.exports = validateCardBrand;