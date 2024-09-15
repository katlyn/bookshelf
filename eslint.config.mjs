import eslint from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  ...tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs["flat/recommended"],
    {
      rules: {
        "sort-imports": "error",
      },
    },
  ),
);
