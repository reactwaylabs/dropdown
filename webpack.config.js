const packageJson = require("./package.json");
let externals = {};

for (const key in packageJson.dependencies) {
    if (packageJson.dependencies.hasOwnProperty(key)) {
        externals[key] = key;
    }
}

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "./dist/simplr-dropdown.js",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx"]
    },
    externals: externals
};
