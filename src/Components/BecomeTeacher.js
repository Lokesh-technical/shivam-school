import React from 'react'
import CallActionImg from '../assets/img/call-to-action.jpg'
import Image from 'next/image'
const BecomeTeacher = () => {
    return <>
        <div class="container-xxl py-5">
            <div class="container">
                <div class="bg-light rounded">
                    <div class="row g-0">
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{"min-height": "400px"}}>
                            <div class="position-relative h-100">
                                <Image class="position-absolute w-100 h-100 rounded" src={CallActionImg}
                                    style={{"object-fit": "cover"}} loading='lazy'/>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div class="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 class="mb-4">Get Admission Today</h1>
                                <p class="mb-4">Embark on a fulfilling and rewarding career as an educator, shaping the future by joining our esteemed team of dedicated teachers who inspire and empower students to thrive academically, emotionally, and socially.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default BecomeTeacher