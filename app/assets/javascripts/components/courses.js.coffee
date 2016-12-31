@Courses = React.createClass
  getInitialState: ->
    courses: @props.data
  getDefaultProps: ->
    courses: []
  render: ->
    React.DOM.div
      className: 'courses'
      React.DOM.h1
        className: 'course-header'
        'Courses'
      React.DOM.table
        className: 'courses-table'
        React.DOM.thead null,
          React.DOM.tr null,
            React.DOM.th null, 'Course'
            React.DOM.th null, 'Professor'
            React.DOM.th null, 'Start'
            React.DOM.th null, 'End'
        React.DOM.tbody null,
          for course in @state.courses
            React.createElement Course, key: course.id, course: course
