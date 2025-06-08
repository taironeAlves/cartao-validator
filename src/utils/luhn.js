function luhnCheck(cardNumber) {
    const digits = cardNumber.split('').reverse().map(Number);
    const checksum = digits.reduce((sum, digit, index) => {
        if (index % 2 === 1) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        return sum + digit;
    }, 0);
    return checksum % 10 === 0;
}

module.exports = luhnCheck;