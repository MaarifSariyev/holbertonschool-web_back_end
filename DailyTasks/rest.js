function sum(...numbers) {
    if (numbers.every(num => typeof num === 'number')) {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    } else {
        return NaN;
    }
}
