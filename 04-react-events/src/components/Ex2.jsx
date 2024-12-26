import React from 'react'

const Ex2 = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
            <div className='col'>
                <div className="lead my-3 p-3 border rounded shadow-sm">
                    <p>
                        <b>2) React event listeners</b>
                    </p>
                    <p>
                        Event listeners are used to handle events in React. They are used to attach a function to an
                        element so that it can be called when a specific event occurs. For example, when a button
                        is clicked, an event listener can be used to call a function that handles the click event.
                        (OR)
                        To listen to events in React, add the onClick attribute which is the event handler to the target element.This specifies the function to be executed when the element is clicked.
                    </p>
                    <button className="btn btn-outline-info"  type="button" onClick={() => alert('Hello')}>Ex2-Show Alert
                        </button>
                </div>

            </div>
        </div>
       
     </div>
    </>
  )
}

export default Ex2
