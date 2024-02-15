const { add } = require('../arithmetica');

test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('20 + 30 is equal to 50', () => {
    expect(add(20, 30)).toBe(50);
});

test('5 + 3 is equal to 8', () => {
    expect(add(5, 3)).toBe(8);
}   );
