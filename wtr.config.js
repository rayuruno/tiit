import { playwrightLauncher } from "@web/test-runner-playwright";

export default {
    watch: true,
    nodeResolve: true,
    rootDir: "./",
    files: ["./lib/**.test.js"],
    browsers: [
        playwrightLauncher({ product: "chromium" }),
        playwrightLauncher({ product: "firefox" }),
        playwrightLauncher({ product: "webkit" }),
    ],
};
