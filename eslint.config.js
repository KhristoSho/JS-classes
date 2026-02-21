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
        ...globals.es2021,
      },
    },
    rules: {},
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