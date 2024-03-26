/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSection = () => {
  return (
    <>
    <div class="tp-project-area p-relative pt-130 pb-100">
      <div class="container">
         <div class="row align-items-center mb-15">
            <div class="col-xl-5 col-lg-12 col-md-12">
               <div class="tp-project-section-box">
                 <h2 class="tp-title">Current Project. </h2>
               </div>
            </div>
            <div class="col-xl-7 col-lg-12 col-md-12">
               <div class="tp-service-tab-button">
                  <nav>
                     <div class="nav tp-service-tab justify-content-xl-end justify-content-lg-center" id="nav-tab"
                        role="tablist">
                        <button class="nav-links active mb-10" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#all"
                           type="button" role="tab" aria-controls="all" aria-selected="true">All</button>
                        </div>
                  </nav>
               </div>
            </div>
         </div>
         <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="nav-all-tab" tabindex="0">
               <div class="project-tab-main">
                  <div class="row gx-1  ">
                     <div class="col-xl-6 col-lg-12">
                        <div class="tp-project-box mb-20">
                           <div class="tp-project-img fix mb-45">
                              <img class="w-100" src="assets/img/project/brand-1a.jpg" alt=""/>
                           </div>
                           <div class="tp-project-content ml-20">
                              <h2 class="pro-lg-title"><a href="#">Custom admin control panel</a></h2>
                              <p>Admin Portal that control the activities of an application...</p>
                              <a class="tp-btn-sm" href="#">View Project <i class="far fa-arrow-right"></i></a>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-6 col-lg-12">
                        <div class="row">
                           <div class=" col-xl-12 col-lg-12">
                              <div class="tp-project-box-sm d-flex align-items-center mb-20">
                                 <div class="tp-project-sm-img fix ml-25 mr-35">
                                    <img src="assets/img/project/project_app.png" alt=""/>
                                 </div>
                                 <div class="tp-project-sm-content">
                                    <h3 class="pro-sm-title"><a href="#">Fintech Mobile App</a></h3>
                                    <p>Mobile application build to solve users problem in virtual funding...</p>
                                    <a class="tp-btn-white-sm" href="#">View Project <i
                                          class="far fa-arrow-right"></i></a>
                                 </div>
                              </div>
                           </div>
                           <div class="col-xl-12 col-lg-12">
                              <div class="tp-project-box-sm d-flex align-items-center">
                                 <div class="tp-project-sm-img fix ml-25 mr-35">
                                    <img src="assets/img/project/project_p.png" alt=""/>
                                 </div>
                                 <div class="tp-project-sm-content">
                                    <h3 class="pro-sm-title"><a href="portfolio-details.html">Website</a></h3>
                                    <p>A business website built to share valuable information to users...</p>
                                    <Link class="tp-btn-white-sm" to="/project">View Project <i
                                          class="far fa-arrow-right"></i></Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
         </div>
      </div>
   </div>
    </>
  );
}
export default ProjectSection;
