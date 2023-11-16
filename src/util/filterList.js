export function splitSearch(search) {
  // https://stackoverflow.com/a/16261693
  let splitWithQuotesRegex = /(?:[^\s"]+|"[^"]*")+/g;
  let output = search.match(splitWithQuotesRegex);

  if (!output) return [];

  return output.map((sub) => sub.replaceAll(`"`, ""));
}

export function isCommandMatch(command, str) {
  const splitCommand = command.split(/[\s()]+/);
  for (let partial of splitCommand) {
    if (str.toLowerCase() === partial.toLowerCase()) {
      return true;
    }
  }
  return false;
}

export function isMatch(entry, searchOptions) {
  if (!searchOptions.length) return true;

  for (let opt of searchOptions) {
    // handle special search commands
    const commandMatch = opt.match(/^(\w+):(.+)$/);
    if (commandMatch) {
      const [_, cmd, param] = commandMatch;

      // ex: action:push or control:SELECT
      if (
        (cmd.toLowerCase() === "action" || cmd.toLowerCase() === "control") &&
        !isCommandMatch(entry.command, param)
      ) {
        return false;
      }

      // ex: view:song
      if (
        cmd.toLowerCase() === "view" &&
        !entry.views?.includes(param.toLowerCase())
      ) {
        return false;
      }
    }
    // handle string searches
    else {
      if (
        !entry.title.toLowerCase().includes(opt.toLowerCase()) &&
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
