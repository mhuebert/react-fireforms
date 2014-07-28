/**
 * @jsx React.DOM
 */
'use strict';

var React       = require('react');
var ReactAsync  = require('react-async');
var superagent  = require('superagent');
var Firebase = (typeof(window) == 'undefined') ? require("firebase") : Firebase;

var FF = require("../src/fields")


var fireRef = new Firebase("https://react-fireforms.firebaseio.com/");

var MainPage = React.createClass({

  render: function() {
    return (
      <div className="MainPage">
        <h1>React-FireFields Example</h1>
        <FF.input fireRef={fireRef.child("demoTitle")} label="Title"/>
        <p><a href="/users/doe">Login</a></p>
      </div>
    );
  }
});

var App = React.createClass({

  render: function() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/assets/style.css" />
        </head>
        <MainPage />
        <script type='text/javascript' src='https://cdn.firebase.com/js/client/1.0.17/firebase.js'></script>
        <script src="/assets/bundle.js" />
      </html>
    );
  }
});

module.exports = App;

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.renderComponent(App(), document);
  };
}
