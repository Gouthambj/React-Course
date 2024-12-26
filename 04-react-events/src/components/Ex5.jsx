import React, { Component } from 'react'

export default class Ex5 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            steps: 1
        }
        this.clickHandler= this.clickHandler.bind(this);
    }
    clickHandler(){
        alert('Click function')
        this.setState({
            steps: this.state.steps + 1
        })
        
    }

  render() {

    return (
        <div className="container">
        <div className="row">
            <div className="col-12">
               <p><b>5) Class Component Event Listener/ Binding inside the Constructor</b></p>
               <p>We have to Call this.setState method (for class component) or useState hook (for functional component) inside the Onclick handler to update state value.</p>

               <p><b>Steps : </b>{this.state.steps}</p>
    
               <button className='btn btn-outline-success mx-2' onClick={this.clickHandler} >Ex5 - Click Handler </button>
    
            </div>
        </div>
       </div>
    )
  }
}

