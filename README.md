# postcss-bg
[PostCSS]: https://github.com/postcss/postcss
A [PostCSS] plugin to replace `bg:` with `background`

## Example

Input:
```css
.blackbriar {
  bg: #666;
}
```

Output:
```css
.blackbriar {
  background: #666;
}
```

## Usage
Install:
```
npm i -D postcss-bg
```

Then include the plugin:
```js
postcss([ require('postcss-bg')(options) ])
```

See [PostCSS] docs for examples for your environment.

## Licence

Released under the MIT license.
