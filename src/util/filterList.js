import { Control, Action, View } from "../data/syntax-constants.js";

export function splitSearch(search) {
  // https://stackoverflow.com/a/16261693
  let splitWithQuotesRegex = /(?:[^\s"]+|"[^"]*")+/g;
  let output = search.match(splitWithQuotesRegex);

  if (!output) return [];

  return output.map((sub) => sub.replaceAll(`"`, ""));
}

export function isActionMatch(steps, str) {
  const upper = str.toUpperCase()

  // not a known action
  if (!Action[upper]) return false

  let match = false

  for (let step of steps) {
    if (step.substeps) {
      match = isActionMatch(step.substeps, str)
    } else {
      match = step.action === upper
    }

    if (match) {
      return true
    }
  }

  return false
}

export function isControlMatch(steps, str) {
  const upper = str.toUpperCase()

  // not a known action
  if (!Control[upper]) return false

  let match = false

  for (let step of steps) {
    if (step.substeps) {
      match = isControlMatch(step.substeps, str)
    } else {
      match = step.control === upper
    }

    if (match) {
      return true
    }
  }

  return false
}

export function isMatch(entry, searchOptions) {
  if (!searchOptions.length) return true;

  for (let opt of searchOptions) {
    // handle special search commands
    const commandMatch = opt.match(/^(\w+):(.+)$/);
    if (commandMatch) {
      const [_, cmd, param] = commandMatch;

      // ex: action:PRESS
      if (cmd.toLowerCase() === "action" && !isActionMatch(entry.steps, param)) {
        return false;
      }

      // ex: control:SELECT
      if (cmd.toLowerCase() === "control" && !isControlMatch(entry.steps, param)) {
        return false;
      }

      // ex: view:song
      if (
        cmd.toLowerCase() === "view" &&
        !entry.views?.includes(param.toUpperCase())
      ) {
        return false;
      }
    }
    // handle string searches
    else {
      if (
        !entry.name.toLowerCase().includes(opt.toLowerCase()) &&
        !entry.description?.toLowerCase().includes(opt.toLowerCase())
      ) {
        return false;
      }
    }
  }

  return true;
}

function filterList(search, list) {
  if (!search) return list;

  const searchOptions = splitSearch(search);
  const clone = structuredClone(list);
  const filtered = {};

  for (const [grouping, entries] of Object.entries(clone)) {
    const filteredEntries = entries.filter((entry) => {
      return isMatch(entry, searchOptions);
    });

    if (filteredEntries.length) {
      filtered[grouping] = filteredEntries;
    }
  }

  return Object.keys(filtered).length ? filtered : null;
}

export default filterList;
