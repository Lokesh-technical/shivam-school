import React from 'react'
import About1 from '../assets/img/about-1.jpg'
import About2 from '../assets/img/about-2.jpg'
import About3 from '../assets/img/about-3.jpg'
import UserImg from '../assets/img/user.jpg'
import Image from 'next/image'

const LearnMore = () => {
    return (
        <>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5 align-items-center">
                    <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <Image class="img-fluid w-75 rounded-circle bg-light p-3" src={About1} alt />
                                </div>
                                <div class="col-6 text-start" style={{ "margin-top": "-150px" }}>
                                    <Image class="img-fluid w-100 rounded-circle bg-light p-3" src={About2} alt />
                                </div>
                                <div class="col-6 text-end" style={{ "margin-top": "-150px" }}>
                                    <Image class="img-fluid w-100 rounded-circle bg-light p-3" src={About3} alt />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 class="mb-4">Learn More About Our Work And Our Cultural Activities</h1>
                            <p>Discover the enriching experiences that await at our school through a diverse range of cultural activities, showcasing our commitment to holistic education and fostering a vibrant learning community. Explore and learn more about the exciting work we do!
                            </p>
                            <p class="mb-4">Immerse yourself in a dynamic learning journey that goes beyond textbooks, as we invite you to explore our wide array of engaging cultural activities that cultivate creativity, embrace diversity, and ignite a passion for lifelong learning.</p>
                            <div class="row g-4 align-items-center">
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default LearnMore