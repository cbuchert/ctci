export function urlEncodeSpaceCharacters(string = "") {
  let urlEncodedString = "";

  for (const character of string) {
    if (character === " ") urlEncodedString += "%20";
    else urlEncodedString += character;
  }

  return urlEncodedString;
}

export function urlEncodeSpaceCharacters_withArray(string = "") {
  return [ ...string ].map(character => character === " " ? "%20" : character).join("");
}
