module.exports = {
  extends: ["react-app", "prettier"],
  plugins: ["jest", "cypress", "prettier"],
  parser: "babel-eslint",
  env: {
    browser: true,
    "cypress/globals": true,
    es6: true,
    "jest/globals": true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
  },
};
