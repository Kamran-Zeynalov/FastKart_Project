import React from "react";
import Header from "../components/Header/Header";
import Specialy from "../components/Specialy/Specialy";
import Banners from "../components/Banners/Banners";
import Blog from "../components/Blog/Blog";
import Delivery from "../components/Delivery/Delivery";
import Footer from "../components/Footer/Footer";


function Home(){
    return(
        <>
        <Header/>
        <Specialy/>
        <Banners/>
        <Blog/>
        <Delivery/>
        <Footer />
            </>
    )
}


export default Home;