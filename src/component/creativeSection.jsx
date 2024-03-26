import React from 'react';

const CreativeSection = () => {
  return (
    <>
        <div class="p-relative">
      <div class="tp-creative-area p-relative black-bg pt-140 pb-135 fix">
         <div class="circle-animation testimonial">
            <span class="tp-circle-1"></span>
            <span class="tp-circle-2"></span>
         </div>
         <div class="creative-shape-img">
            <img src="assets/img/creative/creative-hand.png" alt=""/>
         </div>
         <div class="creative-shape-img-2">
            <img src="assets/img/creative/creative-circle-img.png" alt=""/>
         </div>
         <div class="container creative-z-index ">
            <div class="row">
               <div class="col-lg-12">
                  <div class="tp-creative-box text-center">
                     <div class="tp-creative-content mb-110">
                        <h4 class="tp-creative-title">I deploy quality <b>Applications</b> on demand.<br/>
                           I will design, develop, build and ship application that will
                           scale your business in the most efficient way.</h4>
                     </div>
                     
                  </div>
               </div>
            </div>
            <div class="creative-box pl-40 pr-40">
               <div class="row gx-5">
                  <div class="col-lg-4 col-md-12 col-xs-12 mb-30">
                     <div class="tp-creative-item wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                        <div class="tp-creative-yellow d-flex align-items-center">
                           <div class="tp-creative-icon mr-35">
                              <i class="flaticon-satisfaction"></i>
                           </div>
                           <div class="counter-text">
                              <span>100%</span>
                              <p class="m-0">My Clients Satisfaction</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-4 col-md-12 col-xs-12 mb-30">
                     <div class="tp-creative-item tp-creative-blue wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                        <div class="tp-creative-yellow d-flex align-items-center">
                           <div class="tp-creative-icon mr-35">
                              <i class="flaticon-clipboard"></i>
                           </div>
                           <div class="counter-text">
                              <span>50+</span>
                              <p class="m-0">All Completed Project</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-4 col-md-12 col-xs-12 mb-40">
                     <div class="tp-creative-item tp-creative-pink wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                        <div class="tp-creative-yellow d-flex align-items-center">
                           <div class="tp-creative-icon mr-35">
                              <i class="flaticon-setting"></i>
                           </div>
                           <div class="counter-text">
                              <span>20+</span>
                              <p class="m-0">Development Tools</p>
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

export default CreativeSection;
