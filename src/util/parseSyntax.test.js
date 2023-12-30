import { parseSyntax } from "./parseSyntax";

const changeTempo = {
  name: "Change tempo",
  views: ["global"],
  steps: [
    {
      action: "TURN",
      control: "TEMPO"
    }
  ]
}

const reduceClipLength = {
  name: "Reduce clip length",
  views: ["clip"],
  note: "Polyrhythms",
  steps: [
    {
      substeps: [
        {
          action: "HOLD",
          control: "SHIFT",
        },
        {
          action: "TURN",
          control: "X"
        }
      ]
    }
  ]
}

const loadSampleSilently = {
  name: "Load sample silently",
  views: ["synth", "kit"],
  steps: [
    {
      substeps: [
        {
          action: "HOLD",
          control: "SHIFT",
        },
        {
          action: "HOLD",
          control: "AUDITION",
        },
        {
          action: "PRESS",
          control: "LOAD",
        }
      ]
    },
    {
      action: "TURN",
      control: "SELECT",
    },
    {
      action: "PRESS",
      control: "SELECT",
    }
  ],
}

describe("parseSyntax", () => {
  it(`test case (simple): change tempo`, () => {
    const result = parseSyntax(changeTempo.steps)
    expect(result).toEqual([
      {
        action: "TURN",
        control: "TEMPO"
      }
    ])
  })

  it(`test case (combo): reduce clip length`, () => {
    const result = parseSyntax(reduceClipLength.steps)
    expect(result).toEqual([
      {
        action: "HOLD",
        control: "SHIFT",
      },
      "AND",
      {
        action: "TURN",
        control: "X"
      }
    ])
  })

  it(`test case (complex): load sample silently`, () => {
    const result = parseSyntax(loadSampleSilently.steps)
    expect(result).toEqual([
      {
        action: "HOLD",
        control: "SHIFT",
      },
      "AND",
      {
        action: "HOLD",
        control: "AUDITION",
      },
      "AND",
      {
        action: "PRESS",
        control: "LOAD",
      },
      {
        action: "TURN",
        control: "SELECT",
      },
      {
        action: "PRESS",
        control: "SELECT",
      }
    ])
  })
});
