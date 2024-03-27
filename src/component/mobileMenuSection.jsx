import React from 'react';

const MobileMenuSection = ({isOffCan, toggleBtn}) => {
  return (
    <>
    <div id="header-sticky-mobile" className={`tp-md-menu header-transparent d-lg-none pt-40 pb-40 ${
          isOffCan ? "active" : ""
        }`}>
      <div className={`container-fluid ${isOffCan ? "opened" : ""}`}>
         <div className="row align-items-center">
            <div className="col-6">
               <div className="tp-logo">
                  <a href="#"><img src="assets/img/logo/logo.png" alt=""/></a>
               </div>
            </div>
            <div className="col-6">
               <div className="bar text-end">
               <button
                  className="tp-menu-bar"
                  type="submit"
                  onClick={toggleBtn}>
                  <i className="fal fa-bars"></i>
                </button>
               </div>
            </div>
         </div>
      </div>
   </div>
    </>
  );
}

export default MobileMenuSection;