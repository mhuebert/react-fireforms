var React       = require('react');
var SubscriptionMixin = require('react-subscriptions').mixin;

var InputComponent = React.createClass({
    statics: {
        subscriptions: function (props) {
            return {
                testSubscription: {
                    intervalID: null,
                    subscribe: function (cb) {
                        console.log("subcribe!", +new Date());

                        var count = 0;

                        this.intervalID = setInterval(function () {
                            cb(count++);
                        }, 1000);
                    },
                    unsubscribe: function () {
                        console.log("unsubscribe!", +new Date());
                        console.log(this, this.intervalID);
                        clearInterval(this.intervalID);
                    },
                    default: []
                }
            };
        }
    },
    mixins: [SubscriptionMixin],
    componentDidMount: function () {
        console.log("mounted!");
    },
    render: function() {
        return (<div>{this.state.testSubscription}</div>);
    }
});

module.exports = InputComponent;
