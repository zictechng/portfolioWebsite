import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumbSection = ({data}) => {
  return (
    <>

    <section className="breadcrumb__area breadcrumb__pt-310 include-bg p-relative"
         background-image="assets/img/breadcrum/ab_bread.png">
            {/* <img src="assets/img/breadcrum/ab_bread.png" alt="Background" /> */}
         <div className="container">
            <div className="row">
               <div className="col-xxl-12">
                  <div className="breadcrumb__content p-relative z-index-1">
                     <h3 className="breadcrumb__title">{data}</h3>
                      <Link to={'/contact'} className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></Link>
                  </div>
               </div>
            </div>
         </div>
    </section>
    </>
  );
}

export default BreadCrumbSection;
