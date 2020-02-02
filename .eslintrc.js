module.exports = {
  extends: ['@okatechnology/eslint-config'],
  rules: {
    "react/prop-types": [2, {
      ignore: ['children']
    }],
    "react/no-children-prop": 0,
  }
}
