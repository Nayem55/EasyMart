import React from 'react';
import Banner from './Banner';
import Category from './Category';
import './Home.css'
import SpecialOffer from './SpecialOffer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpecialOffer></SpecialOffer>
            <Category></Category>
        </div>
    );
};

export default Home;