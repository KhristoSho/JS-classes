import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2024,
      },
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn",
      "no-console": "off",
      "no-const-assign": "error",
      "no-duplicate-case": "error",
      "no-empty": "warn",
      "no-extra-semi": "warn",
      "no-func-assign": "error",
      "no-implicit-globals": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-misleading-character-class": "error",
      "no-sparse-arrays": "error",
      "no-unexpected-multiline": "error",
      "no-unreachable": "error",
      "no-unsafe-finally": "error",
      "no-useless-escape": "warn",
      "require-atomic-updates": "error",
      "use-isnan": "error",
      "valid-typeof": "error",
      "semi": ["warn", "always"],
      "quotes": ["error", "double"],
      "indent": ["warn", 2],
      "eqeqeq": ["warn", "always"], 
    },
  },
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      
    },
    rules: {
      "jest/prefer-expect-assertions": "off"
    }
  },
  js.configs.recommended, 
  {
    ignores: [
      "**/coverage/**",
      "**/node_modules/**",
      "**/dist/**",
    ],
  }
];