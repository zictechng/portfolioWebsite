import React, { useState } from "react";
import HeaderSection from "../component/headerSection";
import SideBarSection from "../component/sideBarSection";
import MobileMenuSection from "../component/mobileMenuSection";
import PushToButton from "../component/pushTopButton";
import FooterSection from "../component/footerSection";
import HeroSection from "../component/heroSection";
import CreativeSection from "../component/creativeSection";
import BrandSection from "../component/brandSection";
import ServiceSection from "../component/serviceSection";
import ProjectSection from "../component/projectSection";

const IndexPage = () => {
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState([]);

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
    <div id="preloader">
      <div class="preloader">
          <span></span>
          <span></span>
      </div>
    </div>

      <HeaderSection 
      buttonClick={toggleOffcanvas} />

      {/* mobile-menu-area  */}

      <MobileMenuSection 
      isOffCan={isOffcanvasVisible}
      toggleBtn={toggleOffcanvas}
      />
      {/* sidebar navigation */}
        <SideBarSection
          toggleOffCan={toggleOffcanvas}
          isOffCan={isOffcanvasVisible}
          toggleMenuSub={toggleSubMenu}
          isSubmenu={isSubMenuVisible}
        />

      {/* tp-offcanvus-area-start */}
      {/* <div
        className={`tp-offcanvas-area ${isOffcanvasVisible ? "active" : ""}`}
      >
        <div className={`tpoffcanvas ${isOffcanvasVisible ? "opened" : ""}`}>
          <div className="tpoffcanvas_logo">
            <a href="index.html">
              <img
                style={{ height: "3.5rem", marginBottom: "3rem" }}
                src="assets/img/logo/logo-white.png"
                alt=""
              />
            </a>
          </div>
          <div className="tpoffcanvas__close-btn">
            <button className="close-btn" onClick={toggleOffcanvas}>
              <i className="fal fa-times-hexagon"></i>
            </button>
          </div>
          <div className="tpoffcanvas__content d-none d-sm-block">
            <p>
              We deploy world-class Creative <br /> on demand.
            </p>
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
                    <a href="#/" onClick={() => toggleSubMenu("Home")}>
                      Home
                      <i className="fal fa-angle-down"></i>
                    </a>
                    <ul
                      className="submenu text-start"
                      style={{
                        display: isSubMenuVisible.includes("Home")
                          ? "block"
                          : "none",
                      }}
                    >
                      <li>
                        <a href="index.html">Creative Agency</a>
                      </li>
                      <li>
                        <a href="index-2.html">Personal Portfolio</a>
                      </li>
                      <li>
                        <a href="index-3.html">Startup Business</a>
                      </li>
                      <li>
                        <a href="index-4.html">Digital Agency</a>
                      </li>
                      <li>
                        <a href="index-5.html">Business Advisor</a>
                      </li>
                      <li>
                        <a href="index-6.html">IT Service Agency</a>
                      </li>
                      <li>
                        <a href="index-7.html">Corporate Agency</a>
                      </li>
                      <li>
                        <a href="index-8.html">Fashion Blog 01</a>
                      </li>
                      <li>
                        <a href="index-9.html">Fashion Blog 02</a>
                      </li>
                    </ul>
                    <a
                      className="mean-expand"
                      onClick={() => toggleSubMenu("Home")}
                      href="#"
                      style={{ fontSize: "18px" }}
                    >
                      <i className="fal fa-plus"></i>
                    </a>
                  </li>
                  <li className="has-dropdown">
                    <a href="#/" onClick={() => toggleSubMenu("Portfolio")}>
                      Portfolio
                      <i className="fal fa-angle-down"></i>
                    </a>
                    <ul
                      className="submenu text-start"
                      style={{
                        display: isSubMenuVisible.includes("Portfolio")
                          ? "block"
                          : "none",
                      }}
                    >
                      <li>
                        <a href="portfolio.html">Portfolio Full Width</a>
                      </li>
                      <li>
                        <a href="portfolio-2.html">Portfolio Filter 01</a>
                      </li>
                      <li>
                        <a href="portfolio-3.html">Portfolio Filter 02</a>
                      </li>
                      <li>
                        <a href="portfolio-mesonary.html">Portfolio Masonry</a>
                      </li>
                      <li>
                        <a href="portfolio-details.html">Portfolio Details</a>
                      </li>
                    </ul>
                    <a
                      className="mean-expand"
                      onClick={() => toggleSubMenu("Portfolio")}
                      href="#"
                      style={{ fontSize: "18px" }}
                    >
                      <i className="fal fa-plus"></i>
                    </a>
                  </li>
                  <li className="has-dropdown has-mega-menu">
                    <a href="#/" onClick={() => toggleSubMenu("Pages")}>
                      Pages
                      <i className="fal fa-angle-down"></i>
                    </a>
                    <ul
                      className="submenu text-start"
                      style={{
                        display: isSubMenuVisible.includes("Pages")
                          ? "block"
                          : "none",
                      }}
                    >
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="about-me.html">About Me</a>
                      </li>
                      <li>
                        <a href="job.html">Job</a>
                      </li>
                      <li>
                        <a href="job-details.html">Job Details</a>
                      </li>
                      <li>
                        <a href="product.html">Product</a>
                      </li>
                      <li>
                        <a href="product-details.html">Product Details</a>
                      </li>
                      <li>
                        <a href="service-1.html">Service 01</a>
                      </li>
                      <li>
                        <a href="service-2.html">Service 02</a>
                      </li>
                      <li>
                        <a href="service-3.html">Service 03</a>
                      </li>
                      <li>
                        <a href="service-4.html">Service 04</a>
                      </li>
                      <li>
                        <a href="service-details.html">Service Details</a>
                      </li>
                      <li>
                        <a href="testimonial.html">Testimonial</a>
                      </li>
                      <li>
                        <a href="price.html">Price</a>
                      </li>
                      <li>
                        <a href="faq.html">Faq</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="registration.html">Register</a>
                      </li>
                      <li>
                        <a href="404.html">404</a>
                      </li>
                    </ul>
                    <a
                      className="mean-expand"
                      onClick={() => toggleSubMenu("Pages")}
                      href="#"
                      style={{ fontSize: "18px" }}
                    >
                      <i className="fal fa-plus"></i>
                    </a>
                  </li>
                  <li className="has-dropdown">
                    <a href="#/" onClick={() => toggleSubMenu("Blog")}>
                      Blog
                      <i className="fal fa-angle-down"></i>
                    </a>

                    <ul
                      className="submenu text-start"
                      style={{
                        display: isSubMenuVisible.includes("Blog")
                          ? "block"
                          : "none",
                      }}
                    >
                      <li>
                        <a href="blog.html">Blog Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                      <li>
                        <a href="blog-grid-1.html">Post Style 01</a>
                      </li>
                      <li>
                        <a href="blog-grid-2.html">Post Style 02</a>
                      </li>
                      <li>
                        <a href="blog-grid-3.html">Post Style 03</a>
                      </li>
                    </ul>
                    <a
                      className="mean-expand"
                      onClick={() => toggleSubMenu("Blog")}
                      href="#"
                      style={{ fontSize: "18px" }}
                    >
                      <i className="fal fa-plus"></i>
                    </a>
                  </li>
                  <li className="mean-last">
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="tpoffcanvas__contact">
            <span>Contact us</span>
            <ul>
              <li>
                <i className="fas fa-star"></i>{" "}
                <a href="https://goo.gl/maps/abHegV4AoiJA6Syd8" target="_blank">
                  Melbone st, Australia, Ny 12099
                </a>
              </li>
              <li>
                <i className="fas fa-star"></i>{" "}
                <a href="tel:8180012345678">+81 800 123 456 78</a>
              </li>
              <li>
                <i className="fas fa-star"></i>{" "}
                <a href="mailto:Collaxmail@gmail.com">Collaxmail@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="tpoffcanvas__input d-none d-sm-block">
            <p>Get UPdate</p>
            <form className="p-relative" action="#">
              <input type="text" placeholder="Enter mail" />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <div className="tpoffcanvas__instagram d-none d-sm-block">
            <p>Check Instagram POst</p>
            <div className="tp-insta">
              <div className="row">
                <div className="col-3 col-sm-3">
                  <a href="#">
                    <img src="assets/img/offcanvas/insta-1.jpg" alt="" />
                  </a>
                </div>
                <div className="col-3 col-sm-3">
                  <a href="#">
                    <img src="assets/img/offcanvas/insta-2.jpg" alt="" />
                  </a>
                </div>
                <div className="col-3 col-sm-3">
                  <a href="#">
                    <img src="assets/img/offcanvas/insta-4.jpg" alt="" />
                  </a>
                </div>
                <div className="col-3 col-sm-3">
                  <a href="#">
                    <img src="assets/img/offcanvas/insta-4.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="body-overlay"></div>

      <main>
        {/* tp-hero-area-start */}
       <HeroSection />

        {/* creative-area-start */}
        <CreativeSection />
        {/* bran-area start */}
        <BrandSection/>

        {/* service-area-start */}
        <ServiceSection />

        {/* project-area-start */}
        <ProjectSection />

      </main>
      {/* footer-area-start */}
      <FooterSection/>

      {/* backto-top-area-start */}
      <button className="scroll-top scroll-to-target d-md-none" data-target="html">
      <i className="far fa-angle-double-up"></i>
    </button>
      <PushToButton />
    </>
  );
};
export default IndexPage;
