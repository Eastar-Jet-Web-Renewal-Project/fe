import { createFolderStructure } from "eslint-plugin-project-structure";

export const folderStructureConfig = createFolderStructure({
  structure: {
    children: [
      {
        // Allow any files in the root of your project, like package.json, eslint.config.mjs, etc. You can add rules for them separately.
        // You can also add exceptions like this: "(?!folderStructure)*"
        name: "*",
      },
      {
        name: "src",
        children: [
          {
            name: "App.tsx",
          },
          {
            name: "main.tsx",
          },
          {
            name: "vite-env.d.ts",
          },
          {
            name: "@commons",
            children: [
              {
                name: "components",
                children: [
                  { name: "{PascalCase}.tsx" },
                  {
                    name: "*",
                  },
                ],
              },
              {
                name: "constants",
              },
              {
                ruleId: "hooksRule",
              },
              {
                name: "layouts",
              },
              {
                name: "routes",
              },
              {
                name: "services",
              },
              {
                name: "stores",
              },
              {
                name: "types",
                children: [{ name: "{camelCase}" }],
              },
              {
                name: "utilities",
              },
            ],
          },
          {
            name: "assets",
          },
          {
            name: "domains",
            children: [
              { name: "apis" },
              { name: "components", children: [{ name: "{PascalCase}" }] },
              { ruleId: "hooksRule" },
              { name: "layouts", children: [{ name: "{PascalCase}" }] },
              { name: "pages", children: [{ name: "{PascalCase}" }] },
              { name: "types", children: [{ name: "{camelCase}" }] },
            ],
          },
        ],
      },
    ],
  },
  rules: {
    hooksRule: {
      name: "hooks",
      children: [
        {
          name: "use{PascalCase}",
        },
      ],
    },
  },
});
