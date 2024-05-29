
import Footer from '@/Components/Nav/Footer'
import Header from '@/Components/Nav/Header'
import React from 'react'
import LazyLoad from "react-lazyload";
import dynamic from "next/dynamic";

const classes = () => {
    const Facilities = dynamic(() => import("@/Components/Facilities"));
    const SchoolClasses = dynamic(() => import("@/Components/SchoolClasses"));

    return <>
        <Header />
        <LazyLoad height={200}>
        <Facilities />
        </LazyLoad>
        <LazyLoad height={200}>
        <SchoolClasses />
        </LazyLoad>
        <Footer />
    </>
}

export default classes