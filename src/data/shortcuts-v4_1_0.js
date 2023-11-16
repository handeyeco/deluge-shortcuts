const v4_1_0 = {
  Global: [
    {
      title: "View zoom level",
      command: "press(X)",
      views: ["global"],
    },
    {
      title: "Change zoom level",
      command: "hold(X) turn(X)",
      views: ["global"],
    },
    {
      title: "Scroll horizontal",
      command: "turn(X)",
      views: ["global"],
    },
    {
      title: "Scroll vertical",
      command: "turn(Y)",
      views: ["global"],
    },
    {
      title: "Undo",
      command: "press(BACK)",
      views: ["global"],
    },
    {
      title: "Redo",
      command: "hold(SHIFT) press(BACK)",
      views: ["global"],
    },
    {
      title: "New song",
      command: "hold(SHIFT) press(LOAD)",
      views: ["global"],
    },
    {
      title: "Delete song",
      command: "press(LOAD) turn(SELECT) hold(SHIFT) press(SAVE)",
      views: ["global"],
    },
    {
      title: "Load song",
      command: "press(LOAD) turn(SELECT) press(LOAD)",
      views: ["global"],
    },
    {
      title: "Save song",
      command: "press(SAVE) turn(SELECT) press(SELECT)",
      views: ["global"],
    },
    {
      title: "Change tempo (course)",
      command: "turn(TEMPO)",
      views: ["global"],
    },
    {
      title: "Change tempo (fine)",
      command: "hold(TEMPO) turn(TEMPO)",
      views: ["global"],
    },
    {
      title: "Metronome",
      command: "hold(SHIFT) press(TAP)",
      views: ["global"],
    },
    {
      title: "Swing",
      command: "hold(SHIFT) turn(TEMPO)",
      views: ["global"],
    },
    {
      title: "File system up",
      command: "press(BACK)",
      views: ["global"],
    },
    {
      title: "Adjust brightness",
      command: "hold(SHIFT) hold(LEARN) turn(Y)",
      views: ["global"],
    },
    {
      title: "Settings menu",
      command: "hold(SHIFT) press(SELECT)",
      views: ["global"],
    },
    {
      title: "Save song, collect all samples",
      command: "press(SAVE) turn(SELECT) hold(SELECT) press(SELECT)",
      views: ["global"],
    },
    {
      title: "Pad refresh rate",
      command: "hold(CLIP) turn(SELECT)",
      views: ["global"],
    },
  ],
  Sequencing: [
    {
      title: "Make long note",
      command: "hold(GRID) press(GRID_UNLIT)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Make long note across the next screen",
      command: "press(GRID) turn(X) hold(X) press(GRID_UNLIT)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Adjust note velocity",
      command: "hold(GRID) turn(X)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title:
        "Note probability; clockwise is iteration and counter is probability",
      command: "hold(GRID) turn(SELECT)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Copy notes",
      command: "hold(LEARN) press(X)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Paste notes",
      command: "hold(SHIFT) hold(LEARN) press(X)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Cross screen editing, real time note cloning",
      command: "press(CROSS)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Add instrument / row to kit",
      command: "hold(AUDITION) press(KIT) turn(SELECT) press(SELECT)",
      views: ["kit"],
    },
    {
      title: "Note zoom level - 128th and 256th level",
      command: "hold(LEARN) turn(TEMPO)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Record live - notes into sequencer",
      command: "press(PLAY) press(RECORD)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Duplicate clip content - double and append",
      command: "hold(SHIFT) press(X)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Change clip length",
      command: "hold(SHIFT) turn(X)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Shift all notes horizontally",
      command: "hold(Y) turn(X)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Clear clip",
      command: "hold(X) press(BACK)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Change clip color",
      command: "hold(SHIFT) turn(Y)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Change row color - instrument row in kit",
      command: "hold(SHIFT) hold(AUDITION) turn(Y)",
      views: ["kit"],
    },
    {
      title: "Reorder kit clip row up or down",
      command: "hold(AUDITION) hold(LAUNCH) turn(Y)",
      views: ["kit"],
    },
    {
      title: "Note nudge individual note",
      command: "hold(GRID_LIT) hold(X) turn(X)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Clip play direction",
      command: "hold(SHIFT) press(1,5)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Euclidian seq events - number of events / notes",
      command: "hold(AUDITION) hold(Y) turn(Y)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Euclidian seq length - row length",
      command: "hold(AUDITION) turn(X)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Euclidian seq rotate - shift / rotate events or notes",
      command: "hold(AUDITION) press(X) turn(X)",
      views: ["synth", "kit", "midi", "cv"],
    },
  ],
  "Song view": [
    {
      title: "Launch clip - queue",
      command: "press(LAUNCH)",
      views: ["song"],
    },
    {
      title: "Launch clip - immediately",
      command: "hold(SHIFT) press(LAUNCH)",
      views: ["song"],
    },
    {
      title: "Fast scroll song list",
      command: "press(LOAD) hold(SHIFT) turn(SELECT)",
      views: ["song"],
    },
    {
      title: "Create clip (empty row)",
      command: "press(GRID_UNLIT)",
      views: ["song"],
    },
    {
      title: "Enter clip (non-empty row)",
      command: "press(GRID)",
      views: ["song"],
    },
    {
      title: "Move row clip up or down",
      command: "hold(GRID) turn(Y)",
      views: ["song"],
    },
    {
      title: "Clip section color - change or create new",
      command: "hold(SHIFT) press(AUDITION)",
      views: ["song"],
    },
    {
      title: "Launch section",
      command: "press(AUDITION)",
      views: ["song"],
    },
    {
      title: "Section repeat (hold audition for 1 sec)",
      command: "hold(AUDITION) turn(SELECT)",
      views: ["song"],
    },
    {
      title: "Clone/duplicate clip (hold source, press destination)",
      command: "hold(GRID) press(GRID)",
      views: ["song"],
    },
    {
      title: "Delete clip",
      command: "hold(GRID) press(SAVE)",
      views: ["song"],
    },
    {
      title: "Solo clip - queue",
      command: "hold(X) press(LAUNCH)",
      views: ["song"],
    },
    {
      title: "Solo clip - immediately",
      command: "hold(SHIFT) hold(X) press(LAUNCH)",
      views: ["song"],
    },
    {
      title: "Clip parameter change (per clip)",
      command: "hold(GRID) turn(PARAMETER)",
      views: ["song"],
    },
    {
      title: "Clip parameter change (per song)",
      command: "press(ENTIRE) turn(PARAMETER)",
      views: ["song"],
    },
    {
      title: "Change existing clip preset",
      command: "hold(GRID) turn(SELECT)",
      views: ["song"],
    },
    {
      title: "Change existing clip to synth",
      command: "hold(GRID) press(SYNTH)",
      views: ["song"],
    },
    {
      title: "Change existing clip to MIDI",
      command: "hold(GRID) press(MIDI)",
      views: ["song"],
    },
    {
      title: "Change existing clip to CV",
      command: "hold(GRID) press(CV)",
      views: ["song"],
    },
    {
      title: "Create audio track (in empty clip)",
      command: "hold(GRID) press(SELECT)",
      views: ["song"],
    },
    {
      title: "Check name and type of non-empty clip",
      command: "hold(GRID)",
      views: ["song"],
    },
  ],
  "Recording / Resampling - Samples in Kit": [
    {
      title: "Resample / record all audio output",
      command: "hold(SHIFT) press(RECORD)",
      views: ["kit"],
    },
    {
      title: "Loop resample",
      command: "hold(RECORD) press(PLAY) hold(RECORD) press(PLAY)",
      views: ["kit"],
    },
    {
      title: "Record sample into a kit",
      command: "hold(SHIFT) press(KIT) press(RECORD)",
      views: ["kit"],
    },
    {
      title: "Load sample into a kit row",
      command: "hold(AUDITION) press(LOAD) turn(SELECT) press(SELECT)",
      views: ["kit"],
    },
    {
      title: "Load sample into a kit row silently",
      command:
        "hold(SHIFT) hold(AUDITION) press(LOAD) turn(SELECT) press(SELECT)",
      views: ["kit"],
    },
    {
      title: "Synth resample",
      command: "hold(RECORD) press(AUDITION) hold(RECORD) press(GRID)",
      views: ["kit"],
    },
    {
      title: "Load all samples from folder to kit",
      command:
        "hold(SHIFT) press(KIT) turn(SELECT) hold(SELECT) menu(ALL) press(SELECT)",
      views: ["kit"],
    },
    {
      title: "Slice sample",
      command:
        "hold(SHIFT) press(KIT) turn(SELECT) hold(SELECT) menu(SLICE) press(SELECT) menu(SLICES) press(SELECT)",
      views: ["kit"],
    },
    {
      title: "Rename kit row or instrument",
      command: "hold(AUDITION) press(3,12)",
      views: ["kit"],
    },
  ],
  "Audio clips": [
    {
      title: "Create new audio clip in song view (press empty row)",
      command: "hold(GRID_UNLIT) press(SELECT)",
      views: ["song"],
    },
    {
      title: "Source for audio clip in song view",
      command: "hold(LEARN) press(GRID) turn(SELECT) press(SELECT)",
      views: ["song"],
    },
    {
      title: "Create new audio track in arranger view",
      command: "hold(AUDITION) press(SELECT)",
      views: ["arranger"],
    },
    {
      title: "Source for audio clip in arranger view",
      command: "hold(LEARN) press(AUDITION) turn(SELECT) press(SELECT)",
      views: ["arranger"],
    },
    {
      title: "Clear audio clip recording",
      command: "hold(X) press(BACK)",
      views: ["audio"],
    },
    {
      title: "Change color of audio wave",
      command: "hold(SHIFT) turn(Y)",
      views: ["audio"],
    },
    {
      title: "End point / loop length (use red end point marker)",
      command: "press(GRID) press(GRID)",
      views: ["audio"],
    },
    {
      title: "Waveform start / end point",
      command: "hold(SHIFT) press(1,1)",
      views: ["audio"],
    },
    {
      title: "Adjust length - audio clip waveform",
      command: "hold(SHIFT) turn(X)",
      views: ["audio"],
    },
  ],
  "Modifying sounds": [
    {
      title: "New synth",
      command: "hold(SHIFT) press(SYNTH)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "New kit",
      command: "hold(SHIFT) press(KIT)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "View synth preset browser",
      command: "hold(LOAD) press(SYNTH)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "View kit preset browser",
      command: "hold(LOAD) press(KIT)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Save synth preset",
      command: "hold(SAVE) press(SYNTH) turn(SELECT) press(SELECT)",
      views: ["synth"],
    },
    {
      title: "Save kit preset",
      command: "hold(SAVE) press(KIT) turn(SELECT) press(SELECT)",
      views: ["kit"],
    },
    {
      title: "Note keyboard view",
      command: "press(KEY)",
      views: ["synth", "midi", "cv"],
    },
    {
      title: "Clear notes and automation",
      command: "hold(X) press(BACK)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Setting up choke group",
      command:
        "hold(AUDITION) press(7,8) turn(SELECT) menu(CHOKE) press(SELECT)",
      views: ["kit"],
    },
    {
      title: "Cycle default scales",
      command: "hold(SHIFT) press(SCALE)",
      views: ["synth", "midi", "cv"],
    },
    {
      title: "Change root note",
      command: "hold(SCALE) press(AUDITION)",
      views: ["synth", "midi", "cv"],
    },
    {
      title: "Alter current scale",
      command: "hold(AUDITION) turn(SELECT)",
      views: ["synth", "midi", "cv"],
    },
    {
      title: "Clone preset",
      command: "hold(LOAD) menu(CLONE) press(SELECT)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Kit clip affect all - first select parameter",
      command: "hold(SHIFT) hold(GRID) press(ENTIRE) turn(SELECT)",
      views: ["kit"],
    },
    {
      title: "Select kit/ instrument row silently",
      command: "hold(SHIFT) press(AUDITION)",
      views: ["kit"],
    },
    {
      title: "Change clip preset",
      command: "turn(SELECT)",
      views: ["synth", "kit"],
    },
    {
      title: "Transpose clip by octave",
      command: "hold(Y) turn(Y)",
      views: ["synth", "midi", "cv"],
    },
    {
      title: "Transpose current clip by semitone (scale off)",
      command: "hold(SHIFT) hold(Y) turn(Y)",
      views: ["synth", "midi", "cv"],
    },
    {
      title: "Transpose all clips by semitone (scale on)",
      command: "hold(SHIFT) hold(Y) turn(Y)",
      views: ["synth", "midi", "cv"],
    },
  ],
  "Waveforms, record-to-arranger, multi-sampling": [
    {
      title:
        "Chromatic sample - sample sample, different pitches (on new synth)",
      command:
        "hold(AUDITION) press(LOAD) press(SELECT) turn(SELECT) press(SELECT)",
      views: ["synth"],
    },
    {
      title: "Basic sample - load sample with no pitch detection",
      command:
        "hold(AUDITION) press(LOAD) press(SELECT) turn(SELECT) hold(SELECT) menu(BASIC) press(SELECT)",
      views: ["synth"],
    },
    {
      title: "Multi-sampling",
      command:
        "hold(AUDITION) press(LOAD) press(SELECT) turn(SELECT) hold(SELECT) menu(MULTI) press(SELECT)",
      views: ["synth"],
    },
    {
      title: "Single cycle waveforms",
      command:
        "hold(AUDITION) press(LOAD) press(SELECT) turn(SELECT) hold(SELECT) menu(SINGLE) press(SELECT)",
      views: ["synth"],
    },
    {
      title: "External sound source",
      command: "hold(SHIFT) press(6,3) turn(SELECT) menu(IN) press(PLAY)",
      views: ["synth"],
    },
    {
      title:
        "Record to arranger - live record parameter changes and MIDI notes (RECORD to end)",
      command: "hold(RECORD) press(SONG)",
      views: ["song"],
    },
    {
      title:
        "Append recording to existing arrangement (from arrangement mode; RECORD to end)",
      command: "turn(X) press(SONG) hold(RECORD) press(SONG)",
      views: ["arranger"],
    },
    {
      title: "Waveform edit view - change start / end / loop",
      description: "For samples in kits or synths that use samples",
      command: "hold(SHIFT) press(1,1)",
      views: ["synth", "kit"],
    },
    {
      title: "Zoom in and out",
      command: "hold(X) turn(X)",
      views: ["waveform"],
    },
    {
      title: "Move along waveform",
      command: "turn(X)",
      views: ["waveform"],
    },
    {
      title: "Change start",
      command: "press(WAVE_START) press(GRID)",
      views: ["waveform"],
    },
    {
      title: "Change end",
      command: "press(WAVE_END) press(GRID)",
      views: ["waveform"],
    },
    {
      title: "Create loop start point",
      command: "hold(WAVE_START) press(GRID)",
      views: ["waveform"],
    },
    {
      title: "Delete loop start point",
      command: "hold(WAVE_LOOP_START) press(WAVE_START)",
      views: ["waveform"],
    },
    {
      title: "Create loop end point",
      command: "hold(WAVE_END) press(GRID)",
      views: ["waveform"],
    },
    {
      title: "Delete loop end point",
      command: "hold(WAVE_LOOP_END) press(WAVE_END)",
      views: ["waveform"],
    },
  ],
  "Arranger view = song button flashing": [
    {
      title: "Add clip into arranger",
      command: "press(GRID_UNLIT)",
      views: ["arranger"],
    },
    {
      title: "Change / select instance's clip",
      command: "hold(GRID) turn(SELECT)",
      views: ["arranger"],
    },
    {
      title: "Delete clip instance from arranger (left-most clip grid button)",
      command: "press(GRID_LIT)",
      views: ["arranger"],
    },
    {
      title: "Clear arranger clips (all clip instances)",
      command: "hold(X) press(BACK)",
      views: ["arranger"],
    },
    {
      title: "Move clip instance horizontally",
      command: "hold(GRID_LIT) turn(X)",
      views: ["arranger"],
    },
    {
      title: "Move row vertically",
      command: "hold(AUDITION) turn(Y)",
      views: ["arranger"],
    },
    {
      title: "Change instance length of clip",
      command: "hold(GRID) press(GRID)",
      views: ["arranger"],
    },
    {
      title: "Mute / unmute",
      command: "press(LAUNCH)",
      views: ["arranger"],
    },
    {
      title: "Audition",
      command: "press(AUDITION)",
      views: ["arranger"],
    },
    {
      title: "Solo instrument",
      command: "hold(X) press(LAUNCH)",
      views: ["arranger"],
    },
    {
      title: "Enter clip (anything besides left-most grid button)",
      command: "press(GRID_LIT)",
      views: ["arranger"],
    },
    {
      title: "Scroll timeline with progress bar",
      command: "press(CROSS)",
      views: ["arranger"],
    },
    {
      title: "Start playback from current screen",
      command: "hold(X) press(PLAY)",
      views: ["arranger"],
    },
    {
      title: "Make clip instance unique (white; left-most clip grid button)",
      command: "hold(SHIFT) press(GRID_LIT)",
      views: ["arranger"],
    },
    {
      title: "Adjust clip parameter of clip instance",
      command: "hold(GRID_LIT) turn(PARAMETER)",
      views: ["arranger"],
    },
    {
      title:
        "Copy clip from arranger to song mode, eg to save white instance as its own clip",
      command: "hold(GRID_LIT) press(SONG) turn(Y)",
      views: ["arranger"],
    },
    {
      title: "Copy clip from song to arranger mode",
      command: "hold(GRID_LIT) press(SONG) turn(X)",
      views: ["arranger"],
    },
    {
      title:
        "Insert / delete time; applies to currently visible screen (clockwise: insert; counter: delete)",
      command: "hold(SHIFT) turn(X)",
      views: ["arranger"],
    },
    {
      title: "Enable loop play mode from arrange to song mode",
      command: "press(AUDITION)",
      views: ["arranger"],
    },
    {
      title: "Disable loop play mode from arrange to song mode",
      command: "press(LAUNCH)",
      views: ["arranger"],
    },
    {
      title: "Change instrument preset",
      command: "hold(AUDITION) turn(SELECT)",
      views: ["arranger"],
    },
    {
      title: "Change clip type to synth",
      command: "hold(AUDITION) press(SYNTH)",
      views: ["arranger"],
    },
    {
      title: "Change clip type to MIDI",
      command: "hold(AUDITION) press(MIDI)",
      views: ["arranger"],
    },
    {
      title: "Change clip type to CV",
      command: "hold(AUDITION) press(CV)",
      views: ["arranger"],
    },
    {
      title: "Add new instrument clip from arranger view (unused row)",
      command: "hold(AUDITION) turn(SELECT)",
      views: ["arranger"],
    },
    {
      title: "Add new synth clip type (unused row)",
      command: "hold(AUDITION) press(SYNTH)",
      views: ["arranger"],
    },
    {
      title: "Add new MIDI clip type (unused row)",
      command: "hold(AUDITION) press(MIDI)",
      views: ["arranger"],
    },
    {
      title: "Add new CV clip type (unused row)",
      command: "hold(AUDITION) press(CV)",
      views: ["arranger"],
    },
    {
      title: "Delete instrument row from arranger",
      command: "hold(AUDITION) press(SAVE)",
      views: ["arranger"],
    },
    {
      title: "Rename track",
      command: "hold(AUDITION) press(3,12)",
      views: ["arranger"],
    },
  ],
  "Parameter dials": [
    {
      title: "Assign gold dial control of parameters - first select parameter",
      command: "hold(LEARN) turn(PARAMETER)",
      views: ["synth", "kit"],
    },
    {
      title: "Check gold dial control of parameters - first select parameter",
      command: "turn(PARAMETER)",
      views: ["synth", "kit"],
    },
    {
      title: "Record automation of parameter",
      command: "press(RECORD) press(PLAY) turn(PARAMETER)",
      views: ["synth", "kit"],
    },
    {
      title: "Delete automation of recorded parameter",
      command: "hold(SHIFT) press(PARAMETER)",
      views: ["synth", "kit"],
    },
    {
      title: "Copy automation of parameter",
      command: "hold(LEARN) press(PARAMETER)",
      views: ["synth", "kit"],
    },
    {
      title: "Paste automation of parameter",
      command: "hold(SHIFT) hold(LEARN) press(PARAMETER)",
      views: ["synth", "kit"],
    },
    {
      title: "Parameter change / lock per note in clip view",
      command: "hold(GRID_LIT) turn(PARAMETER)",
      views: ["clip"],
    },
    {
      title: "Parameter change / lock per clip in song view",
      command: "hold(GRID_LIT) turn(PARAMETER)",
      views: ["song"],
    },
  ],
  "MIDI commands": [
    {
      title: "Setup MIDI sequencing of notes",
      command: "press(MIDI) turn(SELECT)",
      views: ["synth", "kit", "cv"],
    },
    {
      title: "MIDI sequencing of parameters - first select parameter",
      command: "hold(PARAMETER) turn(SELECT) turn(PARAMETER)",
      views: ["midi"],
    },
    {
      title: "Record MIDI automation",
      command: "press(RECORD) press(PLAY) turn(PARAMETER)",
      views: ["midi"],
    },
    {
      title: "Record MIDI step automation",
      command: "hold(GRID) turn(PARAMETER)",
      views: ["midi"],
    },
    {
      title: "Change dial control, but keep automation",
      command: "hold(PARAMETER) press(SELECT) turn(SELECT)",
      views: ["midi"],
    },
    {
      title: "MIDI note output in a kit clip",
      command: "hold(AUDITION) press(MIDI)",
      views: ["kit"],
    },
    {
      title: "MIDI note output in a kit clip: MIDI channel assign",
      command: "hold(AUDITION) turn(LOWER_PARAM)",
      views: ["kit"],
    },
    {
      title: "MIDI note output in a kit clip: MIDI note value",
      command: "hold(AUDITION) turn(UPPER_PARAM)",
      views: ["kit"],
    },
    {
      title: "Settings menu for additional MIDI, CV, and Gate parameters",
      command: "hold(SHIFT) press(SELECT)",
      views: ["midi"],
    },
    {
      title: "External controller to play synth or kit",
      command: "hold(LEARN) hold(AUDITION) press(EXTERNAL)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "External controller to trigger clip (from song mode)",
      command: "hold(LEARN) hold(AUDITION) press(EXTERNAL)",
      views: ["song"],
    },
    {
      title: "External controller to trigger play (from song mode)",
      command: "hold(LEARN) hold(PLAY) press(EXTERNAL)",
      views: ["song"],
    },
    {
      title: "External controller to trigger record (from song mode)",
      command: "hold(LEARN) hold(RECORD) press(EXTERNAL)",
      views: ["song"],
    },
    {
      title: "Unlearn external controller to play synth or kit",
      command: "hold(SHIFT) hold(LEARN) press(AUDITION)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Unlearn external controller to trigger clip (from song mode)",
      command: "hold(SHIFT) hold(LEARN) hold(AUDITION)",
      views: ["song"],
    },
    {
      title: "Unlearn external controller to trigger play (from song mode)",
      command: "hold(SHIFT) hold(LEARN) hold(PLAY)",
      views: ["song"],
    },
    {
      title: "Unlearn external controller to trigger record (from song mode)",
      command: "hold(SHIFT) hold(LEARN) hold(RECORD)",
      views: ["song"],
    },
    {
      title: "External control of parameter - first select parameter",
      command: "hold(LEARN) press(EXTERNAL)",
      views: ["synth", "kit"],
    },
    {
      title: "Unlearn external control of parameter - first select parameter",
      command: "hold(SHIFT) hold(LEARN)",
      views: ["synth", "kit"],
    },
    {
      title: "Nudge MIDI clock",
      command: "hold(X) turn(TEMPO)",
      views: ["midi"],
    },
    {
      title: "Record external notes",
      command: "press(RECORD) press(PLAY) press(EXTERNAL)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Sync scaling for unusual time signitures",
      command: "press(SYNC)",
      views: ["synth", "kit", "midi", "cv"],
    },
    {
      title: "Mute by external MIDI for individual kit rows - in kit mode",
      command: "hold(LEARN) hold(LAUNCH) press(EXTERNAL)",
      views: ["kit"],
    },
  ],
  "Looper in song mode": [
    {
      title: "Toggle record arm",
      command: "hold(RECORD) press(LAUNCH)",
      views: ["song"],
    },
    {
      title: "Start loop record",
      command: "press(RECORD) press(PLAY)",
      views: ["song"],
    },
    {
      title: "Close loop recording - on recording clip row",
      command: "press(LAUNCH)",
      views: ["song"],
    },
    {
      title: "Close loop recording and immediately play in solo",
      command: "hold(X) press(LAUNCH)",
      views: ["song"],
    },
    {
      title: "Record loop during playback",
      command: "press(RECORD) press(PLAY) press(LAUNCH)",
      views: ["song"],
    },
    {
      title:
        "Record overdub - press grid directly underneath existing audio clip",
      command: "press(RECORD) press(PLAY) hold(RECORD) press(GRID)",
      views: ["song"],
    },
    {
      title:
        "Record overdub - with continuous layering - press grid directly underneath existing audio clip",
      command: "press(RECORD) press(PLAY) hold(RECORD) press(AUDITION)",
      views: ["song"],
    },
    {
      title:
        "Tempo detection for loop pedal recording - start with a blank song",
      command: "hold(SHIFT) press(TAP)",
      views: ["song"],
    },
    {
      title: "Preset tempo for loop recording",
      command: "press(GRID_UNLIT) press(KIT) turn(TEMPO)",
      views: ["song"],
    },
    {
      title: "Grab tempo from existing audio clip",
      command: "hold(TEMPO) press(GRID_LIT)",
      views: ["song"],
    },
    {
      title: "Enable count-in before audio recording",
      command: "hold(SHIFT) press(SELECT) menu(RECORDING) menu(COUNT IN)",
      views: ["song"],
    },
  ],
};

export default v4_1_0;
