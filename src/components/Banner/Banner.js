import React from 'react';
function Banner(props) {
  return (
   
    <div
      className="bg-image"
      style={{backgroundImage: "url(" + props.img + ")",height:"520px",backgroundSize:"cover",backgroundPosition:'center',}}>
      <div className="mask container">
        <div className="pl-3 pt-3" style={{marginTop:"56px"}} >
          <div className="text-white col-md-6 col-sm-12 pt-5"  >
            <h2 className="" data-aos="fade-down">{props.data}</h2>
            <h4 className="" data-aos="fade-up" style={{opacity:"0.6"}}>{props.item}</h4>
          </div>
        </div>
      </div>
    </div>
  )}
 export default Banner;