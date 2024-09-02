import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

import {
  projectStructureParser,
  projectStructurePlugin,
} from "eslint-plugin-project-structure";
import { folderStructureConfig } from "./folderStructure.mjs";

export default [
  { ignores: ["dist/**", "node_modules/**", "public/**"] },
  {
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    ...pluginReact.configs.flat.recommended,
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    files: [
      "**/*.{js,mjs,cjs,ts,jsx,tsx}",
      // 확장자가 없는 파일
      // [참고] https://eslint.org/docs/latest/use/configure/configuration-files#specifying-files-without-extension
      "**/!(*.*)",
      "**/*.json",
      // 빈 폴더 인식
      "**/.gitkeep",
    ],
    languageOptions: {
      parser: projectStructureParser,
    },
    plugins: {
      "project-structure": projectStructurePlugin,
    },
    rules: {
      "project-structure/folder-structure": ["warn", folderStructureConfig],
    },
  },
];
