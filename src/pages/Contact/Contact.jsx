import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import './Contact.css'
import myImg from '../../assets/image/aboutme.jpg'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';




const Contact = () => {

    const form_submit_msg = () => toast.success('Successfully Submitted ');


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('portfolio@123', 'template_fadwigl', form.current, {
          publicKey: '3K8bxE_YlT7Iajg-0',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            alert('FAILED...', error.message);
          },
        );

        e.target.reset();
    };



    return (
        <>
            <Navbar/>
            <section className=" container" id="contact">

                <div className="section-title">
                    <h3>Contact Me</h3>
                    <h5>Get in touch</h5>
                </div>

                <div className="contact">
                    <div className="contact_content">

                        <div className="contact-image">
                            <div className="contact-me-image">
                                <img src={myImg} alt="About Image" />
                            </div>
                        </div>

                        <div className="contact_icon">
                            <Link to="mailto:wmtutul@gmail.com" target="_blank" rel="noreferrer">
                                <i className="fa-solid fa-envelope"></i>
                            </Link>
                            <Link to="https://api.whatsapp.com/send?phone=+8801926484274&text=Hello, more information!" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-whatsapp"></i>
                            </Link>
                            <Link to="https://m.me/crypticalcoder" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-facebook-messenger"></i>
                            </Link>
                        </div>
                    </div>


                  
                    <form action="" ref={form} onSubmit={sendEmail}>
                        <h4>Write me your message</h4>
                        <input type="text" name='client_name' placeholder='Type your name' required />
                        <input type="email" name='client_email' placeholder='Type your email id' required />
                        <input type="text" name='client_whatsapp-no' placeholder='Type your Whatsapp no' required />
                        <textarea type="text" name="client_message" rows="4" placeholder='Type your message here' required></textarea>              
                      
                        <button type='submit' onClick={form_submit_msg}>Send</button>
                        <Toaster position="top-center"  />
                                                                            
                    </form>
                </div>

            </section>
            <Footer />
        </>

    );
};

export default Contact;






