const nextJest = require("next/jest");
// const path = require("path");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    // In some cases need to add:
    // "^app/(.*)$": "<rootDir>/src/app/$1",
    // "^components/(.*)$": "<rootDir>/src/components/$1",
    // "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    // path.join(__dirname, "test/setup"),
  ],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
