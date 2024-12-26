import React from 'react'
import { useState } from 'react';

const Ex3 = () => {
    //const [state, handler] = useState(initValue);
    //useState is a hook
    //state variables -> value
    //state handler -> method -> used change/ modify the values of the state

    const [count, setCount] = useState(0); //initial value is 0

    const sayHello = (parameter1) => {
        console.log(parameter1);
        alert (`Hello !, ${parameter1}`)
    };
  return (
    <>
       <div className='container'>
        <div className='row'>
            <div className='col'>
                <div className="lead my-3 p-3 border rounded shadow-sm">
                    <p>
                        <b>3) Call multiple functions in an onClick event handler</b>
                    </p>
                    
                    <button className="btn btn-outline-info"  type="button" onClick={() => {sayHello("React"); setCount(count+1) }}>Ex3-Say Hello and Increment
                        </button>
                        <p><b>Increment: {count}</b></p>
                </div>

            </div>
        </div>
       
     </div> 
    </>
  )
}

export default Ex3
