const multiply = require('./math');

test('multiply 2 and 3 should return 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('multiply -1 and 5 should return -5', () => {
    expect(multiply(-1, 5)).toBe(-5);
});

test('multiply 0 and 10 should return 0', () => {
    expect(multiply(0, 10)).toBe(0);
});