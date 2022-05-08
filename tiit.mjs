const camel = (kebab) => kebab.toString().replace(/(-[a-z,0-9]{1})/g, (_, match) => match[1].toUpperCase());

export const tags = [
    "html",
    "base",
    "head",
    "style",
    "title",
    "address",
    "article",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "nav",
    "section",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "main",
    "ol",
    "p",
    "pre",
    "ul",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    "area",
    "audio",
    "map",
    "track",
    "video",
    "embed",
    "object",
    "param",
    "source",
    "canvas",
    "noscript",
    "script",
    "del",
    "ins",
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
    "button",
    "datalist",
    "fieldset",
    "form",
    "input",
    "keygen",
    "label",
    "legend",
    "meter",
    "optgroup",
    "option",
    "output",
    "progress",
    "select",
    "details",
    "dialog",
    "menu",
    "menuitem",
    "summary",
    "content",
    "element",
    "shadow",
    "template",
    "slot",
    "acronym",
    "applet",
    "basefont",
    "big",
    "blink",
    "center",
    "dir",
    "frame",
    "frameset",
    "isindex",
    "listing",
    "noembed",
    "plaintext",
    "spacer",
    "strike",
    "tt",
    "xmp",
];

const elements = {};

export function element(tag, attrs, ...children) {
    let el;
    if (elements[tag]) {
        el = elements[tag].cloneNode();
    } else {
        el = document.createElement(tag);
        elements[tag] = el;
    }
    if (attrs) {
        Object.entries(attrs).forEach(([k, v]) => {
            if (k.startsWith("on")) {
                el.addEventListener(k.substring(2), v);
            } else {
                el.setAttribute(k, v);
            }
        });
    }
    if (tag === "template") {
        el.content.append(...children);
    } else {
        el.append(...children);
    }
    return el;
}

export function register(tag) {
    return Object.defineProperty(globalThis, camel(tag), { value: element.bind(null, tag) });
}

const api = {};
tags.forEach((tag) => {
    api[tag] = { value: element.bind(null, tag) };
});

Object.defineProperties(globalThis, api);
