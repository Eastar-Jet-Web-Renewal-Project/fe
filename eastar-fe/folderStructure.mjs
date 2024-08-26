import { createFolderStructure } from "eslint-plugin-project-structure";

export const folderStructureConfig = createFolderStructure({
  structure: {
    children: [
      {
        name: "*",
      },
      {
        name: "src",
        children: [
          { name: "App.tsx" },
          { name: "main.tsx" },
          { name: "vite-env.d.ts" },
          {
            name: "@commons",
            children: [
              { name: "components", ruleId: "componentRule" },
              { name: "constants", ruleId: "tsRule" },
              { name: "hooks", ruleId: "hooksRule" },
              { name: "layouts", ruleId: "componentRule" },
              { name: "routes", ruleId: "componentRule" },
              { name: "services", ruleId: "tsRule" },
              { name: "stores", ruleId: "tsRule" },
              { name: "types", ruleId: "tsRule" },
              { name: "utilities", ruleId: "tsRule" },
            ],
          },
          { name: "assets", children: [{ name: "*" }] },
          {
            name: "domains",
            children: [
              {
                name: "*",
                children: [
                  { name: "apis", ruleId: "tsRule" },
                  { name: "components", ruleId: "componentRule" },
                  { name: "hooks", ruleId: "hooksRule" },
                  { name: "layouts", ruleId: "componentRule" },
                  { name: "pages", ruleId: "componentRule" },
                  { name: "types", ruleId: "tsRule" },
                ],
              },
            ],
          },
          {
            name: "styles",
            children: [
              { name: "*.styles.ts" },
              { name: "Theme", children: [{ name: "*.theme.ts" }] },
            ],
          },
        ],
      },
    ],
  },
  rules: {
    hooksRule: {
      children: [
        { name: ".gitkeep" },
        { name: "use{PascalCase}.ts" },
        {
          name: "use{PascalCase}",
          children: [
            { name: ".gitkeep" },
            { name: "use{PascalCase}.ts" },
            { name: "use{PascalCase}", ruleId: "hooksRule" },
          ],
        },
      ],
    },
    componentRule: {
      children: [
        { name: ".gitkeep" },
        { name: "{PascalCase}(.styled)?.tsx" },
        {
          name: "{PascalCase}",
          children: [
            { name: ".gitkeep" },
            { name: "{PascalCase}(.styled)?.tsx" },
            { name: "{PascalCase}", ruleId: "componentRule" },
          ],
        },
      ],
    },
    tsRule: {
      children: [
        { name: ".gitkeep" },
        { name: "{camelCase}(.*)?.ts" },
        {
          name: "{camelCase}",
          children: [
            { name: ".gitkeep" },
            { name: "{camelCase}(.*)?.ts" },
            { name: "{camelCase}", ruleId: "tsRule" },
          ],
        },
      ],
    },
  },
});
