import { terser } from "rollup-plugin-terser";

export default [
    {
        input: "lib/tit.js",
        output: {
            file: "dist/tit.cjs",
            format: "cjs",
        },
    },
    {
        input: "lib/tit.js",
        output: {
            name: "tit",
            file: "dist/tit.js",
            format: "iife",
        },
        plugins: [terser()],
    },
];
