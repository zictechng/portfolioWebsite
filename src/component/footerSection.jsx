import React from 'react';

const FooterSection = () => {
   const currentYear = new Date().getFullYear()
  return (
    <>
    <footer className="p-relative">
      <button className="scrollTop d-none d-md-block" data-target="html">
         <div className="tp-backto-top">
            <svg width="16" height="58" viewBox="0 0 16 58" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M8.70711 0.292892C8.31659 -0.0976295 7.68342 -0.0976296 7.2929 0.292892L0.928934 6.65685C0.53841 7.04738 0.53841 7.68054 0.928934 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41422L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM9 58L9 1L7 1L7 58L9 58Z"
                  fill="#292930" />
            </svg>
         </div>
      </button>
      <div className="footer-clip-shape">
         <svg width="1918" height="98" viewBox="0 0 1918 98" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
               d="M435.5 54L0 1V0L1917.5 1L1309 75.5C1263 82 1178.75 88.6471 1176.5 89C1116 98.5 958.667 98.3333 885.5 97C874.167 96.5 856.5 95.5 850.5 95.5C793.5 95.5 554.667 69.3333 435.5 54Z"
               fill="white" />
         </svg>
      </div>
      <div className="tp-clip-height-one"></div>
      <div className="tp-clip-height-two"></div>
      <div className="tp-footer-area tp-footer-space black-bg p-relative fix pt-0">
         <div className="tp-footer-border-shape d-none"></div>
         <div className="tp-footer-border-shape-two"></div>
         <div className="circle-animation footer-animation d-none d-md-block">
            <span className="tp-circle-3"></span>
         </div>
         <div className="container">
            <div className="tp-footer-widget wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".5s">
               <div className="row align-items-center">
                  <div className="col-xl-7 col-lg-7 col-md-7 col-12">
                     <div className="tp-footer-top">
                        <h5 className="tp-footer-title">More than 6 years of industry experience <br/> client satisfactory is my goal.
                           🤝</h5>
                        <p>I design everything to appeal to your visitors, create brand awareness and make them take a desired action.</p>
                     </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-5 col-12">
                     <div className="tp-footer-button text-start text-md-end">
                        <a className="tp-btn" href="contact">Available for new Project<i className="far fa-arrow-right"></i> </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="tp-copyright-area pb-90 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="container">
               <div className="tp-copyright-box align-items-center">
                  <div className="row align-items-center">
                     <div className="col-xl-5 col-lg-5 col-md-5 col-12">
                        <div className="tp-copyright-text z-index-1">
                           <p className="m-0">©{currentYear}  Abel Portfolio , All Right Reserved.</p>
                        </div>
                     </div>
                     <div className="col-xl-7 col-lg-7 col-md-7 col-12">
                        <div className="tp-copyright-right text-md-end text-start">
                           <a href="about">About</a>
                           <a href="project">Project</a>
                           <a href="contact">Contact</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tp-copyright-logo-box">
                  <div className="row align-items-center">
                     <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                        <div className="tp-copyright-logo mt-35">
                           <a href="index"><img src="assets/img/copyright/copyright-logo.png" alt=""/></a>
                        </div>
                     </div>
                     <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                        <div className="tp-copyright-social text-md-end mt-25">
                           <a href="https://www.linkedin.com/in/abel-uwadia" target='_new'><i className="fab fa-linkedin-in"></i></a>
                           <a href="https://www.facebook.com/profile.php?id=61550345348900" target='_new'><i className="fab fa-facebook-f"></i></a>
                           <a href="https://www.youtube.com/channel/UCC8gAzkssMVDWKzwLEkS8KA" target='_new'><i className="fab fa-youtube"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
    </>
  );
}

export default FooterSection;
