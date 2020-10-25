@ifaxity/hyper
==============

A modern hyperscript inspired library with IE9+ support.

Supports JSX and fragments, through this typescript config.

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "es2015",
    "moduleResolution": "node",
    "lib": ["es5", "es6", "dom"],
    "jsx": "react",
    "jsxFactory": "h",
    "jsxFragmentFactory": "Fragment",
  }
}
```

And then in you code import the required members

```tsx
import { h, Fragment, render } = from '@ifaxity/hyper';

function Button(props) {
  function onClick() {
    console.log('CLICKED');
  }

  return (
    <button onClick={props.onClick || onClick}>{props.children}</button>
  );
}

const app = (
  <>
    <h1>Click the button below</h1>
    <Button onClick={() => alert('CLICKED')}>Click me</Button>
  </>
);

render(app, '#app');
```

Dont want to use JSX? Thats fine.
---------------------------------

Thats fine!
You can use the tag shorthands (only for the most common tags) or the h factory directly.

```ts
import { h, button, render, fragment } = from '@ifaxity/hyper';

function Button(props) {
  function onClick() {
    console.log('CLICKED');
  }

  return button({ onClick: props.onClick || onClick }, props.children);
}

const app = fragment(
  h('h1#header'),
  h(Button, { onClick: () => alert('CLICKED') }, 'Click me')
);

render(app, '#app');
```
