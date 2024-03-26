import React from 'react';

const HeroSection = () => {
  return (
    <>
    <div className="tp-hero-area tp-hero-space p-relative z-index-1 fix">
      <div className="tp-hero-shape">
         <div className="shape-circle-yellow d-none"></div>
         <div className="shape-circle-blue"></div>
         <div className="shape-one"><img src="assets/img/hero/shape-1.png" alt=""/></div>
      </div>
      <div className="tp-hero-wapper">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-7 col-lg-7">
                  <div className="tp-hero-content">
                     <div className="tp-hero-text">
                        <h2 className="tp-hero-title wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">Abel Portfolio</h2>
                        <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                           I'm a full stack developer, a coach and a trainer <br/>
                           l specialize in developing, building, and deploying scalable and efficiency solutions to meet your business need</p>
                        <div className="tp-hero-button mb-140 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                           <a className="tp-btn mr-30" href="tel:447884619833">+44 788 4619 833</a>
                           <a className="tp-btn-grey" href="contact">Contact <i className="far fa-arrow-right"></i></a>
                        </div>
                        <div className="tp-hero-social pb-30 wow tpfadeIn" data-wow-duration=".7s" data-wow-delay="1.2s">
                           <div className="tp-hero-social bp-hero-social">
                              <a className="social-icon-4" href="https://www.linkedin.com/in/abel-uwadia" target='_new'><i
                                    className="fab fa-linkedin-in"></i><span>linkedin</span>
                              </a>
                              <a className="social-icon-1" href="https://www.facebook.com/profile.php?id=61550345348900" target='_new'>
                                 <i className="fab fa-facebook-f social-icon-1"></i><span>Facebook</span>
                              </a>
                              <a className="social-icon-3" href="https://www.youtube.com/channel/UCC8gAzkssMVDWKzwLEkS8KA" target='_new'><i
                                    className="fab fa-youtube social-icon-3"></i><span>youtube</span>
                              </a>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-5">
                  <div className="tp-hero-big-img wow fadeInRight"  data-wow-duration=".7s" data-wow-delay="1.2s">
                     <img src="assets/img/hero/hero-2.png" alt=""/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
    </>
  );
}

export default HeroSection;
