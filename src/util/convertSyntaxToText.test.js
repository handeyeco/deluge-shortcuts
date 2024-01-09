import convertSyntaxToText, {
  convertStepToText,
} from "./convertSyntaxToText.js";
import { Control, Action } from "../data/syntax-constants.js";

const simple = [{ action: Action.PRESS, control: Control.MIDI }];
const multistep = [
  { action: Action.TURN, control: Control.SELECT },
  { action: Action.PRESS, control: Control.MIDI },
];
const combo = [
  {
    substeps: [
      { action: Action.HOLD, control: Control.SHIFT },
      { action: Action.PRESS, control: Control.MIDI },
    ],
  },
];
const complex = [
  {
    substeps: [
      { action: Action.HOLD, control: Control.SHIFT },
      { action: Action.PRESS, control: Control.MIDI },
    ],
  },
  { action: Action.TURN, control: Control.SELECT },
  { action: Action.PRESS, control: Control.SELECT },
];

describe("convertStepToText", () => {
  it("converts a step to text", () => {
    const result = convertStepToText({
      action: Action.HOLD,
      control: Control.SHIFT,
    });

    expect(result).toBe("hold the Shift button");
  });

  it("handles grid coordinates", () => {
    const result = convertStepToText({
      action: Action.PRESS,
      control: {
        x: 7,
        y: 8,
      },
    });

    expect(result).toBe("press the grid button at column 7 row 8");
  });

  it("handles menu options", () => {
    const result = convertStepToText({
      action: Action.MENU,
      control: "CHOKE",
    });

    expect(result).toBe("select [CHOKE] from the menu");
  });

  it("handles external controller", () => {
    const result = convertStepToText({
      action: Action.PRESS,
      control: Control.EXTERNAL,
    });

    expect(result).toBe("trigger the external MIDI controller");
  });
});

describe("convertSyntaxToText", () => {
  it("handles simple commands", () => {
    const result = convertSyntaxToText(simple);
    expect(result).toBe("Press the MIDI button.");
  });

  it("handles multi-step commands", () => {
    const result = convertSyntaxToText(multistep);
    expect(result).toBe(
      "Turn the Select (Settings) encoder. Press the MIDI button."
    );
  });

  it("handles combo commands", () => {
    const result = convertSyntaxToText(combo);
    expect(result).toBe("Hold the Shift button, press the MIDI button.");
  });

  it("handles complex commands", () => {
    const result = convertSyntaxToText(complex);
    expect(result).toBe(
      "Hold the Shift button, press the MIDI button. Turn the Select (Settings) encoder. Press the Select (Settings) encoder."
    );
  });
});
