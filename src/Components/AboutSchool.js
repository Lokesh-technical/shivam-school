
import React from 'react'
import SchoolImg from '../assets/img/school/newHero.png'
import Image from 'next/image'

const AboutSchool = () => {
    return (
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                        <div class="row">
                            <div class="col-12 text-center">
                                <Image class="img-fluid bg-light" src={SchoolImg} alt />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="mb-4">Advantages of to Join the Shivam Vidhyalay</h1>
                        <p><b>Quality Education:</b> Shivam Vidhyalay might have a reputation for providing quality education, which can lead to better academic outcomes for students. </p>
                        <p class="mb-4"><b>Experienced and Dedicated Faculty:</b> The school may have a team of experienced and dedicated teachers who can impart knowledge effectively and support students overall development.</p>
                        <p class="mb-4"><b>Well-Equipped Facilities:</b> Shivam Vidhyalay may have well-equipped facilities, such as libraries, laboratories, sports grounds, and technology resources, to enhance the learning experience.</p>
                        <div class="row g-4 align-items-center">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutSchool