import Image from "next/image";
import React from "react";
import Class1img from "../../assets/img/classes-1.jpg";
import Class2img from "../../assets/img/classes-2.jpg";
import Class3img from "../../assets/img/classes-3.jpg";
import Class4img from "../../assets/img/classes-4.jpg";
import Class5img from "../../assets/img/classes-5.jpg";
import Class6img from "../../assets/img/classes-6.jpg";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div
        class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6 footer-details-styles">
              <h3 class="text-white mb-4">Get In Touch</h3>
              <p class="mb-2">
                <i class="fa fa-map-marker-alt me-3"></i>Shivam vidhyalay
                At.post.Bagodara Ta.bavla. dist.Ahmedabad Indraprasth
                society.gujarat.382230
              </p>
              <p class="mb-2">
                <i class="fa fa-phone-alt me-3"></i>9909996765
              </p>
              <p class="mb-2"><i class="fa fa-envelope me-3"></i><a
                            href='#' class="__cf_email__"
                            data-cfemail="9af3f4fcf5daffe2fbf7eaf6ffb4f9f5f7">shivamvidhyalay199@gmail.com</a></p>
              <div class="d-flex pt-2">
                <a
                  class="btn btn-outline-light btn-social"
                  href="https://www.instagram.com/shivam_vidhyalay/?igsh=MW45ZDl3aHpjNXJoMA%3D%3D"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 footer-routes-styles">
              <h3 class="text-white mb-4">Quick Links</h3>
              <Link href="/" passHref>
                <div class="btn btn-link text-white-50" href="/">
                  Home
                </div>
              </Link>
              <Link href="/about" passHref>
                <div class="btn btn-link text-white-50" href="/about">
                  About Us
                </div>
              </Link>
              <Link href="/contact" passHref>
                <div class="btn btn-link text-white-50" href="contact">
                  Contact Us
                </div>
              </Link>
              <Link href="/contact" passHref>
                <div class="btn btn-link text-white-50" href="/contact">
                  Our Services
                </div>
              </Link>
            </div>
            <div class="col-lg-3 col-md-6">
              <h3 class="text-white mb-4">Photo Gallery</h3>
              <div class="row g-2 pt-2">
                <div class="col-4">
                  <Image
                    class="img-fluid rounded bg-light p-1"
                    src={Class1img}
                    width={100}
                    height={100}
                    alt
                  />
                </div>
                <div class="col-4">
                  <Image
                    class="img-fluid rounded bg-light p-1"
                    src={Class2img}
                    alt
                  />
                </div>
                <div class="col-4">
                  <Image
                    class="img-fluid rounded bg-light p-1"
                    src={Class3img}
                    alt
                  />
                </div>
                <div class="col-4">
                  <Image
                    class="img-fluid rounded bg-light p-1"
                    src={Class4img}
                    alt
                  />
                </div>
                <div class="col-4">
                  <Image
                    class="img-fluid rounded bg-light p-1"
                    src={Class5img}
                    alt
                  />
                </div>
                <div class="col-4">
                  <Image
                    class="img-fluid rounded bg-light p-1"
                    src={Class6img}
                    alt
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h3 class="text-white mb-4">Newsletter</h3>
              <p>
                Stay connected and be the first to know about our latest news,
                events, and updates by subscribing to our informative
                newsletter.
              </p>
              <div
                class="position-relative mx-auto"
                style={{ "max-width": "400px" }}
              >
                <input
                  class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            <div class="row">
              <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a class="border-bottom" href="#">
                  Shivam Vidhyalay
                </a>
                , All Right Reserved. Designed By{" "}
                <a class="border-bottom" href="https://koliinfotech.com/">
                  Koli Infotech Pvt. Ltd.
                </a>
              </div>
              <div class="col-md-6 text-center text-md-end">
                <div class="footer-menu">
                  <a href="#">Home</a>
                  <a href="#">Cookies</a>
                  <a href="#">Help</a>
                  <a href="#">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
