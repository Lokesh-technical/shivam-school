import React from 'react';
import image1 from '../assets/img/Holi/holiimage1.jpg';
import image2 from '../assets/img/Holi/holiimage2.jpg';
import Image from 'next/image';

const HoliImages = [
    image1,
    image2,    
];

const HoliCelebration = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
                    <h1 className="mb-3">Holi Celebration</h1>
                    <p>Holi, the festival of colors, is joyfully celebrated at our school with vibrant colors, traditional sweets, and cultural programs.</p>
                </div>
                <div className="row justify-content-center">
                    {HoliImages.map((image, index) => (
                        <div className="col-lg-6 col-md-6 text-center my-3 wow fadeInUp" data-wow-delay={`${index * 0.2}s`} key={index}>
                            <div className="image-container" style={{ borderRadius: "8px", overflow: "hidden" }}>
                                <Image src={image} alt={`Holi Celebration ${index + 1}`} width={550} height={400} loading="lazy" className="zoom-on-hover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .zoom-on-hover {
                    transition: transform 0.3s ease-in-out;
                }
                .zoom-on-hover:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
}

export default HoliCelebration;
