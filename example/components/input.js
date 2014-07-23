/**
 * @jsx React.DOM
 */
'use strict';

var React       = require('react/addons');
var SubscriptionMixin = require('react-subscriptions').mixin;
var firebaseSubscription = require('firebase-subscriptions').subscription;
var cx = React.addons.classSet;

var InputComponent = React.createClass({
    statics: {
        subscriptions: function (props) {
            return {
                dbValue: firebaseSubscription({
                    ref: props.fireRef,
                    default: props["default"] || ""
                })
            };
        }
    },

    componentWillMount: function () {
        this.setState({nextValue: this.state.dbValue});
    },

    hasUnsavedChanges: function () {
        return this.state.nextValue !== "undefined" &&
            this.state.nextValue !== this.state.dbValue;
    },
    handleChange: function (event) {
        this.setState({nextValue: event.currentTarget.value});
    },
    save: function() {
        var self = this;
        this.setState({savingInProgress: true});
        this.props.fireRef.set(this.state.nextValue, function (error) {
            self.setState({savingInProgress: false});
        });
    },
    mixins: [SubscriptionMixin],
    render: function() {
        return (
                <div>
                <input onChange={this.handleChange} value={typeof this.state.nextValue == 'undefined' ? this.state.fireValue : this.state.nextValue}></input>
                <a onClick={this.save}
                   className={cx({hidden: !this.hasUnsavedChanges() || this.state.savingInProgress})}>Save</a>
                <div className={cx({hidden: !this.state.savingInProgress})}>Saving...</div>
                </div>);
    }
});

module.exports = InputComponent;
