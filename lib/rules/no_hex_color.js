import stylelint from "stylelint";

const ruleName = "no-hex-color";

const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: "Use a color variable name, not a hex color",
});

const ruleFunction = (primaryOption, secondaryOptions) => {
  return (postcssRoot, postcssResult) => {
    // Iterate through each node in the root
    postcssRoot.walkDecls((decl) => {
      // Skip variable declarations (SCSS, Sass, Less)
      if (decl.prop.startsWith("$") || decl.prop.startsWith("@")) return;

      // Check if the declaration's value contains a hex color
      if (decl.value.match(/#[0-9A-Fa-f]{3,6}/g)) {
        stylelint.utils.report({
          ruleName,
          result: postcssResult,
          node: decl,
          message: messages.expected,
        });
      }
    });
  };
};

export default { ruleFunction, ruleName };
