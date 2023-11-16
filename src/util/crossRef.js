function generateCrossReference(syntax, shortcuts) {
  const flatcuts = Object.values(shortcuts).flat();

  const output = {};
  Object.entries(syntax).forEach(([group, subgroup]) => {
    const processedSubGroup = {};
    Object.values(subgroup).forEach((cmd) => {
      flatcuts.forEach((sc) => {
        if (
          sc.command.includes(cmd.command) ||
          sc.views.includes(cmd.command)
        ) {
          processedSubGroup[cmd.command] = processedSubGroup[cmd.command]
            ? [...processedSubGroup[cmd.command], sc]
            : [sc];
        }
      });
    });
    output[group] = processedSubGroup;
  });
  return output;
}

export default generateCrossReference;
