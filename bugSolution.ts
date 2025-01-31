function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseInt(a, 10);
  const numB = typeof b === 'number' ? b : parseInt(b, 10);
  return numA + numB;
}

const result1 = add(10, 5); // Correct
const result2 = addSafe("10", 5); //Correct, handles string inputs
const result3 = addSafe(10, "5"); //Correct, handles string inputs
const result4 = addSafe("hello", "5"); //Returns NaN if non-numeric strings are passed.  Additional checks might be needed for robustness. 