import typescript from "rollup-plugin-typescript2";
import uglify from "rollup-plugin-uglify";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    entry: "./src/index.ts",
    output: {
        file: "./dist/simplr-dropdown.js",
        format: "umd",
        name: "simplr-dropdown"
    },
    plugins: [
        typescript(),
        production ? uglify() : undefined
    ]
}
