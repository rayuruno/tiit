import { tags, element, register } from "./tiit.mjs";
import { expect } from "@open-wc/testing";

describe("tags", () => {
    tags.forEach((tag) => {
        it("works without arguments", () => expect(globalThis[tag]()).to.be.ok);
        it("works with atrs", () => expect(globalThis[tag]({ id: "1" })).to.be.ok);
        it("works with children", () => expect(globalThis[tag]({ id: "1" }, button())).to.be.ok);
    });

    it("calls addListener for on* attrs", (done) => {
        button({
            onclick() {
                expect(this.hasAttribute("onclick")).to.be.false;
                expect(this).to.be.instanceOf(HTMLButtonElement);
                done();
            },
        }).click();
    });
});

describe("register", () => {
    it("registers (custom) tag", () => {
        register("x-custom");
        expect(xCustom().localName).to.eq("x-custom");
    });
});

describe("element", () => {
    it("returns instance of a html element", async () => {
        expect(element("button")).to.be.instanceOf(HTMLButtonElement);
    });
});

describe("template", () => {
    it("appends to content", () => {
        const t = template(null, button(null, "hello"));
        expect(t.content.cloneNode(true).firstElementChild).to.be.instanceOf(HTMLButtonElement);
    });
});
