
//Arrow functional component
const Ex5 = (props) =>{
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="bg-warning text-white p-3 text-center rounded">
                                EXAMPLE-5 : REACT FUNCTIONAL PROPS   
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <div className="row">
                    <div className="col">
                        <div className="lead p-3 border rounded">
                            <p>{props.img}</p>
                            <p>{props.name}</p>
                            <p>{props.lorem}</p>
                        </div>
                        <div className="card my-3">
                            <img src={props.img} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{props.name}</h5>
                                    <p className="card-text">{props.lorem}</p>
                                    <button className="btn btn-primary">View more</button>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Ex5;