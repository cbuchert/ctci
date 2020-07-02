// TODO: Implement an algorithm to determine if a string has all unique characters. 
export function hasAllUniqueCharacters(string = "") {
  const uniqueCharacters = {};

  for (let character of string) {
    if (uniqueCharacters[ character ]) {
      return false;
    }

    uniqueCharacters[ character ] = true;
  }

  return true;
}

export function hasAllUniqueCharacters_noAddtionalDataStructures(string = "") {
  for (let i = 0; i < string.length; i ++) {
    for (let j = i + 1; j < string.length; j ++) {
      if (string[ i ] === string[ j ]) {
        return false;
      }
    }
  }

  return true;
}
