import React, { useState } from 'react';
import MobileMenuSection from '../component/mobileMenuSection';
import SideBarSection from '../component/sideBarSection';
import HeaderPageSection from '../component/headerPageSection';
import FooterSection from '../component/footerSection';
import BreadCrumbSection from '../component/breadcrumbSection';
import { Link } from 'react-router-dom';

const Contact = () => {
   const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);
   const [isSubMenuVisible, setIsSubMenuVisible] = useState([]);
   const pageTitle = 'Contact';
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
    <body>

    <HeaderPageSection 
      buttonClick={toggleOffcanvas} />
   
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
    <BreadCrumbSection data={pageTitle}/>
        <div className="tp-contact-area pt-135 pb-130">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 col-lg-6 ">
                 <div className="tp-contct-wrapper contact-space-40">
                  <div className="tp-contact-thumb mb-60">
                     <img src="assets/img/contact/contact-1.jpg" alt=""/>
                  </div>
                  <div className="tp-contact-info mb-40">
                     <h4 className="contact-title">Mail Address</h4>
                     <span><a href="mailto:(abelken99@gmail.com)">(abelken99@gmail.com)</a></span>
                     
                  </div>
                  <div className="tp-contact-info mb-40">
                     <h4 className="contact-title">Phone Number</h4>
                     <span><a href="tel:(+447884619833)">(+44 788 4619 833)</a></span>
                     
                  </div>
                  {/* <!-- <div className="tp-contact-info">
                     <h4 className="contact-title">Address line</h4>
                     <span><a href="https://www.google.com/maps" target="blank">Bowery St, New York, NY 10013,USA. Bowery Steae</a></span>
                  </div> --> */}
                 </div>
               </div>
               <div className="col-xl-6 col-lg-6">
                  <div className="tpcontact">
                        {/* <?php echo $success_message?> */}
                     <h4 className="tp-contact-big-title">Let’s Talk...</h4>
                     <p>How may I help you today? please, drop me a message I will get back swiftly, thank you.</p>
                       
                     <div className="tpcontact__form tpcontact__form-3">
                        {/* <form method="post"> */}
                        <input name="name" value='<?php echo @$contact_name?>' type="text" placeholder="Enter your Name" />
                           <input name="email" value='<?php echo @$contact_email?>' type="email" placeholder="Enter your Mail" />
                           <input name="phone_number" value='<?php echo @$phone_contact?>' type="number" placeholder="Enter your Phone" />
                           <textarea name="contact_message" placeholder="Enter your Message"></textarea>
                           <h3>3+4-4</h3>
                           <input name="ques" type="number" placeholder="Enter correct answer"/>
                           <button type="submit" name="btn_contact" className="tp-btn-yellow">Send Message</button>
                        {/* </form> */}
                        
                     </div>
                     <p className="ajax-response"></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </main>

    <FooterSection/>
    </body>
    </>
  );
}

export default Contact;
