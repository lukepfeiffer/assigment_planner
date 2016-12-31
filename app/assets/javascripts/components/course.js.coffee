@Course = React.createClass
  render: ->
    React.DOM.tr null,
      React.DOM.td null, @props.course.name
      React.DOM.td null, @props.course.professor
      React.DOM.td null, @props.course.start_time
      React.DOM.td null, @props.course.end_time
