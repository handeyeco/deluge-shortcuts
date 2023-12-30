export function parseSyntax(steps) {
  if (!steps) {
    throw new Error("parseSyntax: no steps provided")
  } else if (!Array.isArray(steps)) {
    throw new Error("parseSyntax: steps are not an array")
  }
  
  const output = steps.reduce((acc, curr) => {
    // handle combos
    if (curr.substeps) {
      const combo = parseSyntax(curr.substeps)
      for (let i = 0; i < combo.length; i++) {
        acc.push(combo[i])
        if (i < combo.length - 1) {
          acc.push("AND")
        }
      }

      return acc
    }

    // single action
    acc.push({
      action: curr.action,
      control: curr.control
    })

    return acc
  }, [])

  return output
}