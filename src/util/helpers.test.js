import { toggleSubstring } from "./helpers";

describe("toggleSubstring", () => {
  it("runs", () => {
    const result = toggleSubstring("test", "");
    expect(result).toBe("test");
  });

  it("adds substring when not in string", () => {
    const result = toggleSubstring("test", "cool");
    expect(result).toBe("cool test");
  });

  it("removes substring when in string", () => {
    const result = toggleSubstring("cool test", "cool");
    expect(result).toBe("test");
  });

  it("removes multile instances of a sub string", () => {
    const result = toggleSubstring("cool test cool", "cool");
    expect(result).toBe("test");
  });
});
