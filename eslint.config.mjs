import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  prettierConfig,
]);
