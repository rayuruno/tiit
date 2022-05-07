import { terser } from "rollup-plugin-terser";

export default [
    {
        input: "tiit.mjs",
        output: {
            file: "tiit.cjs",
            format: "cjs",
        },
    },
    {
        input: "tiit.mjs",
        output: {
            name: "tiit",
            file: "tiit.js",
            format: "iife",
        },
        plugins: [terser()],
    },
];
