this.Courses = React.createClass({

  getInitialState: function() {
    return {
      courses: this.props.data
    };
  },

  getDefaultProps: function() {
    return {
      courses: []
    };
  },

  render: function() {
    var course;
    return React.DOM.div({
      className: 'courses'
    }, React.DOM.h1({
      className: 'course-header'
    }, 'Courses'), React.DOM.table({
      className: 'courses-table'
    }, React.DOM.thead(null,
      React.DOM.tr(null,
        React.DOM.th(null, 'Course'),
        React.DOM.th(null, 'Professor'),
        React.DOM.th(null, 'Start'),
        React.DOM.th(null, 'End'))),
    React.DOM.tbody(null, (function() {
      var _i, _len, _ref, _results;
      _ref = this.state.courses;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        course = _ref[_i];
        _results.push(React.createElement(Course, {
          key: course.id,
          course: course
        }));
      }
      return _results;
    }).call(this))));
  }
});
