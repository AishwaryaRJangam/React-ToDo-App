import React, { Component } from 'react';
import {setSearchText,setPriorityFilter} from './actions/taskAction'
import FilterScreen from './containers/filterTask';
import { connect } from 'react-redux'
import _ from 'lodash'

import CreateTodo from './containers/CreateTodo'
import Table from './containers/Table'


class Tasky extends Component {
    constructor(){
        super();
    }
    
    onPriorityFilterChange = (value) => {
        this.props.setPriorityFilter(value);
    };
    onSearchTextChange = (text) => {
        this.props.setSearchText(text);
    };
    render() {

        let taskys = (this.props.priorityFilter!=="All")?
            _.filter(this.props.tasks,(obj) => { return (obj.categories===this.props.priorityFilter &&
                (_.includes(obj.title, this.props.searchText)))})
            : _.filter(this.props.tasks,(obj) => { return (_.includes(obj.title, this.props.searchText ))})
     
        return (
            

             <div className='container'>
                 <div className='row'>
                     <div className='col-md-8 text-left'>
                          <h2>ToDo App</h2>
                    </div>
                    <div className='col-md-4 text-right'> <CreateTodo /></div>

                    </div>
                    <FilterScreen selectedPriority={this.props.priorityFilter}
                                  onPriorityFilterChange={this.onPriorityFilterChange}
                                  searchText={this.props.searchText}
                                  onSearchTextChange={this.onSearchTextChange}/>
                     <div className='row'>
                      <Table />
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    tasks:state.task.task,
    priorityFilter:state.task.priorityFilter,
    searchText:state.task.searchText
});


const mapActionToProps = ({
    setPriorityFilter,setSearchText,
});

export default connect(mapStateToProps, mapActionToProps)(Tasky);


