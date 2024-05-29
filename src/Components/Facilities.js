import React from "react";

const Facilities = () => {
  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ "max-width": "600px" }}
          >
            <h1 class="mb-3">School Facilities</h1>
            <p>
              State-of-the-art facilities fostering a conducive learning
              environment for students to excel and grow.
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="facility-item">
                <div class="facility-icon bg-primary">
                  <span class="bg-primary"></span>
                  <i class="fa fa-bus-alt fa-3x text-primary"></i>
                  <span class="bg-primary"></span>
                </div>
                <div class="facility-text bg-primary">
                  <h3 class="text-primary mb-3">School Bus</h3>
                  <p class="mb-0">
                    Safe and reliable transportation ensuring students
                    convenience and peace of mind with our well-maintained
                    school bus fleet.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="facility-item">
                <div class="facility-icon bg-success">
                  <span class="bg-success"></span>
                  <i class="fa fa-futbol fa-3x text-success"></i>
                  <span class="bg-success"></span>
                </div>
                <div class="facility-text bg-success">
                  <h3 class="text-success mb-3">Playground</h3>
                  <p class="mb-0">
                    A vibrant and engaging playground where students can unleash
                    their imagination, foster social connections, and embrace
                    active play.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="facility-item">
                <div class="facility-icon bg-warning">
                  <span class="bg-warning"></span>
                  <i class="fa fa-home fa-3x text-warning"></i>
                  <span class="bg-warning"></span>
                </div>
                <div class="facility-text bg-warning">
                  <h3 class="text-warning mb-3">Healthy Canteen</h3>
                  <p class="mb-0">
                    A nutritious and diverse canteen offering delicious meals
                    and snacks that promote students health and well-being.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div class="facility-item">
                <div class="facility-icon bg-info">
                  <span class="bg-info"></span>
                  <i class="fa fa-chalkboard-teacher fa-3x text-info"></i>
                  <span class="bg-info"></span>
                </div>
                <div class="facility-text bg-info">
                  <h3 class="text-info mb-3">Positive Learning</h3>
                  <p class="mb-0">
                    A positive learning environment that inspires curiosity,
                    fosters creativity, and empowers students to reach their
                    full potential
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="facility-item">
                <div class="facility-icon bg-primary">
                  <span class="bg-primary"></span>
                  <i class="fa fa-school fa-3x text-primary"></i>
                  <span class="bg-primary"></span>
                </div>
                <div class="facility-text bg-primary">
                  <h3 class="text-primary mb-3">HSC and SSC Exam Center</h3>
                  <p class="mb-0">
                    Our school is a certified HSC and SSC exam center, providing
                    a quiet, well-equipped environment for students to excel in
                    their exams.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="facility-item">
                <div class="facility-icon bg-success">
                  <span class="bg-success"></span>
                  <i class="fa fa-bed fa-3x text-success"></i>
                  <span class="bg-success"></span>
                </div>
                <div class="facility-text bg-success">
                  <h3 class="text-primary mb-3">Hostel for Boys</h3>
                  <p class="mb-0">
                    Our boys hostel offers a safe, comfortable living
                    environment with modern amenities, spacious rooms,
                    nutritious meals, and 24/7 security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
