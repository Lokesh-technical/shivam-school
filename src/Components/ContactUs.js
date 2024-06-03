import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactUs = () => {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      try {
        emailjs.init("YOUR_PUBLIC_KEY");
        await emailjs.sendForm(
          "service_wkwm23j",
          "template_fus6jvb",
          formRef.current,
          "AZjFqQW7WXj3blazT"
        );
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your query was sent successfully. Thank you for contacting us!",
          showConfirmButton: true,
        });
        formRef.current.reset();
        setErrors({});
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text:
            error.message || "An error occurred while sending your message.",
        });
      } finally {
        setSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = () => {
    const errors = {};
    const form = formRef.current;
    const phoneRegex = /^\d+$/;

    if (!form.student_name.value.trim())
      errors.student_name = "Student Name is required";
    if (!form.email.value.trim()) errors.email = "Email is required";
    if (!form.phone.value.trim()) {
      errors.phone = "Phone is required";
    } else if (!phoneRegex.test(form.phone.value)) {
      errors.phone = "Phone number can only contain digits";
    }
    if (!form.message.value.trim()) errors.message = "Message is required";
    return errors;
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="mb-3">Get In Touch</h1>
          <p>
          Discover a nurturing environment where students thrive academically, socially, and emotionally. Our dedicated staff fosters a love for learning, ensuring every student reaches their full potential. Explore our programs and facilities to become part of our school family.
          </p>
        </div>
     
        <div className="bg-light rounded">
          <div className="row g-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              {/* Contact form */}
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <h1 className="mb-4">Make Appointment</h1>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className={`form-control border-0 ${
                            errors.student_name && "is-invalid"
                          }`}
                          id="student_name"
                          name="student_name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="student_name">Your Name</label>
                        {errors.student_name && (
                          <div className="invalid-feedback">
                            {errors.student_name}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className={`form-control border-0 ${
                            errors.email && "is-invalid"
                          }`}
                          id="email"
                          name="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className={`form-control border-0 ${
                            errors.phone && "is-invalid"
                          }`}
                          id="phone"
                          name="phone"
                          placeholder="Phone Number"
                          maxLength={10}
                        />
                        <label htmlFor="phone">Phone Number</label>
                        {errors.phone && (
                          <div className="invalid-feedback">{errors.phone}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className={`form-control border-0 ${
                            errors.message && "is-invalid"
                          }`}
                          id="message"
                          name="message"
                          placeholder="Leave a message here"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                        {errors.message && (
                          <div className="invalid-feedback">
                            {errors.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-2">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                      disabled={submitting}
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: "400px" }}
            >
              {/* Google Maps iframe */}
              <div className="position-relative h-100">
                <iframe
                  className="position-relative rounded w-100 h-100"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14729.527130165101!2d72.18835473281435!3d22.63954987550919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ec43025530bf5%3A0x8ac58ec579c2ea51!2sSHIVAM%20VIDHYALAYA!5e0!3m2!1sen!2sin!4v1717243607063!5m2!1sen!2sin"
                  frameborder="0"
                  style={{ minHeight: "400px", border: "0" }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
