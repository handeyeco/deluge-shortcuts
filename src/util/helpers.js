export function toggleSubstring(str, sub) {
  if (!sub) return str;

  const strLower = str.toLowerCase();
  const subLower = sub.toLowerCase();

  let next = str;
  let index = strLower.indexOf(subLower);
  if (index >= 0) {
    while (index >= 0) {
      // remove
      next = next.slice(0, index) + next.slice(index + sub.length);
      index = next.indexOf(subLower, index + 1);
    }
  } else {
    next = `${sub} ${str}`;
  }

  next = next.replace(/\s+/g, " ").trim();

  return next;
}
