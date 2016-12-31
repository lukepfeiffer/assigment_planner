this.Courses = React.createClass({

  getInitialState: function() {
    return { courses: this.props.data };
  },

  getDefaultProps: function() {
    return { courses: [] };
  },

  render: function() {
    return React.DOM.div(
      { className: 'courses' },

      React.DOM.h1(
        { className: 'course-header' },
        'Courses'
      ),

      React.DOM.table(
        { className: 'courses-table' },

        React.DOM.thead(null,

          React.DOM.tr(null,
            React.DOM.th(null, 'Course'),
            React.DOM.th(null, 'Professor'),
            React.DOM.th(null, 'Start'),
            React.DOM.th(null, 'End')
          )

        ),

        React.DOM.tbody(null, (function() {
          var i, length, ref, results;
          ref = this.state.courses;
          results = [];

          for (i = 0, length = ref.length; i < length; ++i) {
            course = ref[i];

            results.push(React.createElement
              (Course,
                {
                  key: course.id,
                  course: course
                }
              )
            );
          }

          return results;
        }).call(this))
      )
    );
  },

  addCourse: function() {
    return React.DOM.div(
      { className: "courses" },

      React.DOM.h2(
        { className: "name" }, "Courses"
      ),

      React.createElement(RecordForm,
        {
          handleNewCourse: this.addCourse
        }
      ),

      React.DOM.hr(null)
    );
  }
});
