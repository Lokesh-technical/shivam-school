


import React from 'react';
import Link from 'next/link';
import sportsimage from "../assets/img/sports/sportsImage2.jpg"
import culturalfestimage from "../assets/img/Cultural Fest/culturalfestimage1.jpg"
import holiimage from "../assets/img/Holi/holiimage1.jpg"

import utrayanimage2 from "../assets/img/Utrayan/utrayanimage2.jpg"
import Image from 'next/image';

const events = [

    {
        title: 'Makar sankranti Celebration',
        description: 'Makar sankranti, the festival of kites, is a vibrant event at our school. Students enjoy flying kites, engaging in friendly competitions, and savoring traditional foods.',
        image: utrayanimage2,
        path: "uttrayancelebration"
    },
    {
        title: 'Sports',
        description: 'Sports is an exciting time filled with various athletic events and competitions. Students showcase their skills in sports like football, basketball, athletics, and more.',
        image: sportsimage,
        path: "sportsevent"
    },
    {
      title: 'Holi Celebration',
      description: 'Holi, the festival of colors, is joyfully celebrated at our school with vibrant colors, traditional sweets, and cultural programs.',
      image: holiimage,
      path: "holicelebration"
  },
    {
        title: 'Cultural Fest',
        description: 'The Cultural Fest is a showcase of our students\' talents in music, dance, drama, and art. It is a celebration of cultural diversity and artistic expression.',
        image: culturalfestimage,
        path: "culturalfest"
    },
];

const SchoolEvent = () => {
  return (
    <div className="container-xxl py-5">
    <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <h1 className="mb-3">School Events</h1>
            <p>Join us in celebrating various events throughout the year that bring our school community together.</p>
        </div>
        <div className="row g-4">
            {events.map((event, index) => (
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${index * 0.2}s`} key={index}>
                    <Link href={`/${event.path}`} passHref>
                        <div className="card" style={{ cursor: 'pointer' }}>
                            <Image src={event.image} className="card-img-top" alt={event.title} width={400} height={300} loading="lazy" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{event.title}</h5>
                                <p className="card-text">{event.description}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
</div>
  );
}

export default SchoolEvent;
