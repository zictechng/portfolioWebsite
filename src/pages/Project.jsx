import React, { useState } from 'react';
import HeaderPageSection from '../component/headerPageSection';
import SideBarSection from '../component/sideBarSection';
import MobileMenuSection from '../component/mobileMenuSection';
import BreadCrumbSection from '../component/breadcrumbSection';
import { Link } from 'react-router-dom';
import FooterSection from '../component/footerSection';
import PushToButton from '../component/pushTopButton';

const ProjectPage = () => {
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState([]);
  const pageTitle = 'Project';
  // Function to toggle offcanvas visibility
  const toggleOffcanvas = () => {
    setIsOffcanvasVisible(!isOffcanvasVisible);
  };

  // Function to toggle submenu visibility
  const toggleSubMenu = (name) => {
    setIsSubMenuVisible((prevVisible) => {
      if (prevVisible.includes(name)) {
        // If the submenu is already visible, hide it
        return prevVisible.filter((subMenuName) => subMenuName !== name);
      } else {
        // Otherwise, show the submenu
        return [...prevVisible, name];
      }
    });
  };
  return (
    <>
        <HeaderPageSection 
        buttonClick={toggleOffcanvas}
        />

        <MobileMenuSection 
        isOffCan={isOffcanvasVisible}
        toggleBtn={toggleOffcanvas}
        />

        <SideBarSection 
        toggleOffCan={toggleOffcanvas}
        isOffCan={isOffcanvasVisible}
        toggleMenuSub={toggleSubMenu}
        isSubmenu={isSubMenuVisible}
        />

      <div className="body-overlay"></div>

      <main>
        <BreadCrumbSection 
          data={pageTitle}
        />

      <div className="sv-case-area pb-130">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8">
                  <div className="project-section-box-two text-center pb-60">
                     <h2 className="tp-title-sm">Some of my recent projects</h2>
                  </div>
               </div>
            </div>
            <div className="row gx-6">
               <div className="col-xl-4 col-lg-4 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                  <div className="svcase text-center mb-50">
                     <div className="svcase__img fix">
                        <img src="assets/img/service/service-9.jpg" alt=""/>
                     </div>
                     <div className="svcase__content">
                        <h4 className="sv-case-sm-title"><a href="https://play.google.com/store/apps/details?id=com.zictech.ozaapp">Oza App</a></h4>
                        <p>A fintech mobile application for selling and buying virtual funds.</p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                  <div className="svcase text-center mb-50">
                     <div className="svcase__img fix">
                        <img src="assets/img/service/service-15.jpg" alt=""/>
                     </div>
                     <div className="svcase__content">
                        <h4 className="sv-case-sm-title"><a href="https://vuemoney.zictech-ng.com/">Mobile Card</a></h4>
                        <p>Platform where users can easily exchange gift card,
                    redeem Voucher to cash and more...  </p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
                  <div className="svcase text-center mb-50">
                     <div className="svcase__img fix">
                        <img src="assets/img/service/service-11.jpg" alt=""/>
                     </div>
                     <div className="svcase__content">
                        <h4 className="sv-case-sm-title"><a href="https://admin.ozaapp.com/pages/login/">Admin Portal </a></h4>
                        <p>A complete automation portal that manage, mobile application in real time</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row gx-6">
               <div className="col-xl-4 col-lg-4 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                  <div className="svcase text-center mb-50">
                     <div className="svcase__img fix">
                        <img src="assets/img/service/service-10.jpg" alt=""/>
                     </div>
                     <div className="svcase__content">
                        <h4 className="sv-case-sm-title"><a href="https://play.google.com/store/apps/details?id=com.zictech.rugipoalumnimobile">Rugipo App</a></h4>
                        <p>Mobile application that enable Alumni members, 
                        to connect and share information together globally </p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                  <div className="svcase text-center mb-50">
                     <div className="svcase__img fix">
                        <img src="assets/img/service/service-13.jpg" alt=""/>
                     </div>
                     <div className="svcase__content">
                        <h4 className="sv-case-sm-title"><a href="https://ozaapp.com/">Business Website</a></h4>
                        <p>Oza business website for general information, sharing to the general user.</p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
                  <div className="svcase text-center mb-50">
                     <div className="svcase__img fix">
                        <img src="assets/img/service/service-14.jpg" alt=""/>
                     </div>
                     <div className="svcase__content">
                        <h4 className="sv-case-sm-title"><a href="https://veeapps.co.in/en/">Veeapps </a></h4>
                        <p>A platform where people can easily get, already made applications to 
                    manage their business same day</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row gx-6">
               <div className="col-xl-4 col-lg-4 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                  <div className="svcase text-center mb-50">
                     <div className="svcase__img fix">
                        <img src="assets/img/service/service-12.jpg" alt=""/>
                     </div>
                     <div className="svcase__content">
                        <h4 className="sv-case-sm-title"><a href="https://dominioncollege.com.ng/">School Website</a></h4>
                        <p>Professional school website design to manage the school information and share to the general public</p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                  <div className="svcase text-center mb-50">
                     <div className="svcase__img fix">
                        <img src="assets/img/service/service-16.jpg" alt=""/>
                     </div>
                     <div className="svcase__content">
                        <h4 className="sv-case-sm-title"><a href="https://liftsoftedu.zictech-ng.com/">Automated School Software</a></h4>
                        <p>School automated system design, building, to manage the administrative activities of the school</p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
                  <div className="svcase text-center mb-50">
                     <div className="svcase__img fix">
                        <img src="assets/img/service/service-17.jpg" alt=""/>
                     </div>
                     <div className="svcase__content">
                        <h4 className="sv-case-sm-title"><a href="https://dominioncollegeportal.com.ng/login/">School Portal </a></h4>
                        <p>School portal for managing student record, printing of result, process admission, home work, pay school fees etc..</p>
                     </div>
                  </div>
               </div>
            </div>


            <div className="row">
               <div className="col-12">
                  <div className="case-button text-center pt-30">
                     <Link to={'/contact'}> <button className="tp-btn-sky">Know More</button></Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </main>
      <FooterSection />
      <PushToButton/>
    </>
  );
}

export default ProjectPage;
