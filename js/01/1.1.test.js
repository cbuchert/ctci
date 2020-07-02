import { assertEquals } from "../lib/test/assert.js";
import { describe } from "../lib/test/describe.js";
import { it } from "../lib/test/it.js";
import { hasAllUniqueCharacters, hasAllUniqueCharacters_noAddtionalDataStructures } from "./1.1.js";

const testSuite = (allCharactersAreUnique) => {
  describe("hasAllUniqueCharacters_noAdditionalDataStructures", () => {
    it("returns true when passed an empty string.", () => {
      assertEquals(allCharactersAreUnique(), true);
      assertEquals(allCharactersAreUnique(""), true);
    });

    it("returns true when passed a single character.", () => {
      assertEquals(allCharactersAreUnique("a"), true);
    });

    it("returns false when passed two of the same characters.", () => {
      assertEquals(allCharactersAreUnique("aa"), false);
    });

    it("returns true when passed a string with multiple unique characters.", () => {
      assertEquals(allCharactersAreUnique("ab"), true);
      assertEquals(allCharactersAreUnique("abc"), true);
      assertEquals(allCharactersAreUnique("abcd"), true);
      assertEquals(allCharactersAreUnique("abcde"), true);
      assertEquals(allCharactersAreUnique("abcdef"), true);
    });

    it("returns false when passed a string with multiple duplicate characters.", () => {
      assertEquals(allCharactersAreUnique("abb"), false);
      assertEquals(allCharactersAreUnique("abbc"), false);
      assertEquals(allCharactersAreUnique("abbcd"), false);
    });
  });
};

testSuite(hasAllUniqueCharacters);
testSuite(hasAllUniqueCharacters_noAddtionalDataStructures);
