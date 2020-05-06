import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  setVisibilityFilter
} from "../actions/actionCreator";

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../actions/actionsTypes";
import { bindActionCreators } from "redux";
import ModalForm from './Modal'

class Table extends Component {
  state={
    curTime : new Date().toLocaleString(),
  }


  render() {
    return (
      <div style={{width: "100%"}}>
        <nav style={{ marginTop: "60px" }}>
          <ol className="breadcrumb">
            <li
              className={"breadcrumb-item "+ (this.props.visibilityFilter === SHOW_ALL ? 'active' : '') }
              onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}
            >
             All
            </li>
            <li
               className={"breadcrumb-item "+ (this.props.visibilityFilter === SHOW_COMPLETED ? 'active' : '') }
              onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}
            >
              Completed
            </li>
            <li
               className={"breadcrumb-item "+ (this.props.visibilityFilter === SHOW_ACTIVE ? 'active' : '') }
              onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}
            >
              Active
            </li>
          </ol>
        </nav>
        {this.props.todos.length !== 0 ? (
          <table
            style={{ marginTop: "40px" }}
            className="table table-hover table-dark"
          >
            <thead>
              <tr>
                <th scope="col">Summary</th>
                {/* <th scope="col">Description</th> */}
                <th scope="col">Priority</th>
                <th scope="col">Created On</th>
                <th scope="col">Due By</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.todos.map(todo => (
                <tr key={todo.id}>
                  <td
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none"
                    }}
                  >
                    {todo.text} {todo.completed === true ? "(completed)" : ""}
                  </td>
                  {/* <td
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none"
                    }}
                  >
                    {todo.description} {todo.completed === true ? "(completed)" : ""}
                  </td> */}
                  <td
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none"
                    }}
                  >
                    {todo.priority} {todo.completed === true ? "(completed)" : ""}
                  </td>

                  <td
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none"
                    }}
                  >
                    {this.state.curTime} {todo.completed === true ? "(completed)" : ""}
                  </td>

                  <td
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none"
                    }}
                  >
                    {todo.duedate.toLocaleString()} {todo.completed === true ? "(completed)" : ""}
                  </td>
                  <td>
                    <span>
                     <ModalForm buttonLabel="" id={todo} updateState={this.props.updateState}/>
                    </span>
                    <span
                      className="fas fa-minus-circle"
                      onClick={() => this.props.deleteTodo(todo.id)}
                      style={{
                        color: "red",
                        fontSize: "20pt",
                        marginRight: "20px"
                      }}
                    />
                    <span
                      className="fas fa-check-circle"
                      onClick={() => this.props.toggleTodo(todo.id)}
                      style={{ color: "green", fontSize: "20pt" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div
            style={{ marginTop: "50px" }}
            
          >
            <div className="alert alert-danger" role="alert">
              Todo List is empty or Filter results show no results
            </div>
          </div>
        )}{" "}
      </div>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
 };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteTodo,
      toggleTodo,
      setVisibilityFilter
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
