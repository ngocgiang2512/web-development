var React = require ('react');
var ReactDOM = require('react-dom');

var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  getInitialState: function() {
    return {message: 'Hello'};
  },

  getDefaultProps: function() {
    return {
      name: 'Mary'
    };
  },

  handleClick: function() {
    alert(this.state.message + ' ' + this.props.name);
  },

  render: function() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <button onClick={this.handleClick}>
          Say hello
        </button>
      </div>
    );
  }
});

ReactDOM.render(<Greeting />, document.getElementById('root'));