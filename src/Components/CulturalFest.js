import React from 'react';
import image1 from '../assets/img/Cultural Fest/culturalfestimage1.jpg';
import image2 from '../assets/img/Cultural Fest/culturalfestimage2.jpg';
import image3 from '../assets/img/Cultural Fest/culturalfestimage3.jpeg';
import image4 from '../assets/img/Cultural Fest/culturalfestimage4.jpeg';
import image5 from '../assets/img/Cultural Fest/culturalfestimage5.jpeg';
import image6 from '../assets/img/Cultural Fest/culturalfestimage6.jpeg';
import image7 from '../assets/img/Cultural Fest/culturalfestimage7.jpeg';
import Image from 'next/image';

const CulturalFestImages = [
    image1,
    image2,  
    image3,
    image4,
    image5,
    image6,
    image7,
];

const CulturalFest = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
                    <h1 className="mb-3">Cultural Fest</h1>
                    <p>The Cultural Fest showcases our students talents in music, dance, drama, and art. It is a celebration of cultural diversity and artistic expression.</p>
                </div>
                <div className="row justify-content-center">
                    {CulturalFestImages.map((image, index) => (
                        <div className="col-lg-6 col-md-6 text-center my-3 wow fadeInUp" data-wow-delay={`${index * 0.2}s`} key={index}>
                            <div className="image-container" style={{ borderRadius: "8px", overflow: "hidden" }}>
                                <Image src={image} alt={`Cultural Fest ${index + 1}`} width={600} height={380} loading="lazy" className="zoom-on-hover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CulturalFest;
