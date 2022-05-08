# tit

shorthand html tag methods to type less html dom api

## examples


```js
div()
```

```js
const form = new FormData
label({}, "email", input({ type: "email", oninput: () => form.email = value }))
```


```js
button({ onclick() { dispatchEvent(new Event("help")) } },
    span({class: "material-icons"}, "help")
)
```
