import React from 'react'
import '../Portfolios/Port.css';

function Menu({ menuItem }) {
    return (
        <div class="container-fluid d-flex justify-content-center bg-light">
                   <div class="container">
            <div class="row mt-5 justify-content-center">
                {
                menuItem.map((item) => {
                    

                        return <div class="col-md-4 p-2 justify-content-center d-flex" key={item.id} data-aos={item.fade} >
                            <div class="bg-white   "style={{ width: "300px"}}>
                            <img src={item.image} style={{ width: "300px" }} alt="Card"></img>
                            <h5 class="card-title mt- d-flex p-2 justify-content-center">{item.category}</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                            {/* <p class="card-text"><small class="text-muted"></small></p> */}
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