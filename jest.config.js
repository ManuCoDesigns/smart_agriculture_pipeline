/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',               // Preset to use ts-jest for handling TypeScript files
  testEnvironment: 'node',         // Environment in which tests will run (Node.js)
  transform: {
    "^.+\\.tsx?$": "ts-jest"       // Use ts-jest to transform TypeScript files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // Extensions Jest will look for in your project
  testMatch: ["**/__tests__/**/*.test.ts"], // Match files in the __tests__ directory ending in .test.ts
  verbose: true                    // (Optional) Makes Jest output more detailed information during testing
};