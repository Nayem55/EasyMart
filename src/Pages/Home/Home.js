import React from 'react';
import Banner from './Banner';
import './Home.css'
import SpecialOffer from './SpecialOffer';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <SpecialOffer></SpecialOffer>
        </div>
    );
};

export default Home;