// Eine Testdatei für grundlegende JavaScript-Tests

// Test 1: Testen einer Funktion, die den größten Wert aus einem Array zurückgibt
test('finds the maximum number in an array', () => {
  const getMax = (arr) => Math.max(...arr);
  expect(getMax([1, 5, 3, 9, 2])).toBe(9);
});

// Test 2: Testen einer Funktion, die prüft, ob eine Zahl gerade ist
test('checks if number is even', () => {
  const isEven = (num) => num % 2 === 0;
  expect(isEven(4)).toBe(true);
  expect(isEven(5)).toBe(false);
});

// Test 3: Testen einer Funktion, die einen String umkehrt
test('reverses a string', () => {
  const reverseString = (str) => str.split('').reverse().join('');
  expect(reverseString('hello')).toBe('olleh');
});

// Test 4: Testen einer Funktion, die das größte Element in einem Objekt findet
test('finds the maximum value in an object', () => {
  const findMaxValue = (obj) => Math.max(...Object.values(obj));
  expect(findMaxValue({ a: 1, b: 5, c: 3 })).toBe(5);
});

// Test 5: Testen, ob ein Array von Objekten nach einem bestimmten Feld sortiert ist
test('sorts an array of objects by a field', () => {
  const people = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }];
  const sortedPeople = people.sort((a, b) => a.age - b.age);
  expect(sortedPeople[0].name).toBe('Bob');
});

// Test 6: Testen einer Funktion, die die Anzahl der Vokale in einem String zählt
test('counts vowels in a string', () => {
  const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;
  expect(countVowels('hello')).toBe(2);
});

// Test 7: Testen einer Funktion, die überprüft, ob eine E-Mail-Adresse gültig ist
test('validates an email address', () => {
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  expect(isValidEmail('test@example.com')).toBe(true);
  expect(isValidEmail('invalid-email')).toBe(false);
});

// Test 8: Testen einer Funktion, die ein Objekt tief kopiert
test('deep copies an object', () => {
  const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));
  const original = { a: 1, b: { c: 2 } };
  const copy = deepCopy(original);
  copy.b.c = 3;
  expect(original.b.c).toBe(2); // Original sollte unverändert sein
});

// Test 9: Testen einer Funktion, die prüft, ob ein Array sortiert ist
test('checks if array is sorted', () => {
  const isSorted = (arr) => arr.every((val, i, arr) => !i || arr[i - 1] <= val);
  expect(isSorted([1, 2, 3, 4])).toBe(true);
  expect(isSorted([4, 3, 2, 1])).toBe(false);
});

// Test 10: Testen einer Funktion, die einen Wert aus einer Map abruft
test('gets a value from a Map', () => {
  const map = new Map();
  map.set('key1', 'value1');
  map.set('key2', 'value2');
  expect(map.get('key1')).toBe('value1');
  expect(map.get('key2')).toBe('value2');
});
