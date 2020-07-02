import { assertEquals } from "../lib/test/assert.js";
import { describe } from "../lib/test/describe.js";
import { it } from "../lib/test/it.js";
import { reverseString, reverseStringWithArray } from "./1.2.js";

const testSuite = (reversedString) => {
  describe("reverseString", () => {
    it("returns an empty string when passed nothing.", () => {
      assertEquals(reversedString(), "");
      assertEquals(reversedString(""), "");
    });

    it("returns a single character when passed a single character.", () => {
      assertEquals(reversedString("a"), "a");
    });

    it("returns the reverse of a 2 or more characters.", () => {
      assertEquals(reversedString("ab"), "ba");
      assertEquals(reversedString("abc"), "cba");
      assertEquals(reversedString("Dr. Awkward"), "drawkwA .rD");
    });
  });
};

testSuite(reverseString);
testSuite(reverseStringWithArray);
