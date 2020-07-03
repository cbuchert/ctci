import { assertEquals } from "../lib/test/assert.js";
import { describe } from "../lib/test/describe.js";
import { it } from "../lib/test/it.js";
import { urlEncodeSpaceCharacters, urlEncodeSpaceCharacters_withArray } from "./1.4.js";

const testSuite = (urlEncode) => {
  describe("urlEncodeSpaceCharacters", () => {
    it("returns an empty string when passed an empty string.", () => {
      assertEquals(urlEncode(""), "");
      assertEquals(urlEncode(), "");
    });

    it("returns a string with no spaces in it.", () => {
      assertEquals(urlEncode("a"), "a");
    });

    it("url encodes a single space character.", () => {
      assertEquals(urlEncode(" "), "%20");
    });

    it("url encodes a single space before another character.", () => {
      assertEquals(urlEncode(" a"), "%20a");
    });

    it("url encodes spaces in a string.", () => {
      assertEquals(urlEncode("Oh long Johnson."), "Oh%20long%20Johnson.");
    });
  });
};

testSuite(urlEncodeSpaceCharacters);
testSuite(urlEncodeSpaceCharacters_withArray);
