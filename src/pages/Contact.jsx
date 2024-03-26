import React, { useState } from 'react';
import MobileMenuSection from '../component/mobileMenuSection';
import SideBarSection from '../component/sideBarSection';
import HeaderPageSection from '../component/headerPageSection';
import FooterSection from '../component/footerSection';
import BreadCrumbSection from '../component/breadcrumbSection';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import PushToButton from '../component/pushTopButton';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import client from '../component/client';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
   const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);
   const [isSubMenuVisible, setIsSubMenuVisible] = useState([]);
   const pageTitle = 'Contact';
   const correctAnswer = '3';
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

   const [fullName, setFullName] = useState("");
   const [contactPhone, setContactPhone] = useState("");
   const [contactEmail, setContactEmail] = useState("");
   const [contactMessage, setContactMessage] = useState("");
   const [contactAnswer, setContactAnswer] = useState("");
   
   const [showLoader, setShowLoader] = useState(false);
   const [showModal, setShowModal] = useState(false);

    // submit contact form here by checking details
  const submitCOntactForm  = () =>{
    
   if(fullName === '' || contactPhone === '' || contactEmail === '' || contactMessage === ''){
     toast.error('All fields required', {
       position: "top-right",
       autoClose: 3000,
       hideProgressBar: true,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "colored",
       });
       return
     }
     if(contactAnswer !== correctAnswer) {
      toast.error('Security Checked Failed! Wrong Answered', {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         });
         return
     }
     else if(fullName !== '' && contactPhone !== '' && contactEmail !== '' && contactMessage !== ''){
       setShowModal(true);
       }
    }

    // process the data to backend api call
    const processMessage = async() => {
      
      setShowLoader(true)
      const sendData ={
        "customer_name": fullName,
        "customer_email": contactEmail,
        "customer_phone": contactPhone,
        "customer_message": contactMessage,
      }
      //console.log("Sending...", sendData)
      try {
        const res = await client.post(`/api/submit_ticketWebsite`, sendData, {
        })
        if(res.data.msg =='200'){
          toast.success('Message sent successfully',
              {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                transition: Bounce,
                newestOnTop: false,
                theme: "light",
                });
                setFullName("")
                setContactEmail("")
                setContactMessage("")
                setContactPhone("")
                setContactAnswer("")
            }
          else if(res.data.status =='500'){
            toast.error(res.data.message, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
            }
          } catch (error) {
            console.log(error.message)
          }
          finally{
            setShowLoader(false)
            setShowModal(false);
          }
    }

    // close confirm modal
    const closeModal = () =>{
      setShowModal(false);
      setShowLoader(false)   
    }

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
                  <ToastContainer/>
                     <h4 className="tp-contact-big-title">Let’s Talk...</h4>
                     <p>How may I help you today? please, drop me a message I will get back swiftly, thank you.</p>
                       
                     <div className="tpcontact__form tpcontact__form-3">
                     <form onSubmit={e => e.preventDefault()}>
                        <input name="name" 
                           value={fullName}
                           required="required"
                           onChange={(e) => setFullName(e.target.value)}
                           type="text" placeholder="Enter your Name *" />
                           
                           <input name="email" type="email"
                           value={contactEmail}
                           placeholder="Email*"
                           required="required"
                           onChange={(e) => setContactEmail(e.target.value.trim())}
                            />
                           <input 
                           value={contactPhone}
                           required="required"
                           onChange={(e) => setContactPhone(e.target.value.trim())}
                           name="phone_number" type="number" placeholder="Enter your Phone" />
                           <textarea name="contact_message"
                           value={contactMessage}
                           onChange={(e) => setContactMessage(e.target.value)}
                            placeholder="Enter your Message*"></textarea>
                           <h3>3+4-4</h3>
                           <input name="ques" 
                           value={contactAnswer}
                           required="required"
                           onChange={(e) => setContactAnswer(e.target.value.trim())}
                           type="number" placeholder="Enter correct answer"/>
                           <button className="tp-btn-yellow" onClick={() => submitCOntactForm()}>Send Message</button>
                        </form>
                        
                     </div>
                     <p className="ajax-response"></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </main>
    <Modal show={showModal} 
        onHide={closeModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}>
          <Modal.Header>
          <Modal.Title>Notice!</Modal.Title>
        </Modal.Header>
          <Modal.Body><p>By submitting this form, be rest assured I will get in shortly!</p></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal} disabled={showLoader}>
                Close
              </Button>
                <Button className="btn" onClick={processMessage} disabled={showLoader}>
                 {showLoader ? <>
                  <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                    />{" "}
                  Processing...
                </> : 'Send Message'}
              </Button>
            </Modal.Footer>
        
        </Modal>

    <FooterSection/>
    <PushToButton/>
    </body>
    </>
  );
}

export default Contact;
