import React from 'react';

const MobileMenuSection = ({isOffCan, toggleBtn}) => {
  return (
    <>
    <div id="header-sticky-mobile" class={`tp-md-menu header-transparent d-lg-none pt-40 pb-40 ${
          isOffCan ? "active" : ""
        }`}>
      <div class={`container-fluid ${isOffCan ? "opened" : ""}`}>
         <div class="row align-items-center">
            <div class="col-6">
               <div class="tp-logo">
                  <a href="#"><img src="assets/img/logo/logo.png" alt=""/></a>
               </div>
            </div>
            <div class="col-6">
               <div class="bar text-end">
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