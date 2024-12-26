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
               <p><b>9) Call multiple functions inside a an onClick event handler </b></p>

               <p><b>Message : </b>{this.state.Message}</p>
    
               <button className='btn btn-outline-success mx-2'  onClick={this.clickHandler.bind(this)}>Ex8 - Click Handler </button>
    
            </div>
        </div>
       </div>
    )
  }
}
