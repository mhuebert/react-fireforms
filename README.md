# react-fireforms

[React](facebook.github.io/react/) components that sync with [Firebase](www.firebase.com) paths. Server-side friendly.

First, set up:

```(js)
  var React = require("react")
  var RFS = require("react-firesync")
  var Firebase = require (typeof window == 'undefined') ? require("Firebase") : window.Firebase
  var root = new Firebase("https://react-firesync-demo.firebase.io")
```


## Form Fields

```js
  // Input
  Component = React.createClass({
    render: function(){
      <FF.input label="title" fireRef={root.child("home/title")} />
    }
  })

  // Textarea
  Component = React.createClass({
    render: function(){
      <FF.textarea label="description" fireRef={root.child("home/description")} />
    }
  })
```
## Content

```js
  // Plain elements
  Component = React.createClass({
    render: function(){
      <FF.div fireRef={root.child("home/description")} />
      <FF.span fireRef={root.child("home/description")} />
      <FF.h1 fireRef={root.child("home/title")} />
    }
  })

  // Markdown
  Component = React.createClass({
    render: function(){
      <FF.markdown fireRef={root.child("home/body")} />
    }
  })
```

