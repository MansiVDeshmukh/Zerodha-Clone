import React from 'react';
import Hero from "./Hero.js"
import Brokerage from "./Brokerage.js"
import OpenAccount from "../OpenAccount.js"
import Navbar from "../Navbar.js"
import Footer from "../Footer.js"

function PricingPage() {
    return ( 
        <>
        <Hero/>
        <Brokerage/>
        <OpenAccount/>
        </>
     );
}

export default PricingPage;