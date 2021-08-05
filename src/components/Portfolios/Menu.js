import React from 'react'
import '../Portfolios/Port.css';

function Menu({ menuItem }) {
    return (
        <div className="container-fluid d-flex justify-content-center bg-light">
                   <div className="container">
            <div className="row mt-5 justify-content-center">
                {
                menuItem.map((item) => {
                    

                        return <div className="col-md-4 p-2 justify-content-center d-flex" key={item.id} data-aos={item.fade} >
                            <div className="bg-white   "style={{ width: "300px"}}>
                            <img src={item.image} style={{ width: "300px", height:"200px" }} alt="Card"></img>
                            <h5 className="card-title mt- d-flex p-2 justify-content-center">{item.category}</h5>
                            {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                            {/* <p className="card-text"><small className="text-muted"></small></p> */}
                            </div>
                        </div>


                   
                })
            }
            </div>
            </div>
        </div>

    )
}

export default Menu;