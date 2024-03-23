/** @type {import('prettier').Config} */
const prettier = {
  endOfLine: "lf",
  experimentalTernaries: true,
  tabWidth: 2,
  printWidth: 120,
  useTabs: false,
  bracketSpacing: true,
  trailingComma: "all",
  bracketSameLine: false,
  singleQuote: true,
  arrowParens: "avoid",
  plugins: [
    "prettier-plugin-packagejson",
    "prettier-plugin-prisma",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-multiline-arrays",
  ],
  multilineArraysWrapThreshold: 1,
};

export { prettier };
