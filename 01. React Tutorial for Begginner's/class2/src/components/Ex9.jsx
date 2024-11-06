import React, { Component } from 'react'


//rcc shortcut for class component
export default class Ex9 extends Component {
    
  render() {
    const {img, title, name, lorem} = this.props;
    return (
      <>
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <h1 className="bg-warning text-white p-3 text-center rounded">
                        EXAMPLE-9 : REACT CLASS COMPONENT DESTRUCTURING PROPS
                    </h1>
                </div>
            </div>
        </div>
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <h1 className="border lead p-3 rounded">
                       <p>{title}</p>
                       <p>{name}</p>
                       <p>{lorem}</p>
                       
                    </h1>
                </div>
            </div>
        </div>

        <div className="card my-3">
                 <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                        <p className="card-text">{lorem}</p>
                                        <button className="btn btn-outline-primary">View more</button>
                                    </div>
                        </div>


        
      </>
    )
  }
};
