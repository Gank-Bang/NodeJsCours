import { Add, Substract, Multiply } from "./calc.mjs"


test('adds 1 + 1 to equal 2', () => {
    expect(Add(1, 1)).toBe(2);
});

test('adds 1 - 1 to equal 0', () => {
    expect(Substract(1, 1)).toBe(0);
});

test('adds 1 + 1 to equal 1', () => {
    expect(Multiply(1, 1)).toBe(1);
});
