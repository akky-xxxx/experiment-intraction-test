module.exports = {
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  testMatch: [
    "**/?(*.)test.ts?(x)"
  ],
  testEnvironment: "jsdom",
  preset: "ts-jest",
}
