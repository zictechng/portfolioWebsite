import React, { useState } from 'react';
import SideBarSection from '../component/sideBarSection';
import MobileMenuSection from '../component/mobileMenuSection';
import FooterSection from '../component/footerSection';
import PushToButton from '../component/pushTopButton';
import BreadCrumbSection from '../component/breadcrumbSection';
import HeaderPageSection from '../component/headerPageSection';

const AboutPage = () => {
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState([]);
  const pageTitle = 'About';
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
      <div className="body-overlay"></div>

      <main>

         <BreadCrumbSection 
            data={pageTitle}
         />
      {/* <!-- tp-abou-me-area-start --> */}
    <div className="am-about-me-area pt-110 pb-100">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-5 col-lg-5 col-12">
                  <div className="ac-ab-img fix">
                     <img src="assets/img/about/about_photo.png" alt=""/>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-7 col-12">
                  <div className="row">
                     <div className="col-xl-7 col-lg-8 col-md-6">
                        <div className="amaboutinfo">
                           <div className="amaboutinfo__client-info">
                              <h4>I'M Abel Uwadia</h4>
                              <p>Full Stack Developer</p>
                              <p>Full Stack Developer | Mobile App Developer | Website Developer | Accelerating Growth for Business.<br/> 
I have many years of experience building, and deploying several applications for start-up  and established businesses.</p>
                           </div>
                           <div className="amaboutinfo__experience">
                              <p><b>Expertise:</b> Frontend & Backend For Web and Mobile Application Development</p>
                              <p><b>Experience:</b> 6+ Years</p>
                              <p><a href="mailto:abelken99@gmail.com"><b>E-mail:</b> abelken99@gmail.com</a></p>
                           </div>
                        </div>
                     </div>
                     
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* <!-- exprience-area-start --> */}
      <div className="tp-skill-area">
         <div className="container">
            <div className="row">
               <div className="col-xl-12">
                  <div className="amskill">
                     <div className="amskill__title">
                        <h3 className="am-skill-title">Personal Background</h3>
                        <p className="pb-10"> 
                        I am passionate about business growth, passionate about challenges, 
                        driven by innovations, and providing solutions to business challenges 
                        leveraging on the use of technology, constantly seeking the most 
                        effective strategies solving business problems, helping start-up, and 
                        building relationships.<br/>
                        With many years of commercial experience as a developer designing, 
                        building, and deploying several applications for both start-up and 
                        established businesses, training and mentoring people in tech, couple 
                        with my industry experience in model web application development tech 
                        stack skills, I am very sure you will find my skills sets useful in any 
                        level of your business or organization.
                         </p>
                        <p>I have trained over 100+ individual including college student, state government workers,
                            those who want to venture into tech industry in different level to empower them
                            with the skills that they need to succeed.
                        </p>
                        <p>
                        My background as an IT personnel, along with my education in Computer Science, 
                        have allowed me to attain a strong foundation of technical skills. 
                        In addition to my skills, I also possess a great eye for design, 
                        hardworking, good communication skills, an achiever and goal getter.<br/>
                        I have helped many businesses and organization in their challenging time 
                        to scale up their business with the power of technology, help them to 
                        reach their goal, putting their business and services in front of their 
                        real customers. <br/>
                        In addition to that, I have also helped many other companies to resolve a 
                        critical problem between the company and their users at a time of 
                        disconnection between both parties with web technologies.<br/>
                        I am passionate about problem solving and delivery results, 
                        I have handled several projects from idea, design and development to 
                        full deployment with state government, co-operate body, individual and 
                        business owners. 
                        I developed solution that help business scale up and solved critical 
                        problem in the organization at the time. I am a solution provider, a 
                        problem solver you can call me.
                        In addition to the skills, I also have a great track record of success. 
                        I've been selected several times for the company trip for the top 10% of 
                        employees.
                        </p>
                        <p>
                        I have handle project rages from website development, sale management 
                        system, SEO, Custom Emailing System, banking mobile application 
                        development (FinTech), Mobile Loan Application, smart app for recording 
                        and tracking of goods, database application, organizational human resource 
                        management system (HR), mobile revenue collection application and many more.<br/>

                        I'm confident I can be a great addition to your company, and I
                         can handle your idea project! I would love to discuss any opportunity with 
                         you further.<br/> 
                         If you have any questions or anything I can help you with, please do not hesitate to contact me.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row feature-bottom-space">
               <div className="col-xl-4 col-lg-4">
                  <div className="amfeature">
                     <div className="amfeature__item">
                        <h4 className="am-skill-sm-title">Skills</h4>
                        <p className=" am-p-space-1">
                            I have a very good skills set on modern web development technological tools which I might
                            not be able to list all on here.</p>
                        </div>
                     <div className="amfeature__list">
                        <ul>
                           <li><i className="fal fa-check"></i> Nodejs</li>
                           <li><i className="fal fa-check"></i> Expressjs</li>
                           <li><i className="fal fa-check"></i> React</li>
                           <li><i className="fal fa-check"></i> React Native</li>
                           <li><i className="fal fa-check"></i> Angular</li>
                           <li><i className="fal fa-check"></i> PHP</li>
                           <li><i className="fal fa-check"></i> Laravel</li>
                           <li><i className="fal fa-check"></i> AWS</li>
                           <li><i className="fal fa-check"></i> Web Hosting & Management</li>
                           <li><i className="fal fa-check"></i> Jira</li>
                           <li><i className="fal fa-check"></i> And many more...</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4">
                  <div className="amfeature am-fea-space">
                     <div className="amfeature__item">
                        <h4 className="am-skill-sm-title">Education</h4>
                        <p className=" am-p-space-2">
                            I am graduate of Computer Science, with <strong>Higher National Diploma Degree (HND)</strong>
                             and skill vocational education in technology.</p>
                        </div>
                     <div className="amfeature__list">
                        <ul>
                           <li><i className="fal fa-check"></i> Primary School</li>
                           <li><i className="fal fa-check"></i> Secondary School</li>
                           <li><i className="fal fa-check"></i> University</li>
                           <li><i className="fal fa-check"></i> Vocational Education</li>
                           <li><i className="fal fa-check"></i> Technical Training in Technology</li>
                           <li><i className="fal fa-check"></i> IT Training</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4">
                  <div className="amfeature am-fea-space-2">
                     <div className="amfeature__item">
                        <h4 className="am-skill-sm-title">Awards</h4>
                        <p className="am-p-space-3">
                            The most interesting path of my life is the recognitions I received
                            as a result of my outstanding performance evaluations and contribution to the development 
                            and success to organizations and state in different levels.</p>
                        </div>
                     <div className="amfeature__list">
                        <ul>
                           <li><i className="fal fa-check"></i> State Government Award</li>
                           <li><i className="fal fa-check"></i> Organization Recognition</li>
                           <li><i className="fal fa-check"></i> National Youth Corp Award</li>
                           <li><i className="fal fa-check"></i> Private Companies Recognition</li>
                           <li><i className="fal fa-check"></i> Non Profit Organization Award</li>
                           <br/><br/>
                        </ul>
                     </div>
                  </div>
               </div>
                
                <div className="row">
                    <br/><br/>
                        <div className="col-xl-8 col-lg-7 col-md-7 col-12">
                            <div className="tp-footer-button text-start text-md-end">
                                <a className="tp-btn" href="assets/document/abel_ken_cv.pdf" download>Download My CV<i className="far fa-arrow-right"></i> </a>
                            </div>
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

export default AboutPage;
