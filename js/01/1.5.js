export function compressString(string = "") {
  if (string.length < 1) return string;

  let compressedString = "";
  let previousCharacter = string[ 0 ];
  let characterCount = 1;

  for (let i = 1; i < string.length; i ++) {
    if (string[ i ] === previousCharacter) {
      characterCount += 1;
    } else {
      compressedString += `${previousCharacter}${characterCount}`;
      previousCharacter = string[ i ];
      characterCount = 1;
    }
  }

  compressedString = `${compressedString}${previousCharacter}${characterCount}`;

  return compressedString.length > string.length ? string : compressedString;
}
