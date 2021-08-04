import React from 'react';
function Banner(props) {
  return (
   
    <div
      class="bg-image"
      style={{backgroundImage: "url(" + props.img + ")",height:"520px",backgroundSize:"cover",backgroundPosition:'center',}}>
      <div class="mask container">
        <div class="pl-3 pt-3" style={{marginTop:"56px"}} >
          <div class="text-white col-md-6 col-sm-12 pt-5"  >
            <h2 class="" data-aos="fade-down">{props.data}</h2>
            <h4 class="" data-aos="fade-up" style={{opacity:"0.6"}}>{props.item}</h4>
          </div>
        </div>
      </div>
    </div>
  )}
 export default Banner;