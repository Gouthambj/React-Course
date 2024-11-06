const Ex7 = ({title, color, name}) =>{
    
    
    // option-2
    // const Ex7 = (props) =>{
    //     const {title, color, name} = props;
    return (
        <>
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <h1 className="bh-warning text-white p-3 text-center rounded">
                        EXAMPLE-7 : REACT FUNCTIONAL DEFAULT PROPS
                    </h1>
                </div>
            </div>
        </div>

        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <h1 className="border lead p-3 rounded">
                       <p>{title}</p>
                       <h2 style={{backgroundColor:color}}>{name} </h2>
                    </h1>
                </div>
            </div>
        </div>
        
        </>
    )
}

Ex7.defaultProps ={
    title: "Default TITLE",
    color: "#f16c6c",
    name: "Dafault PROPS"

}
export default Ex7;