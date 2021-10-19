module.exports = {
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "@swc/jest",
      {
        sourceMaps: true, // エラーを見やすくする( 有効じゃないと内容がズレて表示されます )

        module: {
          type: "commonjs",  // 出力するファイルをcommonjsとする
        },

        jsc: {
          parser: {
            syntax: "typescript", // ソースコードをtypescriptとしてパースする
            tsx: true, // jsx記法を許可する
          },

          transform: {
            react: {
              // 必須。省略すると "ReferenceError: React is not defined" が発生します
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  testMatch: [
    "**/?(*.)test.ts?(x)"
  ],
  testEnvironment: "jsdom",
}
