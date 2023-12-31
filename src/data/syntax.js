import { Control, Action, View } from "./syntax-constants.js";

function createLink(group, command) {
  return `/shortcuts?q=${group}:${command}`;
}

function process(list) {
  const output = {};
  Object.entries(list).forEach(([group, subgroup]) => {
    const processedSubGroup = [];
    Object.entries(subgroup).forEach(([command, description]) => {
      processedSubGroup.push({
        name: command,
        description: description,
        steps: group === "view" ? null : [
          {
            action: Action[command],
            control: Control[command]
          }
        ],
        link: createLink(group, command),
      });
    });
    output[group] = processedSubGroup;
  });
  return output;
}

const SYNTAX = {
  control: {
    "3,12": "Grid button coordinates (X,Y) where upper-left grid button is 1,1",
    [Control.X]: "X (Left/Right) encoder",
    [Control.Y]: "Y (Up/Down) encoder",

    [Control.PARAMETER]: "Parameter encoders",
    [Control.LOWER_PARAM]: "Lower parameter encoder",
    [Control.UPPER_PARAM]: "Upper parameter encoder",

    [Control.ENTIRE]: "Affect Entire button",
    [Control.SONG]: "Song button",
    [Control.CLIP]: "Clip button",

    [Control.SELECT]: "Select (Settings) encoder",

    [Control.SYNTH]: "Synth button",
    [Control.KIT]: "Kit button",
    [Control.MIDI]: "MIDI button",
    [Control.CV]: "CV button",
    [Control.KEY]: "Key button (keyboard icon)",
    [Control.SCALE]: "Scale button",
    [Control.CROSS]: "Cross-screen button",

    [Control.BACK]: "Back / Undo (Redo) button",
    [Control.LOAD]: "Load (New) button",
    [Control.SAVE]: "Save (Delete) button",
    [Control.LEARN]: "Learn / Input button",

    [Control.TAP]: "Tap Tempo (Metronome) button",
    [Control.SYNC]: "Sync-Scaling button",
    [Control.TEMPO]: "Tempo (Swing) encoder",

    [Control.PLAY]: "Play button",
    [Control.RECORD]: "Record button",
    [Control.SHIFT]: "Shift button",

    [Control.GRID]: "Grid pad (lit or unlit)",
    [Control.GRID_UNLIT]: "Unlit grid pad",
    [Control.GRID_LIT]: "Lit grid pad",
    [Control.WAVE_START]: "Green grid column representing waveform start",
    [Control.WAVE_END]: "Red grid column representing waveform end",
    [Control.WAVE_LOOP_START]:
      "Blue grid column representing waveform loop start",
    [Control.WAVE_LOOP_END]:
      "Purple grid column representing waveform loop end",
    [Control.LAUNCH]: "Mute / Launch button for row",
    [Control.AUDITION]: "Audition / Section button for row",
    [Control.EXTERNAL]: "Use external MIDI controller",
  },
  action: {
    [Action.HOLD]: "Hold",
    [Action.RELEASE]: "Release",
    [Action.PRESS]: "Press",
    [Action.TURN]: "Turn",
    [Action.MENU]: "Select option from menu",
  },
  view: {
    [View.GLOBAL]: "Global",
    [View.SONG]: "Song",
    [View.ARRANGER]: "Arranger",
    [View.SYNTH]: "Synth",
    [View.KIT]: "Kit",
    [View.MIDI]: "MIDI",
    [View.CV]: "CV",
    [View.AUDIO]: "Audio",
    [View.WAVEFORM]: "Waveform",
  },
};

export default process(SYNTAX);
