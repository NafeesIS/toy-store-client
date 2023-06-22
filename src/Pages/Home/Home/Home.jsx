// import React from 'react';


import AboutUs from "../../AboutUs/AboutUs";
import HighestSellings from "../../HighestSellings/HighestSellings";
import LatestToys from "../../LatestToys/LatestToys";
import UseDocumentTitle from "../../UseDocumentTitle/UseDocumentTile";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    UseDocumentTitle('Toy Store | Home');
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <LatestToys></LatestToys>
            <HighestSellings></HighestSellings>
            <AboutUs></AboutUs>
        </div>
    );
};


export default Home;