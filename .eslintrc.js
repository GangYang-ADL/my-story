module.exports = {
  extends: ['@/eslint-config-vue'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    semi: "off",
    quotes: ["error", "single"],
  },
}
