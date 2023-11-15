const v4_1_0 = {
  Global: [
    {
      title: "View zoom level",
      command: "press(X)",
    },
    {
      title: "Change zoom level",
      command: "hold(X) turn(X)",
    },
    {
      title: "Scroll horizontal",
      command: "turn(X)",
    },
    {
      title: "Scroll vertical",
      command: "turn(Y)",
    },
    {
      title: "Undo",
      command: "press(BACK)",
    },
    {
      title: "Redo",
      command: "hold(SHIFT) press(BACK)",
    },
    {
      title: "New song",
      command: "hold(SHIFT) press(LOAD)",
    },
    {
      title: "Delete song",
      command: "press(LOAD) turn(SELECT) hold(SHIFT) press(SAVE)",
    },
    {
      title: "Load song",
      command: "press(LOAD) turn(SELECT) press(LOAD)",
    },
    {
      title: "Save song",
      command: "press(SAVE) turn(SELECT) press(SELECT)",
    },
    {
      title: "Change tempo (course)",
      command: "turn(TEMPO)",
    },
    {
      title: "Change tempo (fine)",
      command: "hold(TEMPO) turn(TEMPO)",
    },
    {
      title: "Metronome",
      command: "hold(SHIFT) press(TAP)",
    },
    {
      title: "Swing",
      command: "hold(SHIFT) turn(TEMPO)",
    },
    {
      title: "File system up",
      command: "press(BACK)",
    },
    {
      title: "Adjust brightness",
      command: "hold(SHIFT) hold(LEARN) turn(Y)",
    },
    {
      title: "Settings menu",
      command: "hold(SHIFT) press(SELECT)",
    },
    {
      title: "Save song, collect all samples",
      command: "press(SAVE) turn(SELECT) hold(SELECT) press(SELECT)",
    },
    {
      title: "Pad refresh rate",
      command: "hold(CLIP) turn(SELECT)",
    },
  ],
  Sequencing: [
    {
      title: "Make long note",
      command: "hold(GRID) press(GRID_UNLIT)",
    },
    {
      title: "Make long note across the next screen",
      command: "press(GRID) turn(X) hold(X) press(GRID_UNLIT)",
    },
    {
      title: "Adjust note velocity",
      command: "hold(GRID) turn(X)",
    },
    {
      title:
        "Note probability; clockwise is iteration and counter is probability",
      command: "hold(GRID) turn(SELECT)",
    },
    {
      title: "Copy notes",
      command: "hold(LEARN) press(X)",
    },
    {
      title: "Paste notes",
      command: "hold(SHIFT) hold(LEARN) press(X)",
    },
    {
      title: "Cross screen editing, real time note cloning",
      command: "press(CROSS)",
    },
    {
      title: "Add instrument / row to kit",
      command: "hold(AUDITION) press(KIT) turn(SELECT) press(SELECT)",
    },
    {
      title: "Note zoom level - 128th and 256th level",
      command: "hold(LEARN) turn(TEMPO)",
    },
    {
      title: "Record live - notes into sequencer",
      command: "press(PLAY) press(RECORD)",
    },
    {
      title: "Duplicate clip content - double and append",
      command: "hold(SHIFT) press(X)",
    },
    {
      title: "Change clip length",
      command: "hold(SHIFT) turn(X)",
    },
    {
      title: "Shift all notes horizontally",
      command: "hold(Y) turn(X)",
    },
    {
      title: "Clear clip",
      command: "hold(X) press(BACK)",
    },
    {
      title: "Change clip color",
      command: "hold(SHIFT) turn(Y)",
    },
    {
      title: "Change row color - instrument row in kit",
      command: "hold(SHIFT) hold(AUDITION) turn(Y)",
    },
    {
      title: "Reorder kit clip row up or down",
      command: "hold(AUDITION) hold(LAUNCH) turn(Y)",
    },
    {
      title: "Note nudge individual note",
      command: "hold(GRID_LIT) hold(X) turn(X)",
    },
    {
      title: "Clip play direction",
      command: "hold(SHIFT) press(1,5)",
    },
    {
      title: "Euclidian seq events - number of events / notes",
      command: "hold(AUDITION) hold(Y) turn(Y)",
    },
    {
      title: "Euclidian seq length - row length",
      command: "hold(AUDITION) turn(X)",
    },
    {
      title: "Euclidian seq rotate - shift / rotate events or notes",
      command: "hold(AUDITION) press(X) turn(X)",
    },
  ],
  "Song view": [
    {
      title: "Launch clip - queue",
      command: "press(LAUNCH)",
    },
    {
      title: "Launch clip - immediately",
      command: "hold(SHIFT) press(LAUNCH)",
    },
    {
      title: "Fast scroll song list",
      command: "press(LOAD) hold(SHIFT) turn(SELECT)",
    },
    {
      title: "Create clip (empty row)",
      command: "press(GRID_UNLIT)",
    },
    {
      title: "Enter clip (non-empty row)",
      command: "press(GRID)",
    },
    {
      title: "Move row clip up or down",
      command: "hold(GRID) turn(Y)",
    },
    {
      title: "Clip section color - change or create new",
      command: "hold(SHIFT) press(AUDITION)",
    },
    {
      title: "Launch section",
      command: "press(AUDITION)",
    },
    {
      title: "Section repeat (hold audition for 1 sec)",
      command: "hold(AUDITION) turn(SELECT)",
    },
    {
      title: "Clone/duplicate clip (hold source, press destination)",
      command: "hold(GRID) press(GRID)",
    },
    {
      title: "Delete clip",
      command: "hold(GRID) press(SAVE)",
    },
    {
      title: "Solo clip - queue",
      command: "hold(X) press(LAUNCH)",
    },
    {
      title: "Solo clip - immediately",
      command: "hold(SHIFT) hold(X) press(LAUNCH)",
    },
    {
      title: "Clip parameter change (per clip)",
      command: "hold(GRID) turn(PARAMETER)",
    },
    {
      title: "Clip parameter change (per song)",
      command: "press(ENTIRE) turn(PARAMETER)",
    },
    {
      title: "Change existing clip preset",
      command: "hold(GRID) turn(SELECT)",
    },
    {
      title: "Change existing clip to synth",
      command: "hold(GRID) press(SYNTH)",
    },
    {
      title: "Change existing clip to MIDI",
      command: "hold(GRID) press(MIDI)",
    },
    {
      title: "Change existing clip to CV",
      command: "hold(GRID) press(CV)",
    },
    {
      title: "Create audio track (in empty clip)",
      command: "hold(GRID) press(SELECT)",
    },
    {
      title: "Check name and type of non-empty clip",
      command: "hold(GRID)",
    },
  ],
  "Recording / Resampling - Samples in Kit": [
    {
      title: "Resample / record all audio output",
      command: "hold(SHIFT) press(RECORD)",
    },
    {
      title: "Loop resample",
      command: "hold(RECORD) press(PLAY) hold(RECORD) press(PLAY)",
    },
    {
      title: "Record sample into a kit",
      command: "hold(SHIFT) press(KIT) press(RECORD)",
    },
    {
      title: "Load sample into a kit row",
      command: "hold(AUDITION) press(LOAD) turn(SELECT) press(SELECT)",
    },
    {
      title: "Load sample into a kit row silently",
      command:
        "hold(SHIFT) hold(AUDITION) press(LOAD) turn(SELECT) press(SELECT)",
    },
    {
      title: "Synth resample",
      command: "hold(RECORD) press(AUDITION) hold(RECORD) press(GRID)",
    },
    {
      title: "Load all samples from folder to kit",
      command:
        "hold(SHIFT) press(KIT) turn(SELECT) hold(SELECT) menu(ALL) press(SELECT)",
    },
    {
      title: "Slice sample",
      command:
        "hold(SHIFT) press(KIT) turn(SELECT) hold(SELECT) menu(SLICE) press(SELECT) menu(SLICES) press(SELECT)",
    },
    {
      title: "Rename kit row or instrument",
      command: "hold(AUDITION) press(3,12)",
    },
  ],
  "Audio clips": [
    {
      title: "Create new audio clip in song view (press empty row)",
      command: "hold(GRID_UNLIT) press(SELECT)",
    },
    {
      title: "Source for audio clip in song view",
      command: "hold(LEARN) press(GRID) turn(SELECT) press(SELECT)",
    },
    {
      title: "Create new audio track in arranger view",
      command: "hold(AUDITION) press(SELECT)",
    },
    {
      title: "Source for audio clip in arranger view",
      command: "hold(LEARN) press(AUDITION) turn(SELECT) press(SELECT)",
    },
    {
      title: "Clear audio clip recording",
      command: "hold(X) press(BACK)",
    },
    {
      title: "Change color of audio wave",
      command: "hold(SHIFT) turn(Y)",
    },
    {
      title: "End point / loop length (use red end point marker)",
      command: "press(GRID) press(GRID)",
    },
    {
      title: "Waveform start / end point",
      command: "hold(SHIFT) press(1,1)",
    },
    {
      title: "Adjust length - audio clip waveform",
      command: "hold(SHIFT) turn(X)",
    },
  ],
  "Modifying sounds": [
    {
      title: "New synth",
      command: "hold(SHIFT) press(SYNTH)",
    },
    {
      title: "New kit",
      command: "hold(SHIFT) press(KIT)",
    },
    {
      title: "View synth preset browser",
      command: "hold(LOAD) press(SYNTH)",
    },
    {
      title: "View kit preset browser",
      command: "hold(LOAD) press(KIT)",
    },
    {
      title: "Save synth preset",
      command: "hold(SAVE) press(SYNTH) turn(SELECT) press(SELECT)",
    },
    {
      title: "Save kit preset",
      command: "hold(SAVE) press(KIT) turn(SELECT) press(SELECT)",
    },
    {
      title: "Note keyboard view",
      command: "press(KEY)",
    },
    {
      title: "Clear notes and automation",
      command: "hold(X) press(BACK)",
    },
    {
      title: "Setting up choke group",
      command:
        "hold(AUDITION) press(7,8) turn(SELECT) menu(CHOKE) press(SELECT)",
    },
    {
      title: "Cycle default scales",
      command: "hold(SHIFT) press(SCALE)",
    },
    {
      title: "Change root note",
      command: "hold(SCALE) press(AUDITION)",
    },
    {
      title: "Alter current scale",
      command: "hold(AUDITION) turn(SELECT)",
    },
    {
      title: "Clone preset",
      command: "hold(LOAD) menu(CLONE) press(SELECT)",
    },
    {
      title: "Kit clip affect all - first select parameter",
      command: "hold(SHIFT) hold(GRID) press(ENTIRE) turn(SELECT)",
    },
    {
      title: "Select kit/ instrument row silently",
      command: "hold(SHIFT) press(AUDITION)",
    },
    {
      title: "Change clip preset",
      command: "turn(SELECT)",
    },
    {
      title: "Transpose clip by octave",
      command: "hold(Y) turn(Y)",
    },
    {
      title: "Transpose current clip by semitone (scale off)",
      command: "hold(SHIFT) hold(Y) turn(Y)",
    },
    {
      title: "Transpose all clips by semitone (scale on)",
      command: "hold(SHIFT) hold(Y) turn(Y)",
    },
  ],
  "Waveforms, record-to-arranger, multi-sampling": [
    {
      title:
        "Chromatic sample - sample sample, different pitches (on new synth)",
      command:
        "hold(AUDITION) press(LOAD) press(SELECT) turn(SELECT) press(SELECT)",
    },
    {
      title: "Basic sample - load sample with no pitch detection",
      command:
        "hold(AUDITION) press(LOAD) press(SELECT) turn(SELECT) hold(SELECT) menu(BASIC) press(SELECT)",
    },
    {
      title: "Multi-sampling",
      command:
        "hold(AUDITION) press(LOAD) press(SELECT) turn(SELECT) hold(SELECT) menu(MULTI) press(SELECT)",
    },
    {
      title: "Single cycle waveforms",
      command:
        "hold(AUDITION) press(LOAD) press(SELECT) turn(SELECT) hold(SELECT) menu(SINGLE) press(SELECT)",
    },
    {
      title: "External sound source",
      command: "hold(SHIFT) press(6,3) turn(SELECT) menu(IN) press(PLAY)",
    },
    {
      title:
        "Record to arranger - live record parameter changes and MIDI notes (RECORD to end)",
      command: "press(SONG) hold(RECORD) press(SONG)",
    },
    {
      title:
        "Append recording to existing arrangement (from arrangement mode; RECORD to end)",
      command: "turn(X) press(SONG) hold(RECORD) press(SONG)",
    },
    {
      title: "Waveform edit view - change start / end / loop",
      command: "hold(SHIFT) press(1,1)",
    },
    {
      title: "Zoom in and out",
      command: "hold(X) turn(X)",
    },
    {
      title: "Move along waveform",
      command: "turn(X)",
    },
    {
      title: "Change start",
      command: "press(WAVE_START) press(GRID)",
    },
    {
      title: "Change end",
      command: "press(WAVE_END) press(GRID)",
    },
    {
      title: "Create loop start point",
      command: "hold(WAVE_START) press(GRID)",
    },
    {
      title: "Delete loop start point",
      command: "hold(WAVE_LOOP_START) press(WAVE_START)",
    },
    {
      title: "Create loop end point",
      command: "hold(WAVE_END) press(GRID)",
    },
    {
      title: "Delete loop end point",
      command: "hold(WAVE_LOOP_END) press(WAVE_END)",
    },
  ],
  "Arranger view = song button flashing": [
    {
      title: "Add clip into arranger",
      command: "press(GRID_UNLIT)",
    },
    {
      title: "Change / select instance's clip",
      command: "hold(GRID) turn(SELECT)",
    },
    {
      title: "Delete clip instance from arranger (left-most clip grid button)",
      command: "press(GRID_LIT)",
    },
    {
      title: "Clear arranger clips (all clip instances)",
      command: "hold(X) press(BACK)",
    },
    {
      title: "Move clip instance horizontally",
      command: "hold(GRID_LIT) turn(X)",
    },
    {
      title: "Move row vertically",
      command: "hold(AUDITION) turn(Y)",
    },
    {
      title: "Change instance length of clip",
      command: "hold(GRID) press(GRID)",
    },
    {
      title: "Mute / unmute",
      command: "press(LAUNCH)",
    },
    {
      title: "Audition",
      command: "press(AUDITION)",
    },
    {
      title: "Solo instrument",
      command: "hold(X) press(LAUNCH)",
    },
    {
      title: "Enter clip (anything besides left-most grid button)",
      command: "press(GRID_LIT)",
    },
    {
      title: "Scroll timeline with progress bar",
      command: "press(CROSS)",
    },
    {
      title: "Start playback from current screen",
      command: "hold(X) press(PLAY)",
    },
    {
      title: "Make clip instance unique (white; left-most clip grid button)",
      command: "hold(SHIFT) press(GRID_LIT)",
    },
    {
      title: "Adjust clip parameter of clip instance",
      command: "hold(GRID_LIT) turn(PARAMETER)",
    },
    {
      title:
        "Copy clip from arranger to song mode, eg to save white instance as its own clip",
      command: "hold(GRID_LIT) press(SONG) turn(Y)",
    },
    {
      title: "Copy clip from song to arranger mode",
      command: "hold(GRID_LIT) press(SONG) turn(X)",
    },
    {
      title:
        "Insert / delete time; applies to currently visible screen (clockwise: insert; counter: delete)",
      command: "hold(SHIFT) turn(X)",
    },
    {
      title: "Enable loop play mode from arrange to song mode",
      command: "press(AUDITION)",
    },
    {
      title: "Disable loop play mode from arrange to song mode",
      command: "press(LAUNCH)",
    },
    {
      title: "Change instrument preset",
      command: "hold(AUDITION) turn(SELECT)",
    },
    {
      title: "Change clip type to synth",
      command: "hold(AUDITION) press(SYNTH)",
    },
    {
      title: "Change clip type to MIDI",
      command: "hold(AUDITION) press(MIDI)",
    },
    {
      title: "Change clip type to CV",
      command: "hold(AUDITION) press(CV)",
    },
    {
      title: "Add new instrument clip from arranger view (unused row)",
      command: "hold(AUDITION) turn(SELECT)",
    },
    {
      title: "Add new synth clip type (unused row)",
      command: "hold(AUDITION) press(SYNTH)",
    },
    {
      title: "Add new MIDI clip type (unused row)",
      command: "hold(AUDITION) press(MIDI)",
    },
    {
      title: "Add new CV clip type (unused row)",
      command: "hold(AUDITION) press(CV)",
    },
    {
      title: "Delete instrument row from arranger",
      command: "hold(AUDITION) press(SAVE)",
    },
    {
      title: "Rename track",
      command: "hold(AUDITION) press(3,12)",
    },
  ],
  "Parameter dials": [
    {
      title: "Assign gold dial control of parameters - first select parameter",
      command: "hold(LEARN) turn(PARAMETER)",
    },
    {
      title: "Check gold dial control of parameters - first select parameter",
      command: "turn(PARAMETER)",
    },
    {
      title: "Record automation of parameter",
      command: "press(RECORD) press(PLAY) turn(PARAMETER)",
    },
    {
      title: "Delete automation of recorded parameter",
      command: "hold(SHIFT) press(PARAMETER)",
    },
    {
      title: "Copy automation of parameter",
      command: "hold(LEARN) press(PARAMETER)",
    },
    {
      title: "Paste automation of parameter",
      command: "hold(SHIFT) hold(LEARN) press(PARAMETER)",
    },
    {
      title: "Parameter change / lock per note in clip view",
      command: "hold(GRID_LIT) turn(PARAMETER)",
    },
    {
      title: "Parameter change / lock per clip in song view",
      command: "hold(GRID_LIT) turn(PARAMETER)",
    },
  ],
  "MIDI commands": [
    {
      title: "Setup MIDI sequencing of notes",
      command: "press(MIDI) turn(SELECT)",
    },
    {
      title: "MIDI sequencing of parameters - first select parameter",
      command: "hold(PARAMETER) turn(SELECT) turn(PARAMETER)",
    },
    {
      title: "Record MIDI automation",
      command: "press(RECORD) press(PLAY) turn(PARAMETER)",
    },
    {
      title: "Record MIDI step automation",
      command: "hold(GRID) turn(PARAMETER)",
    },
    {
      title: "Change dial control, but keep automation",
      command: "hold(PARAMETER) press(SELECT) turn(SELECT)",
    },
    {
      title: "MIDI note output in a kit clip",
      command: "press(KIT) hold(AUDITION) press(MIDI)",
    },
    {
      title: "MIDI note output in a kit clip: MIDI channel assign",
      command: "hold(AUDITION) turn(LOWER_PARAM)",
    },
    {
      title: "MIDI note output in a kit clip: MIDI note value",
      command: "hold(AUDITION) turn(UPPER_PARAM)",
    },
    {
      title: "Settings menu for additional MIDI, CV, and Gate parameters",
      command: "hold(SHIFT) press(SELECT)",
    },
    {
      title: "External controller to play synth or kit",
      command: "hold(LEARN) hold(AUDITION) press(EXTERNAL)",
    },
    {
      title: "External controller to trigger clip (from song mode)",
      command: "hold(LEARN) hold(AUDITION) press(EXTERNAL)",
    },
    {
      title: "External controller to trigger play (from song mode)",
      command: "hold(LEARN) hold(PLAY) press(EXTERNAL)",
    },
    {
      title: "External controller to trigger record (from song mode)",
      command: "hold(LEARN) hold(RECORD) press(EXTERNAL)",
    },
    {
      title: "Unlearn external controller to play synth or kit",
      command: "hold(SHIFT) hold(LEARN) press(AUDITION)",
    },
    {
      title: "Unlearn external controller to trigger clip (from song mode)",
      command: "hold(SHIFT) hold(LEARN) hold(AUDITION)",
    },
    {
      title: "Unlearn external controller to trigger play (from song mode)",
      command: "hold(SHIFT) hold(LEARN) hold(PLAY)",
    },
    {
      title: "Unlearn external controller to trigger record (from song mode)",
      command: "hold(SHIFT) hold(LEARN) hold(RECORD)",
    },
    {
      title: "External control of parameter - first select parameter",
      command: "hold(LEARN) press(EXTERNAL)",
    },
    {
      title: "Unlearn external control of parameter - first select parameter",
      command: "hold(SHIFT) hold(LEARN)",
    },
    {
      title: "Nudge MIDI clock",
      command: "hold(X) turn(TEMPO)",
    },
    {
      title: "Record external notes",
      command: "press(RECORD) press(PLAY) press(EXTERNAL)",
    },
    {
      title: "Sync scaling for unusual time signitures",
      command: "press(SYNC)",
    },
    {
      title: "Mute by external MIDI for individual kit rows - in kit mode",
      command: "hold(LEARN) hold(LAUNCH) press(EXTERNAL)",
    },
  ],
  "Looper in song mode": [
    {
      title: "Toggle record arm",
      command: "hold(RECORD) press(LAUNCH)",
    },
    {
      title: "Start loop record",
      command: "press(RECORD) press(PLAY)",
    },
    {
      title: "Close loop recording - on recording clip row",
      command: "press(LAUNCH)",
    },
    {
      title: "Close loop recording and immediately play in solo",
      command: "hold(X) press(LAUNCH)",
    },
    {
      title: "Record loop during playback",
      command: "press(RECORD) press(PLAY) press(LAUNCH)",
    },
    {
      title:
        "Record overdub - press grid directly underneath existing audio clip",
      command: "press(RECORD) press(PLAY) hold(RECORD) press(GRID)",
    },
    {
      title:
        "Record overdub - with continuous layering - press grid directly underneath existing audio clip",
      command: "press(RECORD) press(PLAY) hold(RECORD) press(AUDITION)",
    },
    {
      title:
        "Tempo detection for loop pedal recording - start with a blank song",
      command: "hold(SHIFT) press(TAP)",
    },
    {
      title: "Preset tempo for loop recording",
      command: "press(GRID_UNLIT) press(KIT) turn(TEMPO)",
    },
    {
      title: "Grab tempo from existing audio clip",
      command: "hold(TEMPO) press(GRID_LIT)",
    },
    {
      title: "Enable count-in before audio recording",
      command: "hold(SHIFT) press(SELECT) menu(RECORDING) menu(COUNT IN)",
    },
  ],
};

export default v4_1_0;
