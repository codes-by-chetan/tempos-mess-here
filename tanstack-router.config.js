/** @type {import('@tanstack/router-cli').RouterCliConfig} */
module.exports = {
  routesDirectory: "./src/routes",
  generatedRouteTree: "./src/routeTree.gen.tsx",
  routeFileIgnorePatterns: ["**/*.test.*", "**/*.spec.*"],
  quoteStyle: "single",
};
