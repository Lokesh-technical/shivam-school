import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import logo from "../../assets/img/Logo.jpeg";

const Header = () => {
    const [flag, setFlag] = useState("");
    const [toggle, setToggle] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const path = window.location.pathname;
        setFlag(path);
    }, []);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0 navbar-style">
            <Link href="/" passHref legacyBehavior>
                <div className="navbar-brand">
                    <h1 className="m-0 text-primary text-center logo-style">
                        <Image src={logo} alt="logo" width={60} height={60} loading="lazy" />Shivam Vidhyalay
                    </h1>
                </div>
            </Link>
            <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                onClick={handleToggle}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${toggle ? "show" : ""}`} id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                    <Link href="/" passHref legacyBehavior>
                        <div className={`nav-item nav-link ${flag === "/" ? "active" : ""}`} onClick={() => setFlag("/")}>
                            Home
                        </div>
                    </Link>
                    <Link href="/about" passHref legacyBehavior>
                        <div className={`nav-item nav-link ${flag === "/about" ? "active" : ""}`} onClick={() => setFlag("/about")}>
                            About Us
                        </div>
                    </Link>
                    <Link href="/classes" passHref legacyBehavior>
                        <div className={`nav-item nav-link ${flag === "/classes" ? "active" : ""}`} onClick={() => setFlag("/classes")}>
                            Classes
                        </div>
                    </Link>
                    <Link href="/schoolevent" passHref legacyBehavior>
                        <div className={`nav-item nav-link ${flag === "/schoolevent" ? "active" : ""}`} onClick={() => setFlag("/schoolevent")}>
                            School Events
                        </div>
                    </Link>
                    <Link href="/iti" passHref legacyBehavior>
                        <div className={`nav-item nav-link ${flag === "/iti" ? "active" : ""}`} onClick={() => setFlag("/iti")}>
                            ITI
                        </div>
                    </Link>
                    <div className={`nav-item dropdown ${dropdownOpen ? "show" : ""}`}>
                        <div
                            className="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded={dropdownOpen ? "true" : "false"}
                            onClick={handleDropdownToggle}
                        >
                            Pages
                        </div>
                        <div
                            className={`dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0 ${dropdownOpen ? "show" : ""}`}
                            aria-labelledby="navbarDropdown"
                        >
                            <Link href="/classes" passHref legacyBehavior>
                                <div className="dropdown-item">
                                    School Facilities
                                </div>
                            </Link>
                            <Link href="/popularteachers" passHref legacyBehavior>
                                <div className="dropdown-item">
                                    Popular Teachers
                                </div>
                            </Link>
                            <Link href="/becometeacher" passHref legacyBehavior>
                                <div className="dropdown-item">
                                    Get Admission Today
                                </div>
                            </Link>
                            <Link href="/makeappointment" passHref legacyBehavior>
                                <div className="dropdown-item">
                                    Make Appointment
                                </div>
                            </Link>
                        </div>
                    </div>
                    <Link href="/contact" passHref legacyBehavior>
                        <div className={`nav-item nav-link ${flag === "/contact" ? "active" : ""}`} onClick={() => setFlag("/contact")}>
                            Contact Us
                        </div>
                    </Link>
                </div>
                <Link href="/contact" passHref legacyBehavior>
                    <button className="btn btn-primary rounded-pill px-3 d-none d-lg-block">
                        Join Us<i className="fa fa-arrow-right ms-3"></i>
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
