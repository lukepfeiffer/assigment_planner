var NewCourseForm = React.createClass({

  getInitialState: function(){
    return {
      name: "",
      description: "",
      start_time: "",
      end_time: "",
      professor: "",
      days_of_the_week: "",
      user_id: ""
    };
  },

  newCourseSubmit: function(event){
    event.preventDefault();
    console.log("submitted");
  },

  handleNameChange: function(event){
    this.setState({ name: event.target.value});
  },

  handleProfessorChange: function(event){
    this.setState({ professor: event.target.value});
  },

  handleDescriptionChange: function(event){
    this.setState({ description: event.target.value});
  },

  handleEndTimeChange: function(event){
    this.setState({ end_time: event.target.value});
  },

  handleStartTimeChange: function(event){
    this.setState({ start_time: event.target.value});
  },

  handleDaysChange: function(event){
    this.setState({ days: event.target.value});
  },

  render: function(){
    return React.DOM.div({ className: 'form' },
      React.DOM.fieldset({ className: 'fields' },
        React.DOM.dl({ className: 'form-fields' },

          React.DOM.dt({ className: 'dt' },
            React.DOM.label({ className: 'label' },
              'Course Name'
            )
          ),

          React.DOM.dd({ className: 'input' },
            React.DOM.input({
                name: 'course[name]',
                type: 'string',
                placeholder: 'Chemistry',
                value: this.state.name,
                onChange: this.handleNameChange
              }
            )
          ),

          React.DOM.dt({ className: 'dt' },
            React.DOM.label({ className: 'label' },
              'Professor'
            )
          ),

          React.DOM.dd({ className: 'input' },
            React.DOM.input({
                name: 'course[professor]',
                type: 'string',
                placeholder: 'Dr. Smith',
                value: this.state.professor,
                onChange: this.handleProfessorChange
              }
            )
          ),

          React.DOM.dt({ className: 'dt' },
            React.DOM.label({ className: 'label' },
              'Description'
            )
          ),


          React.DOM.dd({ className: 'textarea' },
            React.DOM.textarea({
                name: 'course[description]',
                type: 'text',
                placeholder: 'Some elaborate description',
                value: this.state.description,
                onChange: this.handleDescriptionChange
              }
            )
          ),

          React.DOM.div({ className: 'inline' },
            React.DOM.dt({ className: 'dt' },
              React.DOM.label({ className: 'label' },
                'Start Time'
              )
            ),

            React.DOM.dd({ className: 'time-input' },
              React.DOM.input({
                  name: 'course[start_time]',
                  type: 'time',
                  placeholder: '3:00pm',
                  value: this.state.start_time,
                  onChange: this.handleStartTimeChange
                }
              )
            ),

            React.DOM.dt({ className: 'dt' },
              React.DOM.label({ className: 'label' },
                'End Time'
              )
            ),

            React.DOM.dd({ className: 'time-input' },
              React.DOM.input({
                  name: 'course[name]',
                  type: 'time',
                  placeholder: 'Chemistry',
                  value: this.state.end_time,
                  onChange: this.handleEndTimeChange
                }
              )
            )
          )
        )
      ),

      React.DOM.fieldset(
        { className: 'actions' },

        React.DOM.button(
          { className: 'sumbit' },
          'Submit'
        )
      )
    )
  }
});
