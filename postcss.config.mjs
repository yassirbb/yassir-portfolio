import { breakpoints } from "./src/styles/breakpoints.mjs";

const breakpointPattern = /^\((--[a-z0-9-]+)\)$/;

const expandBreakpointAliases = {
  postcssPlugin: "expand-breakpoint-aliases",
  AtRule: {
    media(atRule) {
      const alias = atRule.params.match(breakpointPattern)?.[1];

      if (!alias) return;

      const condition = breakpoints[alias];

      if (!condition) {
        throw atRule.error(
          `Unknown breakpoint alias: ${alias}`
        );
      }

      atRule.params = condition;
    }
  }
};

const postcssConfig = {
  plugins: [expandBreakpointAliases]
};

export default postcssConfig;
