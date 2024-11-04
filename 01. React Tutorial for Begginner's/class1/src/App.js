
import React, { Fragment } from 'react';



function App() {

  //Function
  function testFunction(name){
    return name.toLowerCase();
  }

  //variables
  const title = "WELCOME TO REACT";
  const endTitle = "Be-Practical Tech Solutions";

  const heading1 = React.createElement("h1", {name:"title1",  id:"title1"}, "HEADING-1");
  const heading2 = React.createElement("h2", {name:"title2",  id:"title2"}, "HEADING-2");
  const section = React.createElement("section", {name:"section", id:"section"}, [heading1, heading2]);

  //Object
  const websiteLink={url:"https://www.youtube.com/"}

  return (
   <Fragment>
    <div className="container my-3">
    <div className="row">
      <div className="col">
        <h1 className='bg-primary p-3  text-white text-center rounded'>
          {title + " "+ endTitle.toUpperCase()}</h1>
      </div>
      <hr />
      <h1>{heading1}{heading2}</h1>
      <h1>
      {section}</h1>


    </div>
   </div>
   <div className="container">
    <div className="row">
      <div className="col">
        <a href={websiteLink.url}>Youtube</a>
        <hr />
        FUNCTION CALLING:  {testFunction(title)}
      </div>
    </div>
   </div>


   </Fragment>
  )
}

export default App;
