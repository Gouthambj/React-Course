import React from "react";

//Global Variables
let x=20;
const y=200;
let title = "Welcome to string date";
let isAdmin = true;


//Object
const user = {
    //key:value => Property
    name: "John",
    age: 30,
    email:"john@email.com"
}


//Array
const cricketPlayers = ['Sachin', 'Virat',  'Rohit',  'Dhoni']; 


 class Ex4 extends React.Component { //Arrow Function
    // Local Variable
    // let x = 10;
    render(){
        return(
            <>
            <div className="container my-3">
                <div className="row">
                    <div className="col">
                        <h2 className="bg-warning text-white p-3 text-center rounded">
                            EXAMPLE-4
                        </h2>
                    </div>
                </div>
            </div>
    
            <div className="container my-3">
                <div className="row">
                <div className="col">
                <h2 className="bg-success text-white p-3 text-center rounded">
                    Global Variable x: {x}
                    Global Variable y: {y}
                </h2>
                <h2 className="bg-info text-white p-3 text-center rounded">
                    {title}
                </h2>
                <h2 className="bg-danger text-white p-3 text-center rounded">
                    isAdmin: {isAdmin}
                </h2>
                <h2 className="bg-dark text-white p-3 text-center rounded">
                    name : {user.name}
                    <br />
                    age : {user.age}
                    <br />
                    email : {user.email}
                </h2>
                <h1>
                    {cricketPlayers[0]}
                    <hr />
                    {cricketPlayers[1]} <hr />
                    {cricketPlayers[2]} <hr />
                    {cricketPlayers[3]} <hr />
                </h1>
                <h1>
                   { 
                    cricketPlayers.map((player, index) =><h1 key={index}>{player}</h1>)
                }
    
                </h1>
            </div>
                </div>
            </div>
            </>
        )
    }
}
export default Ex4;