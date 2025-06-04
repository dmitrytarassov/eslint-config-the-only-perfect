import js from "@eslint/js";
import tsEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        ...globals.es2025,
      },
    },
    plugins: {
      "@typescript-eslint": tsEslint,
      prettier,
      import: importPlugin,
    },
    rules: {
      "import/no-unresolved": "off",
      "import/named": "off",
      "no-async-promise-executor": "off",
      "import/order": [
        1,
        {
          groups: [
            "external",
            "builtin",
            "internal",
            "sibling",
            "parent",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
          },
        },
      ],
      "prettier/prettier": "warn",
    },
  },
];
