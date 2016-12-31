this.CourseForm = React.createClass({
  getIntitialState: function() {
    return
    {
      name: ""
      professor: ""
      start_time: ""
      end_time: ""
    };
  },

  render: function() {
    return React.DOM.form(
      { className: "course-form" },

      React.DOM.div(
        { className: "field-container" },

        React.DOM.label(
          "Course Name"
        ),

        React.DOM.input(
          {
            type: "text",
            className: "text-field",
            placeholder: "Calculus 1",
            name: "name",
            value: this.state.name,
            onChange: this.handleOnChange
          }
        )
      ),

      React.DOM.div(
        { className: "field-container" },

        React.DOM.label(
          "Professor Name"
        ),

        React.DOM.input(
          {
            type: "text",
            className: "text-field",
            placeholder: "Dr. Smith",
            name: "professor",
            value: this.state.name,
            onChange: this.handleOnChange
          }
        )
      ),

      React.DOM.div(
        { className: "field-container" },

        React.DOM.label(
          "Start Time"
        ),

        React.DOM.input(
          {
            type: "time",
            step: "1",
            className: "time-field",
            placeholder: "10:35am",
            name: "end_time",
            value: this.state.name,
            onChange: this.handleOnChange
          }
        )
      ),

      React.DOM.div(
        { className: "field-container" },

        React.DOM.label(
          "End Time"
        ),

        React.DOM.input(
          {
            type: "time",
            step: "1",
            className: "time-field",
            placeholder: "11:40am",
            name: "end_time",
            value: this.state.name,
            onChange: this.handleOnChange
          }
        )
      ),

      React.DOM.button(
        {
          type: "submit",
          className: "submit",
          disable: !this.valid()
        }, "Add Course"
      )
    );
  },

  handleChange: function(event) {
    var name;
    var professor;
    var start_time;
    var end_time;
    return name       = event.target.name;
    return professor  = event.target.professor;
    return start_time = event.target.start_time;
    return end_time   = event.target.end_time;
  },

  handleSumbit: function(event) {
    var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
    event.preventDefault();
    return $.post("",

    { course: this.state },

    bind(function(data) {
      this.props.handleNewCourse(data);
      return this.setState(this.getInitialState());
    },

    this), "JSON");
  },

  render: function() {
    return React.DOM.form(
      {
        className: 'course-form',
        onSubmit: this.handleSumbit
      }
    );
  }
});
