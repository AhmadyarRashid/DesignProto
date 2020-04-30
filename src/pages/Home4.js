import React from 'react';
import Header from '../components/HomeHeader4/HomeHeader4';
import HomeCards from '../components/HomeCards/HomeCards';
import HomeDetails from '../components/HomeDetailsCollapsable/HomeDetailsCollapsable';
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
