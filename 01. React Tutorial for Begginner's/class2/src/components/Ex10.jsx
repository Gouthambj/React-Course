import React, { Component } from 'react'

export default class Ex10 extends Component {
    static defaultProps = {
        title: 'Default Title',
        content: 'Default Content',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInmyaYQYsV8-BzUX0q38U8mTcDg0GSlsh1g&s",
         name :  " Globe in HAND ",
         lorem : "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore"
    }
  render() {
    const  { title, content, img, name, lorem } = this.props;

    
    return (
      <>
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <h1 className="bg-warning text-white p-3 text-center rounded">
                        EXAMPLE-10 : REACT CLASS COMPONENT DEFAULT PROPS
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
                       <img src={img} alt="image" className="img-fluid" />
                       
                       
                    </h1>
                </div>
            </div>
        </div>
        <div className="card my-3">
                            <img src={img} className="card-img-top " alt="..."/>
                                <div className="card-body my-3">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{lorem}</p>
                                    <button className="btn btn-outline-primary">View more</button>
                                </div>
        </div>


        
      </>
    )
  }
}
