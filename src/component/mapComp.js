
import React, { Component } from 'react'

export class MapComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: this.props.message
      }
    }

    delete(index){
        this.state.message.splice(index, 1)
        this.setState({
            message: this.state.message
        })
    }

  render() {
    return (
        this.state.message.map((todo, index) =>{
                    return (
                        <div>
                                <h2>{todo} <button onClick={() => {this.delete(index)}}>Delete</button></h2>
                            </div>
                    )})
    )
  }
}

export default MapComp
