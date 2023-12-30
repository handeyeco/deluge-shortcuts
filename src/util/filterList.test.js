import { splitSearch, isActionMatch, isControlMatch, isMatch } from "./filterList";
import { Control, Action, View } from "../data/syntax-constants.js";

function mockEntry(extend = {}) {
  const base = {
    name: "Mock title",
    description: "Mock description",
    steps: [
      { action: Action.PRESS, control: Control.SELECT },
      { action: Action.TURN, control: Control.SELECT },
    ],
    views: [View.SONG],
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

  describe("isActionMatch", () => {
    it("matches whole word action match", () => {
      const result = isActionMatch([{ action: "PRESS", control: "SELECT" }], "PRESS");
      expect(result).toBe(true);
    });

    it("matches in substeps", () => {
      const result = isActionMatch([{
        substeps: [{ action: "PRESS", control: "SELECT" }]
      }], "press");
      expect(result).toBe(true);
    });

    it("doesn't match partials", () => {
      const result = isActionMatch([{ action: "PRESS", control: "SELECT" }], "PRE");
      expect(result).toBe(false);
    });

    it("is case insensitive", () => {
      const result = isActionMatch([{ action: "PRESS", control: "SELECT" }], "press");
      expect(result).toBe(true);
    });
  })

  describe("isControlMatch", () => {
    it("matches whole word control match", () => {
      const result = isControlMatch([{ action: "PRESS", control: "SELECT" }], "SELECT");
      expect(result).toBe(true);
    });

    it("matches in substeps", () => {
      const result = isControlMatch([{
        substeps: [{ action: "PRESS", control: "SELECT" }]
      }], "select");
      expect(result).toBe(true);
    });

    it("doesn't match partials", () => {
      const result = isControlMatch([{ action: "PRESS", control: "SELECT" }], "SEL");
      expect(result).toBe(false);
    });

    it("is case insensitive", () => {
      const result = isControlMatch([{ action: "PRESS", control: "SELECT" }], "select");
      expect(result).toBe(true);
    });
  })

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
      const result = isMatch(mockEntry(), [
        "action:press",
      ]);
      expect(result).toBe(true);
    });

    it("returns false when control doesn't match", () => {
      const result = isMatch(mockEntry(), ["control:PARAMETER"]);
      expect(result).toBe(false);
    });

    it("returns true when control does match", () => {
      const result = isMatch(mockEntry(), [
        "control:SELECT",
      ]);
      expect(result).toBe(true);
    });

    it("returns false when views doesn't match", () => {
      const result = isMatch(mockEntry(), ["view:arranger"]);
      expect(result).toBe(false);
    });

    it("returns true when views does match", () => {
      const result = isMatch(mockEntry({ views: [View.ARRANGER] }), [
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
      const result = isMatch(mockEntry(), [
        "control:SEL",
      ]);
      expect(result).toBe(false);
    });
  });
});
