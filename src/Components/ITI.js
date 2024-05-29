import React from 'react';
import Image from 'next/image';
import welderImage from '../assets/img/welder.jpeg';
import electricianImage from '../assets/img/electritionImag.jpg';
import machine1Image from '../assets/img/lathMC.jpg';
import machine2Image from '../assets/img/ElectricalTestingMachine.jpg';

const ITI = () => {
  const departments = [
    { name: 'Welder', description: 'Learn the art of welding with hands-on training and theoretical knowledge.', image: welderImage },
    { name: 'Electrician', description: 'Gain expertise in electrical installations, maintenance, and repair.', image: electricianImage },
    // Add more departments as needed
  ];

  const trainingScheme = 'Our training schemes are designed to provide comprehensive knowledge and skills in various trades. We offer a blend of theoretical classes and practical workshops to ensure a well-rounded education.';

  const benefits = [
    'Industrial experience',
    'Practical experience',
    'Job guarantee',
  ];

  const machines = [
    { name: 'Lath Machine', image: machine1Image },
    { name: 'Electrical Testing Machine', image: machine2Image },
    // Add more machines as needed
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="mb-3">ITI Programs</h1>
          <p>Explore our ITI programs designed to equip students with technical skills for a successful career in various trades.</p>
        </div>

        <div className="row mb-5">
          <div className="col-lg-12">
            <h2>Departments</h2>
            <div className="row">
              {departments.map((dept, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card mb-4">
                    <Image src={dept.image} alt={dept.name} className="card-img-top" width={600} height={400} loading="lazy"/>
                    <div className="card-body">
                      <h5 className="card-title">{dept.name}</h5>
                      <p className="card-text">{dept.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-12">
            <h2>Training Scheme</h2>
            <p>{trainingScheme}</p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-12">
            <h2>Benefits</h2>
            <ul>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-12">
            <h2>Practical Experience</h2>
            <p>Our programs include extensive practical training to ensure students gain real-world experience in their chosen trade.</p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-12">
            <h2>Machines and Equipment</h2>
            <div className="row">
              {machines.map((machine, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card mb-4">
                    <Image src={machine.image} alt={machine.name} className="card-img-top" width={600} height={400} loading="lazy"/>
                    <div className="card-body">
                      <h5 className="card-title">{machine.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-12">
            <h2>Job Guarantee</h2>
            <p>We provide job placement assistance and guarantee employment opportunities for successful graduates.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ITI;
