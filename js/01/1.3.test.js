import { assertEquals } from "../lib/test/assert.js";
import { describe } from "../lib/test/describe.js";
import { it } from "../lib/test/it.js";
import { buildCharacterMap, characterMapsMatch, stringsArePermutations } from "./1.3.js";

describe("stringsArePermutations", () => {
  it("returns true when passed empty strings.", () => {
    assertEquals(stringsArePermutations("", ""), true);
  });

  it("returns true when passed identical single character strings.", () => {
    assertEquals(stringsArePermutations("a", "a"), true);
  });

  it("returns false when passed single character strings with different characters.", () => {
    assertEquals(stringsArePermutations("a", "b"), false);
  });

  it("returns false when passed strings of different lengths.", () => {
    assertEquals(stringsArePermutations("a", "ab"), false);
  });

  it("returns true when passed mirrored two character strings.", () => {
    assertEquals(stringsArePermutations("ab", "ba"), true);
  });

  it("returns true when passed complex permutation strings.", () => {
    assertEquals(stringsArePermutations("the morse code", "here come dots"), true);
    assertEquals(stringsArePermutations("debit card", "bad credit"), true);
    assertEquals(stringsArePermutations("eleven plus two", "twelve plus one"), true);
    assertEquals(stringsArePermutations("o draconian devil", "leonardo da vinci"), true);
  });
});

describe("buildCharacterMap", () => {
  it("returns an object with a key and value of 1 for a string with a single character.", () => {
    const characterMap = buildCharacterMap("a");

    assertEquals(characterMap.a, 1);
  });

  it("returns an object with a key and value of 2 for a string with two of the same character.", () => {
    const characterMap = buildCharacterMap("aa");

    assertEquals(characterMap.a, 2);
  });

  it("returns an object with two keys and values a string with two different characters.", () => {
    const characterMap = buildCharacterMap("ab");

    assertEquals(characterMap.a, 1);
    assertEquals(characterMap.b, 1);
  });

  it("ignores spaces.", () => {
    const characterMap = buildCharacterMap("a b");

    assertEquals(characterMap.hasOwnProperty(" "), false)
  })
});

describe("characterMapsMatch", () => {
  it("returns true when matching identical maps with a single character.", () => {
    const characterMap = { a: 1 };

    assertEquals(characterMapsMatch(characterMap, characterMap), true);
  });

  it("returns false when matching single character maps with different characters.", () => {
    const characterMap1 = { a: 1 };
    const characterMap2 = { b: 1 };

    assertEquals(characterMapsMatch(characterMap1, characterMap2), false);
  });

  it("returns false when matching single character maps with different values.", () => {
    const characterMap1 = { a: 1 };
    const characterMap2 = { a: 2 };

    assertEquals(characterMapsMatch(characterMap1, characterMap2), false);
  });
});
