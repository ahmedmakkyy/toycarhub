import React from 'react';

import Gallery from './Gallery';
import CatShopping from './CatShopping';
import Banner from './Banner';
import Sections from './Sections';
import Titles from '../../Helmet/Titles';

const Homepage = () => {
    return (
        <div className='bg-gradient-to-r from-orange-100 via-red-100 to-pink-100'>
            <Titles title="ToyCarHub | Home"></Titles>
            <Banner></Banner>
            <Gallery></Gallery>
            <CatShopping></CatShopping>
            <Sections></Sections>
        </div>
    );
};

export default Homepage;