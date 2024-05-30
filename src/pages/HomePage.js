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

