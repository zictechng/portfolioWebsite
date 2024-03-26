import React from 'react';
import { Link } from 'react-router-dom';

const SideBarSection = ({isOffCan, isSubmenu, toggleOffCan, toggleMenuSub}) => {
  return (
    <>
    <div className={`tp-offcanvas-area ${isOffCan ? "active" : ""}`}>
      <div className={`tpoffcanvas ${isOffCan ? "opened" : ""}`}>
         
         <div className="tpoffcanvas__close-btn">
         <button className="close-btn" onClick={toggleOffCan}>
              <i className="fal fa-times-hexagon"></i>
            </button>
         </div>
         <div className="tpoffcanvas__content d-none d-sm-block">
            <p>I deploy quality applications <br/> on demand</p>
         </div>
         <div className="mobile-menu mean-container">
         <div className="mean-bar">
              <a
                href="#nav"
                className="meanmenu-reveal"
                style={{ right: "0px", left: "auto", display: "inline" }}
              >
                <span>
                  <span>
                    <span></span>
                  </span>
                </span>
              </a>
              <nav className="mean-nav">
                <ul style={{ display: "none" }}>
                  <li className="has-dropdown">
                    <a href="/" onClick={toggleOffCan}>
                      Home
                      <i className="fal fa-angle-down"></i>
                    </a>
                   </li>
                 
                  <li className="mean-last"><Link to={'/about'} onClick={toggleOffCan}>About</Link></li>
                  <li className="mean-last"><Link to={'/project'} onClick={toggleOffCan}>Project</Link></li>
                  <li className="mean-last"><Link to={'/contact'} onClick={toggleOffCan}>Contact</Link></li>
                </ul>
              </nav>
            </div>
         </div>
         <div className="tpoffcanvas__contact">
            <span>Contact me</span>
            <ul>
               
               <li><i className="fas fa-phone"></i> <a href="tel:447884619833">+44 788 4619 833</a></li>
               <li><i className="fas fa-envelope"></i> <a href="mailto:abelken99@gmail.com">abelken99@gmail.com</a></li>
            </ul>
         </div>
         
      </div>
   </div>
    </>
  );
}

export default SideBarSection;
