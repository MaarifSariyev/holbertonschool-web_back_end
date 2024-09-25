const range = {
    start: 1,
    end: 5,
    [Symbol.iterator]() {
        let current = this.start;
        const last = this.end;

        return {
            next() {
                if (current <= last) {
                    return { value: current++, done: false };
                } else {
                    current = range.start;
                    return { value: current++, done: false };
                }
            }
        };
    }
};

for (let value of range) {
    console.log(value);
    if (value === range.end) break;
}

const iterator = range[Symbol.iterator]();
let count = 0;

while (count < 10) {
    const result = iterator.next();
    console.log(result.value);
    count++;
}




