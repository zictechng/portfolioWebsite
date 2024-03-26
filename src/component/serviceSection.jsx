import React from 'react';

const ServiceSection = () => {
  return (
    <>
    <div class="tp-service-area pt-190 pb-100 grey-bg p-relative fix">
     <div class="circle-animation service">
        <span class="tp-circle-1"></span>
        <span class="tp-circle-2"></span>
     </div>
     <div class="circle-animation service-two">
        <span class="tp-circle-skye"></span>
     </div>
     <div class="container">
        <div class="row">
           <div class="col-lg-6 col-md-12 col-12">
              <div class="tp-service-section-box mb-30 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                 <h2 class="tp-title">Expert in custom application development </h2>
              </div>
           </div>
           <div class="col-lg-6 col-md-12 col-12">
              <div class="tp-sv-box  wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                 <div class="tp-service-item d-flex mb-30">
                    <div class="tp-sv-img">
                       <img src="assets/img/service/service-1.png" alt=""/>
                    </div>
                    <div class="tp-sv-content pl-60">
                       <h3 class=" tp-sv-title mb-35"><a href="#">Mobile App Development</a></h3>
                       <p class="mb-30">
                       I develop a custom mobile app with a unique functionalities and features 
                       designed to address specific challenges or capitalize on 
                       opportunities within a particular clients context.</p>
                        
                    </div>
                 </div>
              </div>
           </div>
           <div class="col-lg-6 col-md-12 col-12">
              <div class="tp-sv-box wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                 <div class="tp-service-item d-flex mb-30">
                    <div class="tp-sv-img">
                       <img src="assets/img/service/service-2.png" alt=""/>
                    </div>
                    <div class="tp-sv-content pl-60">
                          <h3 class="tp-sv-title mb-35"><a href="#">Website Design & Development</a></h3>
                       <p class="mb-30">
                       I create a unique and tailored website layout, with beautiful appearance, and functionality to meet clients need with specific requirements and preferences</p>
                    </div>
                 </div>
              </div>
           </div>
           <div class="col-lg-6 col-md-12 col-12">
              <div class="tp-sv-box wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.2s">
                 <div class="tp-service-item d-flex mb-30">
                    <div class="tp-sv-img">
                       <img src="assets/img/service/service-3.png" alt=""/>
                    </div>
                    <div class="tp-sv-content pl-60">
                          <h3 class=" tp-sv-title mb-35"><a href="#">Software Development</a></h3>
                       <p class="mb-30">Every Software and web application I developed has its own uniqueness and functionalities
                          tailored made to address and solve clients solutions.
                       </p>
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
export default ServiceSection;
