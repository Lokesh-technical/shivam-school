import React from 'react';
import sportsImage1 from '../assets/img/sports/sportsimage1.jpg';
import sportsImage2 from '../assets/img/sports/sportsImage2.jpg';
import sportsImage3 from '../assets/img/sports/sportsImage3.jpg';
import sportsImage4 from '../assets/img/sports/sportsimage4.jpg';
import Image from 'next/image';

const SportsImages = [
    sportsImage1,
    sportsImage2,
    sportsImage3,
    sportsImage4
];

const Sports = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
                    <h1 className="mb-3">Sports Event</h1>
                    <p>Join us in celebrating our sports event. Our students showcase their skills in various sports and enjoy friendly competitions.</p>
                </div>
                <div className="row justify-content-center">
                    {SportsImages.map((image, index) => (
                        <div className="col-lg-6 col-md-6 text-center my-3 wow fadeInUp" data-wow-delay={`${index * 0.2}s`} key={index}>
                            <div className="image-container" style={{ borderRadius: "8px" }}>
                                <Image src={image} alt={`Sports Event ${index + 1}`} width={550} height={400} loading="lazy" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sports;
