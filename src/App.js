import React, { Component } from 'react'
import { connect } from 'react-redux';

class App extends Component {
  addItemToState = (e) =>{
    e.preventDefault();
    this.props.addtodo({
      text: this.refs.addtodo.value
    })
    this.refs.addtodo.value = '';
  }
  render(){
    const { todos } = this.props;
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="jumbotron">
                <h1>This is Home Page</h1>
                <form onSubmit={this.addItemToState}>
                  <input type="text" ref="addtodo" /> 
                  <button type="submit">add todo</button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <ul className="list-group">
                {todos.map((todo, index) =>{
                  return(
                    <li className="list-group-item" key={index}>
                      {todo.text}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    todos: state
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addtodo: ({text}) =>{
      dispatch({
        type: "ADD_TODO",
        payload: {
          text: text,
          complete: false
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
