import React, { Component } from 'react'


//rcc shortcut for class component
export default class Ex8 extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <h1 className="bg-warning text-white p-3 text-center rounded">
                        EXAMPLE-8 : REACT CLASS COMPONENT  PROPS
                    </h1>
                </div>
            </div>
        </div>
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <h1 className="border lead p-3 rounded">
                       <p>{this.props.title}</p>
                       <p>{this.props.name}</p>
                       <p>{this.props.lorem}</p>
                       
                    </h1>
                </div>
            </div>
        </div>

        <div className="card my-3">
            <img src={this.props.img} className="card-img-top" alt="..."/>
                <div className="card-body my-3">
                    <h5 className="card-title">{this.props.name}</h5>
                                        <p className="card-text">{this.props.lorem}</p>
                                        <button className="btn btn-outline-primary">View more</button>
                                    </div>
                        </div>


        
      </>
    )
  }
};
