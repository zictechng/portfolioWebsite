import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderSection = ({buttonClick}) => {

  return (
    <>
   <header className="d-none d-lg-block">
      <div id="header-sticky" className="tp-header-area header-transparent pl-165 pr-165 pt-35">
         <div className="container-fluid">
            <div className="row align-items-center">
               <div className="col-xl-3 col-lg-3">
                  <div className="tp-logo">
                     <a href="/"><img src="assets/img/logo/logo-blue.png" alt=""/></a>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-7">
                  <div className="tp-main-menu">
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
               <div className="col-xl-2 col-lg-2">
                  <div className="tp-menu-bar text-end">
                  <button onClick={buttonClick}>
                    <i className="fal fa-bars"></i>
                  </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
</header>
    </>
  );
}

export default HeaderSection;
