import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import ModalButton from './ModalButton';
import { connect } from 'react-redux'
import { addTodo } from '../actions/actionCreator'
import {bindActionCreators} from 'redux'
import { Button, ModalHeader, ModalBody } from 'reactstrap'

class CreateTodo extends Component {
    constructor (props) {
    super(props)
    this.state = {
        todotext: '',
        tododesc: '',
        todopriority: '',
      startDate: new Date().valueOf(),
      modalOpened: false

    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChangeTodoText = this.onChangeTodoText.bind(this)
    this.onChangeTodoDesc = this.onChangeTodoDesc.bind(this)
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this)

    this.toggleModal = this.toggleModal.bind(this);

  }
  toggleModal() {
    this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate)
  }
  onChangeTodoText(e){  
    this.setState({
        todotext: e.target.value,
    })
}
onChangeTodoDesc(e){  
    this.setState({
        tododesc: e.target.value,
    })
}

onChangeTodoPriority(e){  
    this.setState({
        todopriority: e.target.value,
    })
}

  render() {
    const closeBtn = <button className="close" onClick={this.toggleModal}>&times;</button>

    const label = this.props.buttonLabel

    let button = ''
    let title = ''

    return (

      <div className={'modalWrapper'} >

      <ModalButton handleClick={this.toggleModal}>
                {/* <i class="fa fa-plus-circle" aria-hidden="true"></i> */}
          <strong>+</strong>
          </ModalButton>
          <Modal
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          contentLabel="Modal with image"
          >

        <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
        <div className="form-group">
            <label>Summary</label>
              <input onChange={this.onChangeTodoText} value={this.state.todotext} type="text" className="form-control" id="inputEmail3" placeholder="Summary"/>
            <label>Description</label>
              <input onChange={this.onChangeTodoDesc} value={this.state.tododesc} type="textarea" className="form-control" id="desc" placeholder="Description"/> 
              <div className="row"> 
                  <div className="col-md-6">
                  <label>Due Date</label>
                        <DatePicker
                            selected={ this.state.startDate }
                            onChange={ this.handleChange }
                            className="form-control"
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={20}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            // locale="en"
                            minDate={new Date()}
                        />
                    </div>
           
                    <div className="col-md-6">
                      <label>Priority</label>
                        <select id={"selPriority"} className={'form-control'} onChange={this.onChangeTodoPriority} value={this.state.todopriority}> 
                                <option value={'High'}>High</option>
                                <option value={'Medium'}>Medium</option>
                                <option value={'Low'}>Low</option>
                              </select>
                   </div>
          </div>
          {/* <button className="btn btn-primary">Show Date</button> */}
          <button type="button" 
          onClick={ () => this.setState({ todotext: '', tododesc: '', todopriority:'' , startDate: ''}) } 
          style={{marginTop: "25px", marginRight: "15px"}} 
          className="btn btn-danger">Cancel</button>
          
          <button type="button" 
          onClick={() =>{ this.props.addTodo(this.state.todotext, this.state.tododesc, this.state.todopriority, this.state.startDate); 
            this.setState({ todotext: '',tododesc: '', todopriority: '', startDate: '' }) } } 
                      style={{marginTop: "25px"}} className="btn btn-success">Add Todo</button> 
        </div>
        </Modal>
        </div>
    );
  }
  
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addTodo
}, dispatch)
}



export default connect(null, mapDispatchToProps)(CreateTodo)