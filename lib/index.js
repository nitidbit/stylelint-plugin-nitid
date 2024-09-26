import stylelint from 'stylelint'
import noHexColor from './rules/no_hex_color.js'
import useStylekit from './rules/use_stylekit.js'
import oneTopLevelSelector from './rules/one_top_level_selector.js'

const rules = [noHexColor, useStylekit, oneTopLevelSelector].map(
  ({ ruleName, ruleFunction }) =>
    stylelint.createPlugin(`nitid/${ruleName}`, ruleFunction)
)

export default rules
