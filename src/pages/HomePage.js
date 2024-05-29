// import BecomeTeacher from "@/Components/BecomeTeacher";
// import LearnMore from "@/Components/LearnMore";
// import MakeAppointment from "@/Components/MakeAppointment";
// import Footer from "@/Components/Nav/Footer";
// import Header from "@/Components/Nav/Header";

// import LazyLoad from "react-lazyload";
// import dynamic from "next/dynamic";
// // import PhotoGallery from '@/Components/PhotoGallery'
// import React from "react";

// const HomePage = () => {
//   const PopularTeachers = dynamic(() => import("@/Components/PopularTeachers"));
//   const SchoolClasses =dynamic (()=> import("@/Components/SchoolClasses") )
//   const Facilities =dynamic (()=> import("@/Components/Facilities") )
//   const HeroSection =dynamic (()=> import("@/Components/HeroSection") )
//   const Footer =dynamic (()=> import("@/Components/Nav/Footer") )
//   return (
//     <>
//       <Header />
//       <section className="cst-kand-img"></section>
//       <LazyLoad height={200}>
//       <HeroSection />
//       </LazyLoad>
//       <LazyLoad height={200}>
//       <Facilities />
//       </LazyLoad>
//       <LearnMore />
//       <BecomeTeacher />
//       <LazyLoad height={200}>
//       <SchoolClasses />
//       </LazyLoad>
//       <MakeAppointment />
//       <LazyLoad height={200}>
//         <PopularTeachers />
//       </LazyLoad>
//       <LazyLoad height={200}>
//       <Footer />
//       </LazyLoad>
//     </>
//   );
// };

// export default HomePage;

import dynamic from "next/dynamic";
import LearnMore from "@/Components/LearnMore";
import BecomeTeacher from "@/Components/BecomeTeacher";
import MakeAppointment from "@/Components/MakeAppointment";
import Header from "@/Components/Nav/Header";

const PopularTeachers = dynamic(() => import("@/Components/PopularTeachers"), { ssr: false });
const SchoolClasses = dynamic(() => import("@/Components/SchoolClasses"), { ssr: false });
const Facilities = dynamic(() => import("@/Components/Facilities"), { ssr: false });
const HeroSection = dynamic(() => import("@/Components/HeroSection"), { ssr: false });
const Footer = dynamic(() => import("@/Components/Nav/Footer"), { ssr: false });

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="cst-kand-img"></section>
      <HeroSection />
      <Facilities />
      <LearnMore />
      <BecomeTeacher />
      <SchoolClasses />
      <MakeAppointment />
      <PopularTeachers />
      <Footer />
    </>
  );
};

export default HomePage;

