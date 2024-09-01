// Beispiel für eine einfache Funktion, die du testen möchtest
const sum = (a, b) => a + b;

// Testfälle
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Weitere Tests hinzufügen, um mindestens 10 Tests zu erreichen
test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('adds -1 + 1 to equal 0', () => {
  expect(sum(-1, 1)).toBe(0);
});

// Füge hier weitere Tests hinzu, um die Mindestanzahl zu erreichen
