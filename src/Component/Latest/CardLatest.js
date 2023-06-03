import React from "react";
import './Latest.css';
import { Link } from "react-router-dom";

const CardLatest = (props) => {

  const { title, subtitle, image } = props;

  return (
<>

<div className="col-lg-3 col-md-6 col-sm-12 mb-4">
<div className="card ms-lg-0 border  card-po">
<div className="position-relative">
   <img src={image} alt={title} className="card-img-top img-fluid" />
    {/* overlay */}
      <div className="crd-over2 d-flex align-items-center"></div>   
 </div>
 
   <div class="crd-id w-100">
              <span><i class="fa fa-search-plus card-sqr"></i></span>
              <span><i class="fa fa-link card-sqr"></i></span>
               <div class="d-flex justify-content-between  bcmnt w-100 p-0 m-0">
                 <p>19 jul 2019</p>
                 <p>0 comments</p>
               </div>
          </div>
           <div class="card-body">
             <b class="card-title mt-2">{title}</b>
             <p class="cardp">{subtitle}</p>
            <Link href="#" class="read-more">Read More</Link>
          </div>
 <div/>
      
    </div>
</div>
</>
     );
};

export default CardLatest;