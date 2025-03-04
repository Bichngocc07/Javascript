    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Không hợp lệ";
    }
    if (b === 0) return 1;

    let result = 1;
    let isNegative = b < 0;
    b = Math.abs(b);

    for (let i = 0; i < b; i++) {
        result *= a;
    }

    if (isNegative) result = 1 / result;

    return result;