# stylelint-plugin-nitid

## Rules

### nitid/no-hex-color
Hex colors should be defined as named variables

### nitid/use-stylekit
Some declarations should only be used in mixins
example useage:
```
rules: {
  'nitid/use-stylekit': [['font-size', 'font-family'], true],
},
```

### nitid/one-top-level-selector
A css file should have a single top level selector, with a unique id or class,
that corresponds to a single top level element in the partial or component
