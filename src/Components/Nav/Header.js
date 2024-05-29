// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import logo from "../../assets/img/Logo.jpeg"

// const Header = () => {
//     const [flag, setflag] = useState("")
//     console.log("flag", flag);
//     const [toogle, setToogle] = useState(false)

//     // useEffect(() => {
//     //     if (window.location.pathname === "/") {
//     //         setflag("/")
//     //     }
//     //     if (window.location.pathname === "/about") {
//     //         setflag("/about")
//     //     }
//     //     if (window.location.pathname === "/classes") {
//     //         setflag("/classes")
//     //     }
//     //     if (window.location.pathname === "/schoolevent") {
//     //         setflag("/schoolevent")
//     //     }
//     //     if (window.location.pathname === "/pages") {
//     //         setflag("/pages")
//     //     }
//     //     if (window.location.pathname === "/contact") {
//     //         setflag("/contact")
//     //     }
//     //     if (window.location.pathname === "/popularteachers") {
//     //         setflag("/contact")
//     //     }
//     //     if (window.location.pathname === "/makeappointment") {
//     //         setflag("/contact")
//     //     }
//     //     if (window.location.pathname === "/becometeacher") {
//     //         setflag("/contact")
//     //     }
//     //     if (window.location.pathname === "/iti") {
//     //         setflag("/iti")
//     //     }
//     //     if (window.location.pathname === "/uttrayancelebration ") {
//     //         setflag("/uttrayancelebration")
//     //     }
//     //     if (window.location.pathname === "/sportsevent ") {
//     //         setflag("/sportsevent")
//     //     }
//     //     if (window.location.pathname === "/holicelebration") {
//     //         setflag("/holicelebration")
//     //     }
//     //     if (window.location.pathname === "/culturalfest") {
//     //         setflag("/culturalfest")
//     //     }
//     //     if (window.location.pathname === "/iti") {
//     //         setflag("/iti")
//     //     }
     

//     // }, [])

//     useEffect(() => {
//         const path = window.location.pathname;
//         setflag(path);
//     }, [])

//     const handleToogle = () => {
//         setToogle(!toogle)
//     }

//     return (
        
//         <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0 navbar-style" >
//         <Link href="/" passHref>
//             <div className="navbar-brand">
//                 <h1 className="m-0 text-primary text-center">
//                     <Image  src={logo} alt='logo' width={60} height={60} loading="lazy" />Shivam Vidhyalay
//                 </h1>
//             </div>
//         </Link>
//         <button
//             type="button"
//             className="navbar-toggler"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarCollapse"
//             onClick={handleToogle}
//         >
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${toogle ? "show" : ""}`} id="navbarCollapse">
//             <div className="navbar-nav mx-auto">
//                 <Link href="/" passHref>
//                     <div className={`nav-item nav-link ${flag === "/" ? "active" : ""}`} onClick={() => setflag("/")} legacyBehavior>
//                         Home
//                     </div>
//                 </Link>
//                 <Link href="/about" passHref>
//                     <div className={`nav-item nav-link ${flag === "/about" ? "active" : ""}`} onClick={() => setflag("/about")} legacyBehavior>
//                         About Us
//                     </div>
//                 </Link>
//                 <Link href="/classes" passHref>
//                     <div className={`nav-item nav-link ${flag === "/classes" ? "active" : ""}`} onClick={() => setflag("/classes")} legacyBehavior>
//                         Classes
//                     </div>
//                 </Link>
//                 <Link href="/schoolevent" passHref>
//                     <div className={`nav-item nav-link ${flag === "/schoolevent" ? "active" : ""}`} onClick={() => setflag("/schoolevent")} legacyBehavior>
//                         School Events
//                     </div>
//                 </Link>
//                 <Link href="/iti" passHref>
//                     <div className={`nav-item nav-link ${flag === "/iti" ? "active" : ""}`} onClick={() => setflag("/iti")} legacyBehavior>
//                         ITI
//                     </div>
//                 </Link>
//                 <div className="nav-item dropdown">
//                     <div
//                         className="nav-link dropdown-toggle"
//                         id="navbarDropdown"
//                         role="button"
//                         data-bs-toggle="dropdown" 
//                         aria-expanded="false"
//                         onClick={() => setflag("/pages")}
//                         legacyBehavior
//                     >
//                         Pages
//                     </div>
//                     <div
//                         className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0"
//                         aria-labelledby="navbarDropdown"
//                     >
//                         <Link href="/classes" passHref>
//                             <div className="dropdown-item" legacyBehavior>
//                                 School Facilities
//                             </div>
//                         </Link>
//                         <Link href="/popularteachers" passHref>
//                             <div className="dropdown-item" legacyBehavior>
//                                 Popular Teachers
//                             </div>
//                         </Link>
//                         <Link href="/becometeacher" passHref>
//                             <div className="dropdown-item" legacyBehavior>
//                                 Get Admission Today
//                             </div>
//                         </Link>
//                         <Link href="/makeappointment" passHref>
//                             <div className="dropdown-item" legacyBehavior>
//                                 Make Appointment
//                             </div>
//                         </Link>
//                     </div>
//                 </div>
//                 <Link href="/contact" passHref>
//                     <div className={`nav-item nav-link ${flag === "/contact" ? "active" : ""}`} onClick={() => setflag("/contact")} legacyBehavior>
//                         Contact Us
//                     </div>
//                 </Link>
//             </div>
//             <Link href="/" passHref>
//                 <button className="btn btn-primary rounded-pill px-3 d-none d-lg-block">
//                     Join Us<i className="fa fa-arrow-right ms-3"></i>
//                 </button>
//             </Link>
//         </div>
//     </nav>
//     );
// };

// export default Header;



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
                    <h1 className="m-0 text-primary text-center">
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
                <Link href="/" passHref legacyBehavior>
                    <button className="btn btn-primary rounded-pill px-3 d-none d-lg-block">
                        Join Us<i className="fa fa-arrow-right ms-3"></i>
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
