// import React from 'react'
// import ImportmentImg from '../assets/img/appointment.jpg'
// import Image from 'next/image'
// const MakeAppointment = () => {
//     return <>
//     <div class="container-xxl py-5">
//             <div class="container">
//                 <div class="bg-light rounded">
//                     <div class="row g-0">
//                         <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
//                             <div class="h-100 d-flex flex-column justify-content-center p-5">
//                                 <h1 class="mb-4">Make Appointment</h1>
//                                 <form>
//                                     <div class="row g-3">
//                                         <div class="col-sm-6">
//                                             <div class="form-floating">
//                                                 <input type="text" class="form-control border-0" id="gname"
//                                                     placeholder="Gurdian Name"/>
//                                                 <label for="gname">Gurdian Name</label>
//                                             </div>
//                                         </div>
//                                         <div class="col-sm-6">
//                                             <div class="form-floating">
//                                                 <input type="email" class="form-control border-0" id="gmail"
//                                                     placeholder="Gurdian Email"/>
//                                                 <label for="gmail">Gurdian Email</label>
//                                             </div>
//                                         </div>
//                                         <div class="col-sm-6">
//                                             <div class="form-floating">
//                                                 <input type="text" class="form-control border-0" id="cname"
//                                                     placeholder="Child Name"/>
//                                                 <label for="cname">Child Name</label>
//                                             </div>
//                                         </div>
//                                         <div class="col-sm-6">
//                                             <div class="form-floating">
//                                                 <input type="text" class="form-control border-0" id="cage"
//                                                     placeholder="Child Age"/>
//                                                 <label for="cage">Child Age</label>
//                                             </div>
//                                         </div>
//                                         <div class="col-12">
//                                             <div class="form-floating">
//                                                 <textarea class="form-control border-0"
//                                                     placeholder="Leave a message here" id="message"
//                                                     style={{"height": "100px"}}></textarea>
//                                                 <label for="message">Message</label>
//                                             </div>
//                                         </div>
//                                            <div class="col-12">
//                                             <button class="btn btn-primary w-100 py-3" type="submit">Submit</button>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                         <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{"min-height": "400px"}}>
//                             <div class="position-relative h-100">
//                                 <Image class="position-absolute w-100 h-100 rounded" src={ImportmentImg}
//                                     style={{"object-fit": "cover"}}/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
// }

// export default MakeAppointment




import React, { useRef, useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import ImportmentImg from '../assets/img/appointment.jpg';

const MakeAppointment = () => {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    const form = formRef.current;
    const phoneRegex = /^\d{10}$/;

    if (!form.student_name.value.trim()) errors.student_name = "Student Name is required";
    if (!form.email.value.trim()) errors.email = "Email is required";
    if (!form.phone.value.trim()) {
      errors.phone = "Phone is required";
    } else if (!phoneRegex.test(form.phone.value)) {
      errors.phone = "Phone number must be exactly 10 digits";
    }
    if (!form.message.value.trim()) errors.message = "Message is required";
  
    return errors;
};
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      emailjs.sendForm('service_wkwm23j', 'template_fus6jvb', formRef.current, 'AZjFqQW7WXj3blazT')
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Your appointment request was sent successfully. Thank you!',
            showConfirmButton: true,
          });
          formRef.current.reset();
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.text,
          });
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded">
          <div className="row g-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <h1 className="mb-4">Make Appointment</h1>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control border-0" id="student_name" name="student_name" placeholder="Student Name" />
                        <label htmlFor="student_name">Student Name</label>
                        {errors.student_name && <small className="text-danger">{errors.student_name}</small>}
                      </div>
                      </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="email" className="form-control border-0" id="email" name="email" placeholder="Email" />
                        <label htmlFor="email">Email</label>
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className={`form-control border-0 ${errors.phone && 'is-invalid'}`} id="phone" name="phone" placeholder="Phone" maxLength={10}/>
                        <label htmlFor="phone">Phone</label>
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control border-0" id="message" name="message" placeholder="Leave a message here" style={{ height: "100px" }}></textarea>
                        <label htmlFor="message">Message</label>
                        {errors.message && <small className="text-danger">{errors.message}</small>}
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <Image className="position-absolute w-100 h-100 rounded" src={ImportmentImg} style={{ objectFit: "cover" }} alt="Appointment Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;




