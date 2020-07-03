export function stringsArePermutations(string1, string2) {
  if (string1.length !== string2.length) return false;

  const string1CharacterMap = buildCharacterMap(string1);
  const string2CharacterMap = buildCharacterMap(string2);

  return characterMapsMatch(string1CharacterMap, string2CharacterMap);
}

export function buildCharacterMap(string) {
  const characterMap = {};

  for (const character of string) {
    if (character === " ") continue;
    if (!characterMap.hasOwnProperty(character)) characterMap[ character ] = 1;
    else characterMap[ character ] += 1;
  }

  return characterMap;
}

export function characterMapsMatch(characterMap1, characterMap2) {
  for (const character in characterMap1) {
    if (characterMap1[ character ] !== characterMap2[ character ]) return false;
  }

  return true;
}
