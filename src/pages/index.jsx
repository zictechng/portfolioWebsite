import React from 'react';

const IndexPage = () =>{
  return (
    <>
      <header className="d-none d-lg-block">
            <div id="header-sticky" className="tp-header-area header-transparent pl-165 pr-165 pt-35">
              <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-3">
                        <div className="tp-logo">
                          <a href="/"><img src="assets/img/logo/logo-blue.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="tp-main-menu">
                          <nav id="mobile-menu">
                              <ul>
                                <li className="has-dropdown"><a href="index.html">Home</a> 
                                    <ul className="submenu text-start">
                                      <li><a href="index.html">Creative Agency</a></li>
                                      <li><a href="index-2.html">Personal Portfolio</a></li>
                                      <li><a href="index-3.html">Startup Business</a></li>
                                      <li><a href="index-4.html">Digital Agency</a></li>
                                      <li><a href="index-5.html">Business Advisor</a></li>
                                      <li><a href="index-6.html">IT Service Agency</a></li>
                                      <li><a href="index-7.html">Corporate Agency</a></li>
                                      <li><a href="index-8.html">Fashion Blog 01</a></li>
                                      <li><a href="index-9.html">Fashion Blog 02</a></li>
                                    </ul>
                                </li>
                                <li className="has-dropdown "><a href="portfolio.html">Portfolio</a> 
                                    <ul className="submenu text-start">
                                      <li><a href="portfolio.html">Portfolio Full Width</a></li>
                                      <li><a href="portfolio-2.html">Portfolio Filter 01</a></li>
                                      <li><a href="portfolio-3.html">Portfolio Filter 02</a></li>
                                      <li><a href="portfolio-mesonary.html">Portfolio Masonry</a></li>
                                      <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                    </ul>
                                </li>
                                <li className="has-dropdown has-mega-menu"><a href="#">Pages</a>
                                    <ul className="submenu text-start">
                                      <li><a href="about.html">About</a></li>
                                      <li><a href="about-me.html">About Me</a></li>
                                      <li><a href="job.html">Job</a></li>
                                      <li><a href="job-details.html">Job Details</a></li>
                                      <li><a href="product.html">Product</a></li>
                                      <li><a href="product-details.html">Product Details</a></li>
                                      <li><a href="service-1.html">Service 01</a></li>
                                      <li><a href="service-2.html">Service 02</a></li>
                                      <li><a href="service-3.html">Service 03</a></li>
                                      <li><a href="service-4.html">Service 04</a></li>
                                      <li><a href="service-details.html">Service Details</a></li>
                                      <li><a href="testimonial.html">Testimonial</a></li>
                                      <li><a href="price.html">Price</a></li>
                                      <li><a href="faq.html">Faq</a></li>
                                      <li><a href="login.html">Login</a></li>
                                      <li><a href="registration.html">Register</a></li>
                                      <li><a href="404.html">404</a></li>
                                    </ul>
                                </li>
                                <li className="has-dropdown "><a href="blog.html">Blog</a>
                                    <ul className="submenu text-start">
                                      <li><a href="blog.html">Blog Sidebar</a></li>
                                      <li><a href="blog-details.html">Blog Details</a></li>
                                      <li><a href="blog-grid-1.html">Post Style 01</a></li>
                                      <li><a href="blog-grid-2.html">Post Style 02</a></li>
                                      <li><a href="blog-grid-3.html">Post Style 03</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                              </ul>
                          </nav>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2">
                        <div className="tp-menu-bar text-end">
                          <button><i className="fal fa-bars"></i></button>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
    </header>

      {/* mobile-menu-area  */}
      <div id="header-sticky-mobile" className="tp-md-menu header-transparent d-lg-none pt-40 pb-40">
      <div className="container-fluid">
         <div className="row align-items-center">
            <div className="col-6">
               <div className="tp-logo">
                  <a href="#"><img src="assets/img/logo/logo.png" alt=""/></a>
               </div>
            </div>
            <div className="col-6">
               <div className="bar text-end">
                  <button className="tp-menu-bar" type="submit"><i className="fal fa-bars"></i></button>
               </div>
            </div>
         </div>
      </div>
      </div>

      {/* tp-offcanvus-area-start */}
      <div className="tp-offcanvas-area">
      <div className="tpoffcanvas">
         <div className="tpoffcanvas_logo">
            <a href="index.html">
               <img src="assets/img/logo/logo-white.png" alt="" />
            </a>
         </div>
         <div className="tpoffcanvas__close-btn">
            <a className="close-btn" href="javascript:void(0)"><i className="fal fa-times-hexagon"></i></a>
         </div>
         <div className="tpoffcanvas__content d-none d-sm-block">
            <p>We deploy world-class Creative <br /> on demand.</p>
         </div>
         <div className="mobile-menu">

         </div>
         <div className="tpoffcanvas__contact">
            <span>Contact us</span>
            <ul>
               <li><i className="fas fa-star"></i> <a href="https://goo.gl/maps/abHegV4AoiJA6Syd8" target="_blank">Melbone
                     st, Australia, Ny 12099</a></li>
               <li><i className="fas fa-star"></i> <a href="tel:8180012345678">+81 800 123 456 78</a></li>
               <li><i className="fas fa-star"></i> <a href="mailto:Collaxmail@gmail.com">Collaxmail@gmail.com</a></li>
            </ul>
         </div>
         <div className="tpoffcanvas__input d-none d-sm-block">
            <p>Get UPdate</p>
            <form className="p-relative" action="#">
               <input type="text" placeholder="Enter mail" />
               <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
         </div>
         <div className="tpoffcanvas__instagram d-none d-sm-block">
            <p>Check Instagram POst</p>
           <div className="tp-insta">
            <div className="row">
               <div className="col-3 col-sm-3"><a href="#"><img src="assets/img/offcanvas/insta-1.jpg" alt="" /></a></div>
               <div className="col-3 col-sm-3"><a href="#"><img src="assets/img/offcanvas/insta-2.jpg" alt="" /></a></div>
               <div className="col-3 col-sm-3"><a href="#"><img src="assets/img/offcanvas/insta-4.jpg" alt="" /></a></div>
               <div className="col-3 col-sm-3"><a href="#"><img src="assets/img/offcanvas/insta-4.jpg" alt="" /></a></div>
            </div>
           </div>
         </div>
      </div>
   </div>

   <div className="body-overlay"></div>

   <main>
    {/* tp-hero-area-start */}
    <div className="tp-hero-area tp-hero-space p-relative z-index-1 fix">
      <div className="tp-hero-shape">
         <div className="shape-circle-yellow d-none"></div>
         <div className="shape-circle-blue"></div>
         <div className="shape-one"><img src="assets/img/hero/shape-1.png" alt="" /></div>
      </div>
      <div className="tp-hero-wapper">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-7 col-lg-7">
                  <div className="tp-hero-content">
                     <div className="tp-hero-text">
                        <h2 className="tp-hero-title wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">We make things look good</h2>
                        <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">At Collax we specialize in designing, building, shipping and scaling beautiful, <br />
                           usable products with blazing-fast efficiency</p>
                        <div className="tp-hero-button mb-140 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                           <a className="tp-btn mr-30" href="portfolio-details.html">Visit Case Studies</a>
                           <a className="tp-btn-grey" href="about-me.html">About Collax <i className="far fa-arrow-right"></i></a>
                        </div>
                        <div className="tp-hero-social pb-30 wow tpfadeIn" data-wow-duration=".7s" data-wow-delay="1.2s">
                           <div className="tp-hero-social bp-hero-social">
                              <a className="social-icon-1" href="#">
                                 <i className="fab fa-facebook-f social-icon-1"></i><span>Facebook</span>
                              </a>
                              <a className="social-icon-3" href="#"><i
                                    className="fab fa-youtube social-icon-3"></i><span>youtube</span></a>
                              <a className="social-icon-2" href="#"><i
                                    className="fab fa-twitter social-icon-2"></i><span>twitter</span></a>
                              <a className="social-icon-4" href="#"><i
                                    className="fab fa-behance social-icon-4"></i><span>behance</span></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-5">
                  <div className="tp-hero-big-img wow fadeInRight"  data-wow-duration=".7s" data-wow-delay="1.2s">
                     <img src="assets/img/hero/hero-2.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

   {/* creative-area-start */}
    <div className="p-relative">
        <div className="shape-two z-index-1">
          <img src="assets/img/hero/shape-2.png" alt="" />
        </div>
        <div className="tp-creative-area p-relative black-bg pt-140 pb-135 fix">
          <div className="circle-animation testimonial">
              <span className="tp-circle-1"></span>
              <span className="tp-circle-2"></span>
          </div>
          <div className="creative-shape-img">
              <img src="assets/img/creative/creative-hand.png" alt="" />
          </div>
          <div className="creative-shape-img-2">
              <img src="assets/img/creative/creative-circle-img.png" alt="" />
          </div>
          <div className="container creative-z-index ">
              <div className="row">
                <div className="col-lg-12">
                    <div className="tp-creative-box text-center">
                      <div className="tp-creative-content mb-110">
                          <h4 className="tp-creative-title">We deploy world-class <b>Creative Design team</b> on demand.
                            that can design, build, ship and
                            scale your vision in the most efficient way.</h4>
                      </div>
                      <div className="tp-play-button mb-150">
                          <a className="popup-video" href="https://www.youtube.com/watch?v=PO_fBTkoznc"><i
                                className="fal fa-play"></i></a>
                          <span>Play Take a look behind the scenes</span>
                      </div>
                    </div>
                </div>
              </div>
              <div className="creative-box pl-40 pr-40">
                <div className="row gx-5">
                    <div className="col-lg-4 col-md-12 col-xs-12 mb-30">
                      <div className="tp-creative-item wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                          <div className="tp-creative-yellow d-flex align-items-center">
                            <div className="tp-creative-icon mr-35">
                                <i className="flaticon-satisfaction"></i>
                            </div>
                            <div className="counter-text">
                                <span>100%</span>
                                <p className="m-0">Client Setisfaction</p>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-xs-12 mb-30">
                      <div className="tp-creative-item tp-creative-blue wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                          <div className="tp-creative-yellow d-flex align-items-center">
                            <div className="tp-creative-icon mr-35">
                                <i className="flaticon-clipboard"></i>
                            </div>
                            <div className="counter-text">
                                <span>1200+</span>
                                <p className="m-0">Complete Project</p>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-xs-12 mb-30">
                      <div className="tp-creative-item tp-creative-pink wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                          <div className="tp-creative-yellow d-flex align-items-center">
                            <div className="tp-creative-icon mr-35">
                                <i className="flaticon-setting"></i>
                            </div>
                            <div className="counter-text">
                                <span>1800+</span>
                                <p className="m-0">Design Resource</p>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>

    {/* bran-area start */}
    <div className="tp-brand-area pt-135 grey-bg">
      <div className="container">
         <div className="row">
            <div className="col-12">
               <div className="tp-brand-section text-center pb-60">
                  <h4 className="tp-brand-title">We are Already Build Solution for...</h4>
               </div>
            </div>
         </div>
         <div className="tp-brand-slider-section">
            <div className="swiper-container brand-slider-active">
               <div className="swiper-wrapper d-flex align-items-center">
                  <div className="swiper-slide">
                     <div className="tp-brand-icon text-center">
                        <img src="assets/img/brand/brand-1.png" alt=""/>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="tp-brand-icon text-center">
                        <img src="assets/img/brand/brand-2.png" alt=""/>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="tp-brand-icon text-center">
                        <img src="assets/img/brand/brand-3.png" alt=""/>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="tp-brand-icon text-center">
                        <img src="assets/img/brand/brand-4.png" alt=""/>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="tp-brand-icon text-center">
                        <img src="assets/img/brand/brand-5.png" alt=""/>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="tp-brand-icon text-center">
                        <img src="assets/img/brand/brand-6.png" alt=""/>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="tp-brand-icon text-center">
                        <img src="assets/img/brand/brand-1.png" alt=""/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

   {/* service-area-start */}
   <div className="tp-service-area pt-190 pb-100 grey-bg p-relative fix">
      <div className="tp-sv-shape-img z-index-1">
         <img src="assets/img/service/service-shape.png" alt="" />
      </div>
      <div className="circle-animation service">
         <span className="tp-circle-1"></span>
         <span className="tp-circle-2"></span>
      </div>
      <div className="circle-animation service-two">
         <span className="tp-circle-skye"></span>
      </div>
      <div className="container">
         <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
               <div className="tp-service-section-box mb-30 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                  <h5 className="tp-subtitle pb-10">What We Do?</h5>
                  <h2 className="tp-title">Experts in every aspect lifecycle </h2>
                  <a className="tp-btn" href="service-details.html">View All Services</a>
               </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
               <div className="tp-sv-box  wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                  <div className="tp-service-item d-flex mb-30">
                     <div className="tp-sv-img">
                        <img src="assets/img/service/service-1.png" alt="" />
                     </div>
                     <div className="tp-sv-content pl-60">
                        <h3 className=" tp-sv-title mb-35"><a href="service-details.html">Ideation & Evaluation</a></h3>
                        <p className="mb-30">At Collax we specialize in designing, building, shipping and scaling
                           beautiful,
                           usable products with blazing-fast</p>
                        <p>At Collax we specialize in designing, building, shipping and scaling...</p>
                        <div className="tp-sv-link mt-35">
                           <a href="service-details.html"><i className="far fa-arrow-right"></i> Learn More</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
               <div className="tp-sv-box wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                  <div className="tp-service-item d-flex mb-30">
                     <div className="tp-sv-img">
                        <img src="assets/img/service/service-2.png" alt="" />
                     </div>
                     <div className="tp-sv-content pl-60">
                           <h3 className="tp-sv-title mb-35"><a href="service-details.html">Design, Development</a></h3>
                        <p className="mb-30">At Collax we specialize in designing, building, shipping and scaling
                           beautiful,
                           usable products with blazing-fast</p>
                        <p>At Collax we specialize in designing, building, shipping and scaling...</p>
                        <div className="tp-sv-link mt-35">
                           <a href="service-3.html"><i className="far fa-arrow-right"></i> Learn More</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
               <div className="tp-sv-box wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.2s">
                  <div className="tp-service-item d-flex mb-30">
                     <div className="tp-sv-img">
                        <img src="assets/img/service/service-3.png" alt="" />
                     </div>
                     <div className="tp-sv-content pl-60">
                           <h3 className=" tp-sv-title mb-35"><a href="service-details.html">Online Marketing</a></h3>
                        <p className="mb-30">At Collax we specialize in designing, building, shipping and scaling
                           beautiful,
                           usable products with blazing-fast</p>
                        <p>At Collax we specialize in designing, building, shipping and scaling...</p>
                        <div className="tp-sv-link mt-35">
                           <a href="service-4.html"><i className="far fa-arrow-right"></i> Learn More</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

    {/* project-area-start */}

    <div className="tp-project-area p-relative pt-130 pb-100">
      <div className="tp-project-shape">
         <img src="assets/img/project/project-shape.png" alt=""/>
      </div>
      <div className="container">
         <div className="row align-items-center mb-15">
            <div className="col-xl-5 col-lg-12 col-md-12">
               <div className="tp-project-section-box">
                  <h5 className="tp-subtitle">Our Project</h5>
                  <h2 className="tp-title">Creative work. </h2>
               </div>
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12">
               <div className="tp-service-tab-button">
                  <nav>
                     <div className="nav tp-service-tab justify-content-xl-end justify-content-lg-center" id="nav-tab"
                        role="tablist">
                        <button className="nav-links mb-10" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#all"
                           type="button" role="tab" aria-controls="all" aria-selected="true">All</button>

                        <button className="nav-links mb-10" id="nav-design-tab" data-bs-toggle="tab"
                           data-bs-target="#design" type="button" role="tab" aria-controls="design"
                           aria-selected="true">Website Design</button>

                        <button className="nav-links active mb-10" id="nav-branding-tab" data-bs-toggle="tab"
                           data-bs-target="#branding" type="button" role="tab" aria-controls="branding"
                           aria-selected="true">Branding Design
                        </button>

                        <button className="nav-links mb-10" id="nav-app-tab" data-bs-toggle="tab" data-bs-target="#app"
                           type="button" role="tab" aria-controls="app" aria-selected="true">App Design</button>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
         <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade " id="all" role="tabpanel" aria-labelledby="nav-all-tab" tabindex="0">
               <div className="project-tab-main">
                  <div className="row gx-1  ">
                     <div className="col-xl-6 col-lg-12">
                        <div className="tp-project-box mb-20">
                           <div className="tp-project-img fix mb-45">
                              <img className="w-100" src="assets/img/project/brand-1.jpg" alt=""/>
                           </div>
                           <div className="tp-project-content ml-20">
                              <h2 className="pro-lg-title"><a href="portfolio-details.html">Hosting Website Design</a></h2>
                              <p>At Collax we specialize in designing, building, shipping...</p>
                              <a className="tp-btn-sm" href="contact.html">View Case Studies <i className="far fa-arrow-right"></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-12">
                        <div className="row">
                           <div className=" col-xl-12 col-lg-12">
                              <div className="tp-project-box-sm d-flex align-items-center mb-20">
                                 <div className="tp-project-sm-img fix ml-25 mr-35">
                                    <img src="assets/img/project/app-2.jpg" alt=""/>
                                 </div>
                                 <div className="tp-project-sm-content">
                                    <h3 className="pro-sm-title"><a href="portfolio-details.html">Medical Website</a></h3>
                                    <p>At Collax we specialize in the most designing, building, shipping...</p>
                                    <a className="tp-btn-white-sm" href="portfolio-details.html">Case Studies <i
                                          className="far fa-arrow-right"></i></a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-12 col-lg-12">
                              <div className="tp-project-box-sm d-flex align-items-center">
                                 <div className="tp-project-sm-img fix ml-25 mr-35">
                                    <img src="assets/img/project/project-4.jpg" alt=""/>
                                 </div>
                                 <div className="tp-project-sm-content">
                                    <h3 className="pro-sm-title"><a href="portfolio-details.html">Pet Care Website</a></h3>
                                    <p>At Collax we specialize in the most designing, building, shipping...</p>
                                    <a className="tp-btn-white-sm" href="cportfolio-details.html">Case Studies <i
                                          className="far fa-arrow-right"></i></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tab-pane fade" id="design" role="tabpanel" aria-labelledby="nav-design-tab" tabindex="0">
               <div className="project-tab-main">
                  <div className="row gx-1  ">
                     <div className="col-xl-6 col-lg-12">
                        <div className="tp-project-box mb-20">
                           <div className="tp-project-img fix mb-45">
                              <img className="w-100" src="assets/img/project/project-1.jpg" alt=""/>
                           </div>
                           <div className="tp-project-content ml-20">
                              <h2 className="pro-lg-title"><a href="portfolio-details.html">Hosting Website Design</a></h2>
                              <p>At Collax we specialize in designing, building, shipping...</p>
                              <a className="tp-btn-sm" href="portfolio-details.html">View Case Studies <i className="far fa-arrow-right"></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-12">
                        <div className="row">
                           <div className=" col-xl-12 col-lg-12">
                              <div className="tp-project-box-sm d-flex align-items-center mb-20">
                                 <div className="tp-project-sm-img fix ml-25 mr-35">
                                    <img src="assets/img/project/project-2.jpg" alt=""/>
                                 </div>
                                 <div className="tp-project-sm-content">
                                    <h3 className="pro-sm-title"><a href="portfolio-details.html">Medical Website</a></h3>
                                    <p>At Collax we specialize in the most designing, building, shipping...</p>
                                    <a className="tp-btn-white-sm" href="portfolio-details.html">Case Studies <i
                                          className="far fa-arrow-right"></i></a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-12 col-lg-12">
                              <div className="tp-project-box-sm d-flex align-items-center">
                                 <div className="tp-project-sm-img fix ml-25 mr-35">
                                    <img src="assets/img/project/project-4.jpg" alt=""/>
                                 </div>
                                 <div className="tp-project-sm-content">
                                    <h3 className="pro-sm-title"><a href="portfolio-details.html">Pet Care Website</a></h3>
                                    <p>At Collax we specialize in the most designing, building, shipping...</p>
                                    <a className="tp-btn-white-sm" href="portfolio-details.html">Case Studies <i
                                          className="far fa-arrow-right"></i></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tab-pane fade show active " id="branding" role="tabpanel" aria-labelledby="nav-branding-tab"
               tabindex="0">
               <div className="project-tab-main">
                  <div className="row gx-1  ">
                     <div className="col-xl-6 col-lg-12">
                        <div className="tp-project-box mb-20">
                           <div className="tp-project-img fix mb-45">
                              <img className="w-100" src="assets/img/project/brand-1.jpg" alt=""/>
                           </div>
                           <div className="tp-project-content ml-20">
                              <h2 className="pro-lg-title"><a href="portfolio-details.html">Web Application Design</a></h2>
                              <p>At Collax we specialize in designing, building, shipping...</p>
                              <a className="tp-btn-sm" href="portfolio-details.html">View Case Studies <i className="far fa-arrow-right"></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-12">
                        <div className="row">
                           <div className=" col-xl-12 col-lg-12">
                              <div className="tp-project-box-sm d-flex align-items-center mb-20">
                                 <div className="tp-project-sm-img fix ml-25 mr-35">
                                    <img src="assets/img/project/brand-2.jpg" alt=""/>
                                 </div>
                                 <div className="tp-project-sm-content">
                                    <h3 className="pro-sm-title"><a href="portfolio-details.html">Globar Art Deisgn</a></h3>
                                    <p>At Collax we specialize in the most designing, building, shipping...</p>
                                    <a className="tp-btn-white-sm" href="portfolio-details.html">Case Studies <i
                                          className="far fa-arrow-right"></i></a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-12 col-lg-12">
                              <div className="tp-project-box-sm d-flex align-items-center">
                                 <div className="tp-project-sm-img fix ml-25 mr-35">
                                    <img src="assets/img/project/brand-3.jpg" alt=""/>
                                 </div>
                                 <div className="tp-project-sm-content">
                                    <h3 className="pro-sm-title"><a href="portfolio-details.html">Modern Branding Design</a></h3>
                                    <p>At Collax we specialize in the most designing, building, shipping...</p>
                                    <a className="tp-btn-white-sm" href="portfolio-details.html">Case Studies <i
                                          className="far fa-arrow-right"></i></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tab-pane fade" id="app" role="tabpanel" aria-labelledby="nav-app-tab" tabindex="0">
               <div className="project-tab-main">
                  <div className="row gx-1  ">
                     <div className="col-xl-6 col-lg-12">
                        <div className="tp-project-box mb-20">
                           <div className="tp-project-img fix mb-45">
                              <img className="w-100" src="assets/img/project/app-1.jpg" alt=""/>
                           </div>
                           <div className="tp-project-content ml-20">
                              <h2 className="pro-lg-title"><a href="portfolio-details.html">Banking App Management</a></h2>
                              <p>At Collax we specialize in designing, building, shipping...</p>
                              <a className="tp-btn-sm" href="portfolio-details.html">View Case Studies <i className="far fa-arrow-right"></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-12">
                        <div className="row">
                           <div className=" col-xl-12 col-lg-12">
                              <div className="tp-project-box-sm d-flex align-items-center mb-20">
                                 <div className="tp-project-sm-img fix ml-25 mr-35">
                                    <img src="assets/img/project/app-2.jpg" alt=""/>
                                 </div>
                                 <div className="tp-project-sm-content">
                                    <h3 className="pro-sm-title"><a href="portfolio-details.html">Financial App Deisgn</a></h3>
                                    <p>At Collax we specialize in the most designing, building, shipping...</p>
                                    <a className="tp-btn-white-sm" href="portfolio-details.html">Case Studies <i
                                          className="far fa-arrow-right"></i></a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-12 col-lg-12">
                              <div className="tp-project-box-sm d-flex align-items-center">
                                 <div className="tp-project-sm-img fix ml-25 mr-35">
                                    <img src="assets/img/project/app-3.jpg" alt=""/>
                                 </div>
                                 <div className="tp-project-sm-content">
                                    <h3 className="pro-sm-title"><a href="portfolio-details.html">Yoga App Desgin</a></h3>
                                    <p>At Collax we specialize in the most designing, building, shipping...</p>
                                    <a className="tp-btn-white-sm" href="portfolio-details.html">Case Studies <i
                                          className="far fa-arrow-right"></i></a>
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

    {/* testimonial-area start */}
    <div className="tp-testimonial-area black-bg pt-130 pb-130 fix">
      <div className="container-fluid">
         <div className="row">
            <div className="col-xl-12">
               <div className="tp-testimonial-section-box text-center pb-25">
                  <h5 className="tp-subtitle">Client Testimonial</h5>
                  <h2 className="tp-title tp-white-text">Customer feedback</h2>
               </div>
            </div>
         </div>
         <div className="tp-testimonial-slider-section d-flex justify-content-center mb-50">
            <div className="swiper-container testimonial-slider-active">
               <div className="swiper-wrapper">
                  <div className="swiper-slide">
                     <div className="tp-testimonial-item">
                        <div className="tp-testi-meta d-flex justify-content-between mb-40">
                           <div className="tp-testi-icon-box d-flex align-items-center">
                              <div className="tp-testi-img mr-20"><img src="assets/img/testimonial/testi-1.png" alt=""/>
                              </div>
                              <div className="tp-testi-client-position">
                                 <h3>Darrell Steward</h3>
                                 <h6>Founder of (Rirax)</h6>
                              </div>
                           </div>
                           <div className="tp-testi-ratting">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                           </div>
                        </div>
                        <div className="tp-testi-p-text">
                           <p>Collax was very diligent, polite and extremely customer oriented. I think Monika will
                              go
                              far with that attitude and ...he is such a honest, decent and reliable.</p>
                        </div>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="tp-testimonial-item">
                        <div className="tp-testi-meta d-flex justify-content-between mb-40">
                           <div className="tp-testi-icon-box d-flex align-items-center">
                              <div className="tp-testi-img mr-20"><img src="assets/img/testimonial/testi-2.jpg" alt=""/>
                              </div>
                              <div className="tp-testi-client-position">
                                 <h3>Floyd Miles</h3>
                                 <h6>CEO of (Orix)</h6>
                              </div>
                           </div>
                           <div className="tp-testi-ratting">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                           </div>
                        </div>
                        <div className="tp-testi-p-text">
                           <p>Collax was very diligent, polite and extremely customer oriented. I think Monika will
                              go
                              far with that attitude and ...he is such a honest, decent and reliable.</p>
                        </div>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="tp-testimonial-item">
                        <div className="tp-testi-meta d-flex justify-content-between mb-40">
                           <div className="tp-testi-icon-box d-flex align-items-center">
                              <div className=" tp-testi-img mr-20"><img src="assets/img/testimonial/testi-3.png" alt=""/>
                              </div>
                              <div className="tp-testi-client-position">
                                 <h3>Albert Flores</h3>
                                 <h6>Founder of (Rirax)</h6>
                              </div>
                           </div>
                           <div className="tp-testi-ratting">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                           </div>
                        </div>
                        <div className="tp-testi-p-text">
                           <p>Collax was very diligent, polite and extremely customer oriented. I think Monika will
                              go
                              far with that attitude and ...he is such a honest, decent and reliable.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="tp-testimonial-slider-section-2 d-flex justify-content-center">
            <div className="swiper-container testimonial-slider-active-2">
               <div className="swiper-wrapper">
                  <div className="swiper-slide">
                     <div className="tp-testimonial-item">
                        <div className="tp-testi-meta d-flex justify-content-between mb-40">
                           <div className="tp-testi-icon-box d-flex align-items-center">
                              <div className="tp-testi-img mr-20"><img src="assets/img/testimonial/testi-4.jpg" alt=""/>
                              </div>
                              <div className="tp-testi-client-position">
                                 <h3>Dianne Russell</h3>
                                 <h6>CEO of (Orix)</h6>
                              </div>
                           </div>
                           <div className="tp-testi-ratting">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                           </div>
                        </div>
                        <div className="tp-testi-p-text">
                           <p>Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a
                              true professional. he is such a honest, decent and reliable. He always provide good
                              service</p>
                        </div>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="tp-testimonial-item">
                        <div className="tp-testi-meta d-flex justify-content-between mb-40">
                           <div className="tp-testi-icon-box d-flex align-items-center">
                              <div className="tp-testi-img mr-20"><img src="assets/img/testimonial/testi-5.jpg" alt=""/>
                              </div>
                              <div className="tp-testi-client-position">
                                 <h3>Jerome Bell</h3>
                                 <h6>CEO of (Orix)</h6>
                              </div>
                           </div>
                           <div className="tp-testi-ratting">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                           </div>
                        </div>
                        <div className="tp-testi-p-text">
                           <p>Collax is a very talented designer and his most valuable role is to teach design in a
                              professional way. He trained design courses under my company Chartered Professional</p>
                        </div>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="tp-testimonial-item">
                        <div className="tp-testi-meta d-flex justify-content-between mb-40">
                           <div className="tp-testi-icon-box d-flex align-items-center">
                              <div className=" tp-testi-img mr-20"><img src="assets/img/testimonial/testi-6.jpg" alt=""/>
                              </div>
                              <div className="tp-testi-client-position">
                                 <h3>Floyd Miles</h3>
                                 <h6>CEO of (Orix)</h6>
                              </div>
                           </div>
                           <div className="tp-testi-ratting">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                           </div>
                        </div>
                        <div className="tp-testi-p-text">
                           <p>Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a
                              true professional. he is such a honest, decent and reliable. He always provide good
                              service</p>
                        </div>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="tp-testimonial-item">
                        <div className="tp-testi-meta d-flex justify-content-between mb-40">
                           <div className="tp-testi-icon-box d-flex align-items-center">
                              <div className=" tp-testi-img mr-20"><img src="assets/img/testimonial/testi-4.jpg" alt=""/>
                              </div>
                              <div className="tp-testi-client-position">
                                 <h3>Robert Fox</h3>
                                 <h6>CEO of (Orix)</h6>
                              </div>
                           </div>
                           <div className="tp-testi-ratting">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                           </div>
                        </div>
                        <div className="tp-testi-p-text">
                           <p>Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a
                              true professional. he is such a honest, decent and reliable. He always provide good
                              service</p>
                        </div>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="tp-testimonial-item">
                        <div className="tp-testi-meta d-flex justify-content-between mb-40">
                           <div className="tp-testi-icon-box d-flex align-items-center">
                              <div className=" tp-testi-img mr-20"><img src="assets/img/testimonial/testi-5.jpg" alt=""/>
                              </div>
                              <div className="tp-testi-client-position">
                                 <h3>Floyd Miles</h3>
                                 <h6>CEO of (Orix)</h6>
                              </div>
                           </div>
                           <div className="tp-testi-ratting">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                           </div>
                        </div>
                        <div className="tp-testi-p-text">
                           <p>Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a
                              true professional. he is such a honest, decent and reliable. He always provide good
                              service</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

    {/* blog-area-start */}
    <div className="tp-blog-area pt-130 pb-120 p-relative">
      <div className="circle-animation blog-animation">
         <span className="tp-circle-3"></span>
      </div>
      <div className="container">
         <div className="row">
            <div className="col-xl-12">
               <div className="tp-blog-section-box text-center pb-15">
                  <h5 className="tp-subtitle">Blog & Article</h5>
                  <h2 className="tp-title">Recent blog post</h2>
               </div>
            </div>
         </div>
         <div className="row gx-40">
            <div className="col-xl-6 col-lg-6">
               <div className="tp-blog-box mb-30 wow tpfadeLeft" data-wow-duration=".6s" data-wow-delay=".4s">
                  <div className="tp-blog-item">
                     <div className="tp-blog-img fix mb-35">
                        <a href="#"> <img className="w-100" src="assets/img/blog/blog-1.jpg" alt=""/></a>
                     </div>
                     <div className="tp-blog-meta d-flex justify-content-between mb-30">
                        <a href="#">Tutorilas</a>
                        <a className="tp-blog-meta-color" href="#">February. 20.2022</a>
                     </div>
                     <div className="tp-blog-info">
                        <h3 className="tp-blog-title"><a href="blog-details.html">How to add a count up animation the webflow site.</a>
                        </h3>
                        <p>At Collax we specialize in designing, building, shipping and scaling beautiful, usable
                           products
                           with blazing-fast</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="tp-blog-box mb-30 wow tpfadeRight" data-wow-duration=".7s" data-wow-delay=".6s">
                  <div className="tp-blog-item">
                     <div className="tp-blog-img fix mb-35">
                        <a href="#"><img className="w-100" src="assets/img/blog/blog-2.jpg" alt=""/></a>
                     </div>
                     <div className="tp-blog-meta d-flex justify-content-between mb-30">
                        <a href="#">Business</a>
                        <a className="tp-blog-meta-color" href="#">February. 20.2022</a>
                     </div>
                     <div className="tp-blog-info">
                        <h3 className="tp-blog-title"><a href="blog-details.html">How to grow your business with collax digital
                              solution.</a></h3>
                        <p>At Collax we specialize in designing, building, shipping and scaling beautiful, usable
                           products
                           with blazing-fast</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-xl-12">
               <div className="tp-blog-button text-center mt-30">
                  <a className="tp-btn" href="blog-details.html">View Case Studies</a>
               </div>
            </div>
         </div>
      </div>
   </div>
  
    {/* news-letter-area-start */}
    <div className="tp-news-letter-area pb-140 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".4s">
      <div className="container">
         <div className="tp-news-letter-box p-relative" data-background="assets/img/news/news-shape.png">
            <div className="row">
               <div className="col-xl-6 col-lg-6 col-md-8 col-12  ">
                  <div className="tp-news-wrapper pl-90 z-index-1">
                     <div className="tp-news-letter-section-box">
                        <h5 className="tp-subtitle subtitle-secondary-color">Get update</h5>
                        <h2 className="tp-title tp-white-text">Get latest updates and deals</h2>
                     </div>
                     <div className="tp-news-button p-relative">
                        <form action="#">
                           <input type="text" placeholder="Enter your mail"/>
                           <button className="tp-submit-button tp-btn-yellow-semilar" type="submit">Subscribe <i
                                 className="far fa-arrow-right"></i></button>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 text-lg-end col-md-4  ">
                  <div className="tp-news-letter-img">
                     <img src="assets/img/news/news-1.png" alt=""/>
                  </div>
               </div>
            </div>
            <div className="tp-news-shape-img">
               <img src="assets/img/news/news-shape-2.png" alt=""/>
            </div>
         </div>
      </div>
   </div>







   </main>
   {/* footer-area-start */}
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
                        <h5 className="tp-footer-title">More than 10 years in the game and we're <br/> just getting started.
                           🤝</h5>
                     </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-5 col-12">
                     <div className="tp-footer-button text-start text-md-end">
                        <a className="tp-btn" href="contact.html">Available for new Project<i className="far fa-arrow-right"></i> </a>
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
                           <p className="m-0">© 2022 Creative Agency , All Right Receved.</p>
                        </div>
                     </div>
                     <div className="col-xl-7 col-lg-7 col-md-7 col-12">
                        <div className="tp-copyright-right text-md-end text-start">
                           <a href="#">Support</a>
                           <a href="#">Privacy policy</a>
                           <a href="#">Tterms and conditions</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tp-copyright-logo-box">
                  <div className="row align-items-center">
                     <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                        <div className="tp-copyright-logo mt-35">
                           <a href="index.html"><img src="assets/img/copyright/copyright-logo.png" alt=""/></a>
                        </div>
                     </div>
                     <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                        <div className="tp-copyright-social text-md-end mt-25">
                           <a href="#"><i className="fab fa-linkedin-in"></i></a>
                           <a href="#"><i className="fab fa-facebook-f"></i></a>
                           <a href="#"><i className="fab fa-instagram"></i></a>
                           <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>

   {/* backto-top-area-start */}
   <button className="scroll-top scroll-to-target d-md-none" data-target="html">
      <i className="far fa-angle-double-up"></i>
  </button>
    </>
  );
}
export default IndexPage;
