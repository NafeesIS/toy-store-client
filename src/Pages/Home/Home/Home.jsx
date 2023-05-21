// import React from 'react';
// import kidImg from '../../../assets/happy_kid.png'

import HighestSellings from "../../HighestSellings/HighestSellings";
import LatestToys from "../../LatestToys/LatestToys";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

// import kid_car from '../../../assets/banner/kid_toy_car.jpg'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <LatestToys></LatestToys>
            <HighestSellings></HighestSellings>
        </div>
    );
};

export default Home;