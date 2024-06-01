import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const ContactUs = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your Query Send Successfully, Thank You For Contacting us!',
          showConfirmButton: true,
        });
        formRef.current.reset();
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.text
        });
      });
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
          <h1 className="mb-3">Get In Touch</h1>
          <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
            eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        <div className="row g-4 mb-5">
          {/* Contact information */}
        </div>
        <div className="bg-light rounded">
          <div className="row g-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              {/* Contact form */}
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you re doNewsletterne. <a href="#">Download Now</a>.</p>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input type="text" className="form-control border-0" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input type="email" className="form-control border-0" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control border-0" id="subject" placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: "100px" }}></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: "400px" }}>
              {/* Google Maps iframe */}
              <div class="position-relative h-100">
                    <iframe class="position-relative rounded w-100 h-100" loading='lazy' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14729.527130165101!2d72.18835473281435!3d22.63954987550919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ec43025530bf5%3A0x8ac58ec579c2ea51!2sSHIVAM%20VIDHYALAYA!5e0!3m2!1sen!2sin!4v1717243607063!5m2!1sen!2sin" frameborder="0" style={{ "min-height": "400px", "border": "0" }} allowfullscreen aria-hidden="false" tabindex="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
