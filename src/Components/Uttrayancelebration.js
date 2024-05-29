import React from 'react';
import image1 from '../assets/img/Utrayan/utrayanimage1.jpg'
import image2 from '../assets/img/Utrayan/utrayanimage2.jpg'
import Image from 'next/image';

const UttrayanImages = [
    image1,
    image2,    
];

const Uttrayancelebration = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
                    <h1 className="mb-3">Makar Sankranti Celebration</h1>
                    <p>Makar Sankranti, the festival of kites, is a vibrant event at our school. Students enjoy flying kites, engaging in friendly competitions, and savoring traditional foods.</p>
                </div>
                <div className="row justify-content-center">
                    {UttrayanImages.map((image, index) => (
                        <div className="col-lg-6 col-md-6 text-center my-3 wow fadeInUp" data-wow-delay={`${index * 0.2}s`} key={index}>
                            <div className="image-container" style={{borderRadius: "8px"}}>
                                <Image src={image} alt={`Makar Sankranti Celebration ${index + 1}`} width={600} height={400} loading="lazy" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Uttrayancelebration;
