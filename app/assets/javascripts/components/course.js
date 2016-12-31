this.Course = React.createClass({
  render: function() {
    return React.DOM.tr(null,
      React.DOM.td(null, this.props.course.name),
      React.DOM.td(null, this.props.course.professor),
      React.DOM.td(null, this.props.course.start_time),
      React.DOM.td(null, this.props.course.end_time));
  }
});
