import React, { Component } from 'react'
import MapComp from './mapComp'


class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        message: [],
        value: ''
      }
    
    this.changeHandler = this.changeHandler.bind(this);
    this.addtodo = this.addtodo.bind(this);

    }
    
    addtodo(e){
        e.preventDefault()
        if(this.state.value !== ''){
        this.state.message.push(this.state.value);
        this.setState({
            message: this.state.message,
            value: ''
        });
      }else{
        alert('This feild cannot be empty')
      }
    }

changeHandler(e){
  e.preventDefault();
    this.setState({
      value: e.target.value
    })
}

  render() {
    return (
      <div>
            <form className="form-inline" onSubmit = {this.addtodo}>
                <div className="form-group">
                    <input className="form-control form-control-lg" type="text" value={this.state.value} placeholder="Write todos" onChange={this.changeHandler}></input>
                    <button  type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form> 
            <MapComp message={this.state.message}/>
      </div>
    )
  }
}

export default Form
