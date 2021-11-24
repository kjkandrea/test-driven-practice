function banana() {
  return ('b' + 'a' + + 'a' + 'a').toLowerCase();
}

test('banana is banana', () => {
  expect(banana()).toBe('banana');
});