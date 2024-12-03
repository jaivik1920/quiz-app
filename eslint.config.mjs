import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: {
    ...globals.browser,
    ...globals.jest
  }, }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  // {
  //   plugins: {
  //     react: pluginReact, 
  //   },
  //   rules: {
  //     "react/react-in-jsx-scope": "off", 
  //     "react/jsx-uses-react": "off",    
  //     "react/jsx-uses-vars": "warn",   
  //   },
  // },
];