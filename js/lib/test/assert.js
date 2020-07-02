export const assertEquals = (value, expectedValue) => {
  if (value === expectedValue) {
    console.log(`    [OK]`);
  } else {
    console.log(`    [X]  ${expectedValue} !== ${value}`);
  }
};
