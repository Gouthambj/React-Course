import React, { Component } from 'react'

export default class Ex6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Message: "Event Bind",
            }
        }
        clickHandler(){
            alert('alert ')
            this.setState({
                Message: "Direct Binding"
            })
        }
  render() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-12">
               <p><b>8) Binding with the help of Arrow Function</b></p>

               <p><b>Message : </b>{this.state.Message}</p>
    
               <button className='btn btn-outline-success mx-2'  onClick={this.clickHandler}>Ex8 - Click Handler </button>
    
            </div>
        </div>
       </div>
    )
  }
}
