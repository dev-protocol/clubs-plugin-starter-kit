import typescriptEslint from "@typescript-eslint/eslint-plugin";
import functional from "eslint-plugin-functional";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/node_modules", "**/dist"],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:functional/all",
    "prettier",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        functional,
    },

    languageOptions: {
        globals: {},
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: "tsconfig.json",
        },
    },
}, {
    files: ["**/*.ts"],

    rules: {
        "functional/prefer-immutable-types": "off",
        "functional/functional-parameters": "off",
    },
}, {
    files: ["**/*.test.ts"],

    rules: {
        "functional/no-conditional-statements": "off",
        "functional/no-expression-statements": "off",
        "functional/functional-parameters": "off",
        "functional/no-return-void": "off",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
    },
}, {
    files: ["**/rollup.config.js"],

    rules: {
        "functional/prefer-immutable-types": "off",
        "functional/no-conditional-statements": "off",
    },
}];