const validateCardBrand = require('./cardBrands');

describe('Validação de bandeiras de cartão', () => {
    test('Visa 16 dígitos', () => {
        expect(validateCardBrand('4111111111111111')).toBe('Visa');
    });

    test('Visa 13 dígitos', () => {
        expect(validateCardBrand('4222222222222')).toBe('Visa');
    });

    test('Visa inválido (14 dígitos)', () => {
        expect(validateCardBrand('41111111111111')).toBe('Número de cartão Visa inválido. Deve ter 13 ou 16 dígitos.');
    });

    test('Mastercard', () => {
        expect(validateCardBrand('5105105105105100')).toBe('Mastercard');
    });

    test('American Express', () => {
        expect(validateCardBrand('371449635398431')).toBe('American Express');
    });

    test('Diners Club', () => {
        expect(validateCardBrand('30569309025904')).toBe('Diners Club');
    });

    test('Discover', () => {
        expect(validateCardBrand('6011111111111117')).toBe('Discover');
    });

    test('enRoute', () => {
        expect(validateCardBrand('201400000000009')).toBe('enRoute');
    });

    test('JCB', () => {
        expect(validateCardBrand('3530111333300000')).toBe('JCB');
    });

    test('Voyager', () => {
        expect(validateCardBrand('869940000000000')).toBe('Voyager');
    });

    test('Hipercard', () => {
        expect(validateCardBrand('6062825624254001')).toBe('Hipercard');
    });

    test('Aura', () => {
        expect(validateCardBrand('5078601870000127980')).toBe('Aura');
    });

    test('Cartão inválido', () => {
        expect(validateCardBrand('1234567890123456')).toBe('Invalid card number or brand.');
    });
});