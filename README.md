# react-fireforms

A set of [React](facebook.github.io/react/) form components which implement two-way binding with [Firebase](www.firebase.com).

Combined with [express](http://expressjs.com) and [react-async](https://github.com/andreypopp/react-async), we can render content on the server.

Our strategy:

* **Server-side rendering** using React and the Node.js Firebase library

* Use [react-async](https://github.com/andreypopp/react-async) to subscribe to data in Firebase in a server-side-friendly manner
* 

```(js)
  React = require("react")
  FF = require("react-fireforms")

  Component = React.createClass({
    render: function(){
      <FF.Input firePath="https://react-fireforms-demo.firebase.io/home/title" label="title" />
    }
  })
```

