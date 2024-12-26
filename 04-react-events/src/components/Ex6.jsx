import React, { Component } from 'react'

export default class Ex6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Message: "Welcome to React"
            }
        }
        clickHandler(){
            alert('alert ')
            this.setState(
            {
                Message: "Thank you for clicking"
            })
        }
  render() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-12">
               <p><b>6) Binding by passing arrow function inside the event listener </b></p>

               <p><b>Message : </b>{this.state.Message}</p>
    
               <button className='btn btn-outline-success mx-2'  onClick={() => this.clickHandler()}>Ex6 - Click Handler </button>
    
            </div>
        </div>
       </div>
    )
  }
}
