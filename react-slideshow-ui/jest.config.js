module.exports = {
    setupFiles: [
        "./test/setup.js"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(\\.|/)(test|spec)\\.(jsx?|tsx?)$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    globals: {
        'ts-jest': {
            diagnostics: false
        }
    }
}