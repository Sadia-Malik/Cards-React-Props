import React from "react";
import { Link } from "react-router-dom";
const CardNav = () => {
    return(
      <>
       <div className="container mt-5">
       <div className="row mt-3">
      <div className="col-lg-3 col-md-4 col-sm-12">
        <div><img
            src="https://opencart.templatemela.com/OPC08/OPC080192/OPC4/catalog/view/theme/OPC080192_4/image/megnor/star.png"
            alt="" width="28px" height="28px" class="mb-sm-3 mt-2"/><span className="ms-3 text-uppercase h5 fw-bold">Latest
            blog</span></div>
      </div>

      <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-4 offset-md-2  links-phone mt-3 mb-4 ms-lg-auto ms-md-auto d-flex justify-content-lg-end">
        <Link to = ""><span className="border p-2 arrow"><i className="fa-solid fa-less-than"></i></span><span
            className="border p-2 arrow"><i className="fa-solid fa-greater-than"></i></span></Link>

      </div>
    </div>
       </div>
       <div/>
      </>
    );
}
export default CardNav;