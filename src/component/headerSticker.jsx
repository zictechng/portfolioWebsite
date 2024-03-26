import React from 'react';

const HeaderSicker = () => {
  return (
    <>
        <div id="header-sticky-mobile" className="tp-md-header-area d-md-block d-lg-none pt-30 pb-30">
      <div className="container-fluid">
         <div className="row align-items-center">
            <div className="col-md-6 col-6">
               <div className="tp-logo">
                  <a href="index"><img src="assets/img/logo/logo-blue.png" alt="" /></a>
               </div>
            </div>
            <div className="col-md-6 col-6">
               <div className="tp-header-right z-index-1 d-flex align-items-center justify-content-end">
                  <a className="tp-btn-yellow d-none d-md-block" href="#">How it Works</a>
                  <button className="tp-menu-bar"><i className="fal fa-bars"></i></button>
               </div>
            </div>
         </div>
      </div>
   </div>
    </>
  );
}

export default HeaderSicker;