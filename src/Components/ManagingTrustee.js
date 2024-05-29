
import React from 'react'
import About1 from '../assets/img/about-1.jpg'
import About2 from '../assets/img/about-2.jpg'
import About3 from '../assets/img/about-3.jpg'
import SchoolImg from '../assets/img/school/newHero.png'
import ManagingTrusteeImg from '../assets/img/managingtrustee.jpg'
// import SchoolImg1 from '../assets/img/school/1445181c-5c59-4fd4-9470-fb92e929cfb8.png'
// import SchoolImg2 from '../assets/img/school/1cdf13e8-fadb-4126-9db7-133c391ecebe.png'
import Image from 'next/image'

const ManagingTrustee = () => {
    return (
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">

                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 class="mb-4">Managing Trustee</h1>
                    <p><b>Visionary Leadership:</b> Our Managing Trustee, Mr. Jd Dhabhi, is committed to fostering an environment of academic excellence and holistic development. His vision drives the continuous improvement of our educational standards.</p>
                    <p><b>Quality Education:</b> Under his leadership, Shivam Vidhyalay is renowned for providing quality education, leading to outstanding academic outcomes for students.</p>
                    <p class="mb-4"><b>Experienced and Dedicated Faculty:</b> He ensures the school has a team of experienced and dedicated teachers who effectively impart knowledge and support students' overall development.</p>
                    <p class="mb-4"><b>Well-Equipped Facilities:</b> Thanks to his efforts, Shivam Vidhyalay boasts well-equipped facilities, including libraries, laboratories, sports grounds, and technology resources, enhancing the learning experience.</p>
                    <div class="row g-4 align-items-center">
                        {/* <div class="col-sm-6">
                            <a class="btn btn-primary rounded-pill py-3 px-5" href>Read More</a>
                        </div> */}
                    </div>
                </div>

                    <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                        <div class="row">
                            <div class="col-12 text-center">
                                <Image class="img-fluid bg-light" src={ManagingTrusteeImg} alt />
                            </div>
                            {/* <div class="col-6 text-start" style={{ "margin-top": "-150px" }}>
                                <Image class="img-fluid w-100 rounded-circle bg-light p-3" src={SchoolImg1} alt />
                            </div>
                            <div class="col-6 text-end" style={{ "margin-top": "-150px" }}>
                                <Image class="img-fluid w-100 rounded-circle bg-light p-3" src={SchoolImg2} alt />
                            </div> */}
                        </div>
                    </div>
                 

                </div>
            </div>
        </div>
    )
}

export default ManagingTrustee