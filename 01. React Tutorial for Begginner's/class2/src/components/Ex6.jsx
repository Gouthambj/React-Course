
//Arrow functional component
const Ex6 = (props) =>{
    const {img, name, lorem} = props
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="bg-warning text-white p-3 text-center rounded">
                                EXAMPLE-6 : REACT FUNCTIONAL PROPS   
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <div className="row">
                    <div className="col">
                        <div className="lead p-3 border rounded">
                            <p>{img}</p>
                            <p>{name}</p>
                            <p>{lorem}</p>
                        </div>
                        <div className="card my-3">
                            <img src={img} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{lorem}</p>
                                    <button className="btn btn-outline-primary">View more</button>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Ex6;