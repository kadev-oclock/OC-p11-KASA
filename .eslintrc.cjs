// eslint-disable-next-line no-undef
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "react-hooks"],
  "rules": {
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react-hooks/exhaustive-deps": 1,
    "react-hooks/rules-of-hooks": "error"
  }
}
