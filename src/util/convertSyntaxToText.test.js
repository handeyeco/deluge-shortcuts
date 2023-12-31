import convertSyntaxToText from "./convertSyntaxToText.js"
import { Control, Action } from "../data/syntax-constants.js";

const simple = [{action: Action.PRESS, control: Control.MIDI }]
const combo = [
  {action: Action.HOLD, control: Control.SHIFT },
  "AND",
  {action: Action.PRESS, control: Control.MIDI },
]
const complex = [
  {action: Action.HOLD, control: Control.SHIFT },
  "AND",
  {action: Action.PRESS, control: Control.MIDI },
  {action: Action.TURN, control: Control.SELECT },
  {action: Action.PRESS, control: Control.SELECT },
]

describe("convertSyntaxToText", () => {
  it("handles simple commands", () => {
    const result = convertSyntaxToText(simple);
    expect(result).toBe("Press the MIDI button");
  });

  it("handles combo commands", () => {
    const result = convertSyntaxToText(combo);
    expect(result).toBe("Hold the shift button, press the MIDI button");
  });

  it("handles complex commands", () => {
    const result = convertSyntaxToText(complex);
    expect(result).toBe("Hold the shift button, press the MIDI button. Turn the select encoder. Press the select encoder.");
  });
});
