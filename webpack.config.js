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
    externals: {
        "react": "react",
        "react-dom": "react-dom"
    }
};
