import React from 'react';
import Header from '../components/HomeHeader3/HomeHeader3';
import HomeCards from '../components/HomeCards/HomeCards';
import HomeDetails from '../components/HomeDetails/HomeDetails';
import Footer from '../components/Footer/Footer';

export default function (props) {
    return(
        <>
            <Header/>
            <HomeCards/>
            <HomeDetails/>
            <Footer/>
        </>
    )
}
