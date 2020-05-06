import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from 'react-datepicker';

class AddEditForm extends React.Component {
  state = {
    id: 0,
    text: '',
    priority: '',
    duedate: new Date().toLocaleString()
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3000', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: this.state.text,
        priority: this.state.priority,
        duedate: this.state.duedate,
        // phone: this.state.phone,
        // location: this.state.location,
        // hobby: this.state.hobby
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 0,
        text: '',
        priority: '',
        duedate: new Date().toLocaleString()
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { id, text, priority, duedate } = this.props.item
      this.setState({ id, text, priority, duedate })
    }
  }

  render() {
    return (
      <Form className="form-group" onSubmit={this.props.todo ? this.submitFormEdit : this.submitFormAdd}>
          <Label for="first">Task Name</Label>
          <Input type="text" name="text" id="text" onChange={this.onChange} value={this.state.text === null ? '' : this.state.text} />
          <Label for="last">Priority</Label>
          {/* <Input type="text" name="last" id="last" onChange={this.onChange} value={this.state.last === null ? '' : this.state.last}  /> */}
          <select id="priority" onChange={this.onChange} className="form-control" value={this.state.priority}> 
                    <option value={'High'}>High</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'Low'}>Low</option>
                  </select>
          <Label for="email">Due Date</Label>
          {/* <Input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email}  /> */}
          <DatePicker
                        selected={ this.state.editdate }
                        onChange={ this.onChange }
                        className="form-control"
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={20}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        // locale="en"
                        minDate={new Date()}
                    />
        
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm
