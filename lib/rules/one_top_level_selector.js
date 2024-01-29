const stylelint = require('stylelint');

const ruleName = 'one-top-level-selector';
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: 'A file should only contain one top level selector. If this file is an exception, use // stylelint-ignore nitid/one-top-level-selector',
});

module.exports = stylelint.createPlugin(ruleName, () => {
  return (postcssRoot, postcssResult) => {
    // Track the number of top-level selectors
    let topLevelSelectorCount = 0;

    // Iterate through each node in the root
    postcssRoot.walkRules((rule) => {
      // Check if the rule is a top-level selector
      if (rule.parent === postcssRoot) {
        topLevelSelectorCount += 1;
        // If more than one top-level selector is found, report an error
        if (topLevelSelectorCount > 1) {
          stylelint.utils.report({
            ruleName,
            result: postcssResult,
            node: rule,
            message: messages.rejected,
          });
        }
      }
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
