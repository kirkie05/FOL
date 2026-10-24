import { defineConfig, globalIgnores } from "eslint/config";
import nextCore from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([...nextCore, ...nextTs, { rules: { "react/no-unescaped-entities": "off" } }, globalIgnores([".next/**", "coverage/**", "functions/lib/**"])]);
