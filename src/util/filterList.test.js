import { splitSearch, isCommandMatch, isMatch } from "./filterList";

function mockEntry(extend = {}) {
  const base = {
    title: "Mock title",
    description: "Mock description",
    command: "press(SELECT) turn(SELECT)",
    views: ["song"],
  };
  return { ...base, ...extend };
}

describe("filterList", () => {
  describe("splitSearch", () => {
    it("runs", () => {
      const result = splitSearch("test");
      expect(result).toEqual(["test"]);
    });

    it("splits word by spaces", () => {
      const result = splitSearch("split test");
      expect(result).toEqual(["split", "test"]);
    });

    it("doesn't split text in quotes", () => {
      const result = splitSearch(`"split test" quotes`);
      expect(result).toEqual(["split test", "quotes"]);
    });

    it("doesn't mess with special commands", () => {
      const result = splitSearch(
        "action:press control:GRID_LIT view:Song test"
      );
      expect(result).toEqual([
        "action:press",
        "control:GRID_LIT",
        "view:Song",
        "test",
      ]);
    });

    it("doesn't explode as we're typing quotes", () => {
      const result = splitSearch(`"`);
      expect(result).toEqual([]);
    });
  });

  describe("isCommandMatch", () => {
    it("matches whole word action match", () => {
      const result = isCommandMatch("press(SELECT)", "press");
      expect(result).toBe(true);
    });

    it("matches whole word control match", () => {
      const result = isCommandMatch("press(SELECT)", "SELECT");
      expect(result).toBe(true);
    });

    it("doesn't match partials", () => {
      const result = isCommandMatch("press(SELECT)", "SEL");
      expect(result).toBe(false);
    });

    it("is case insensitive", () => {
      const result = isCommandMatch("press(SELECT)", "select");
      expect(result).toBe(true);
    });
  });

  describe("isMatch", () => {
    it("runs", () => {
      const result = isMatch(mockEntry(), []);
      expect(result).toBe(true);
    });

    it("returns false when action doesn't match", () => {
      const result = isMatch(mockEntry(), ["action:hold"]);
      expect(result).toBe(false);
    });

    it("returns true when action does match", () => {
      const result = isMatch(mockEntry({ command: "press(SELECT)" }), [
        "action:press",
      ]);
      expect(result).toBe(true);
    });

    it("returns false when control doesn't match", () => {
      const result = isMatch(mockEntry(), ["control:PARAMETER"]);
      expect(result).toBe(false);
    });

    it("returns true when control does match", () => {
      const result = isMatch(mockEntry({ command: "press(SELECT)" }), [
        "control:SELECT",
      ]);
      expect(result).toBe(true);
    });

    it("returns false when views doesn't match", () => {
      const result = isMatch(mockEntry(), ["view:arranger"]);
      expect(result).toBe(false);
    });

    it("returns true when views does match", () => {
      const result = isMatch(mockEntry({ views: ["arranger"] }), [
        "view:arranger",
      ]);
      expect(result).toBe(true);
    });

    it("returns false when text doesn't match", () => {
      const result = isMatch(mockEntry(), ["weirdtext"]);
      expect(result).toBe(false);
    });

    it("returns true when text does match", () => {
      const result = isMatch(mockEntry(), ["Mock"]);
      expect(result).toBe(true);
    });

    it("returns true when text in title matches", () => {
      const result = isMatch(mockEntry(), ["title"]);
      expect(result).toBe(true);
    });

    it("returns true when text in description matches", () => {
      const result = isMatch(mockEntry(), ["description"]);
      expect(result).toBe(true);
    });

    it("doesn't partially match command terms", () => {
      const result = isMatch(mockEntry({ command: "control:SELECT" }), [
        "control:SEL",
      ]);
      expect(result).toBe(false);
    });
  });
});
