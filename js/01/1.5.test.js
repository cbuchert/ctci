import { assertEquals } from "../lib/test/assert.js";
import { describe } from "../lib/test/describe.js";
import { it } from "../lib/test/it.js";
import { compressString } from "./1.5.js";

describe("compressString", () => {
  it("returns an empty string when passed an empty string.", () => {
    assertEquals(compressString(), "");
    assertEquals(compressString(""), "");
  });

  it("compresses a 2 character string that repeats the same character.", () => {
    assertEquals(compressString("aa"), "a2");
  });

  it("compresses a 3 character string that repeats the same character.", () => {
    assertEquals(compressString("aaa"), "a3");
  });

  it("returns the original string if the compressed string is larger.", () => {
    assertEquals(compressString("ab"), "ab")
  })

  it("compresses more complex strings.", () => {
    assertEquals(compressString("aabb"), "a2b2");
    assertEquals(compressString("abbcccdddd"), "a1b2c3d4");
  });
});
