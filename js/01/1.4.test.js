import { assertEquals } from "../lib/test/assert.js";
import { describe } from "../lib/test/describe.js";
import { it } from "../lib/test/it.js";
import { urlEncodeSpaceCharacters } from "./1.4.js";

describe("urlEncodeSpaceCharacters", () => {
  it("returns an empty string when passed an empty string.", () => {
    assertEquals(urlEncodeSpaceCharacters(""), "");
    assertEquals(urlEncodeSpaceCharacters(), "");
  });

  it("returns a string with no spaces in it.", () => {
    assertEquals(urlEncodeSpaceCharacters("a"), "a");
  });

  it("url encodes a single space character.", () => {
    assertEquals(urlEncodeSpaceCharacters(" "), "%20");
  });

  it("url encodes a single space before another character.", () => {
    assertEquals(urlEncodeSpaceCharacters(" a"), "%20a");
  });

  it("url encodes spaces in a string.", () => {
    assertEquals(urlEncodeSpaceCharacters("Oh long Johnson."), "Oh%20long%20Johnson.");
  });
});
