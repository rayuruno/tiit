import { fixture, html } from '@open-wc/testing';
import { tags, element, default as tiit } from "./tiit.js"
const { assert } = console

describe('tags', () => {
  tags.forEach((tag) => {
      it('works without arguments', () => assert(globalThis[tag]()) )
      it('works with atrs', () => assert(globalThis[tag]({ id: "1" })) )
      it('works with children', () => assert(globalThis[tag]({ id: "1" }, button())) )
  });
});

describe('tiit', () => {
  it("registers (custom) tag", () => {
    tiit("x-custom")
    assert("x-custom" === xCustom().localName);
  })
})

describe('element', () => {
  it('returns instance of a html element', async () => {
    assert(element("button") instanceof HTMLButtonElement)
  });
})