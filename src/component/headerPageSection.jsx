import React from 'react';
import { Link } from 'react-router-dom';

const HeaderPageSection = ({buttonClick}) => {
  return (
    <>
    <header className="d-none d-lg-block">
      <div id="header-sticky" className="tp-header-area-two tp-header-bg header-transparent header-transparent-two">
         <div className="container-fluid">
            <div className="row align-items-center">
               <div className="col-xxl-3 col-xl-3 col-lg-3">
                  <div className="tp-logo text-start">
                     <a href="/"><img src="assets/img/logo/logo-blue.png" alt=""/></a>
                  </div>
               </div>
               <div className="col-xxl-5 col-xl-6 col-lg-6">
                  <div className="tp-main-menu tp-menu-black tp-bs-menu tp-bp-menu text-center">
                     <nav id="mobile-menu">
                        <ul>
                           <li className="has-dropdown"><a href="/">Home</a> 
                             
                           </li>
                           <li><Link to={'/about'}>About</Link></li>
                           <li><Link to={'/project'}>Project</Link></li>
                           <li><Link to={'/contact'}>Contact</Link></li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <div className="col-xxl-4 col-xl-3 col-lg-3">
                  <div className="tp-header-left d-flex align-items-center justify-content-end ">
                     
                     <div className="tp-header-yellow-button">
                        <a className="tp-btn-white" href="tel:447884619833"> <i className="fas fa-phone"></i> Call Me</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
    </>
  );
}

export default HeaderPageSection
