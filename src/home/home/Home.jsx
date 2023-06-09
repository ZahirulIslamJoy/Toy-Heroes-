import React from 'react';
import Banner from '../banner/Banner';
import Galaries from '../galaries/Galaries';
import Catagories from '../tabByCatagory/Catagories';
import useTitle from '../../customHooks/useTitle';
import ToyComparison from '../toycompare/ToyComparision';
import UpcomingToys from '../upcomingtoys/UpcomingToys';
import FuturePlan from './futureplan/FuturePlan';
import CustomerRatings from '../ratings/CustomerRatings';

const Home = () => {
    useTitle("Toy Heroes")
    return (
        <div>
           <Banner></Banner>
           <Galaries></Galaries>
           <Catagories></Catagories>
           <ToyComparison></ToyComparison>
           <UpcomingToys></UpcomingToys>
           <FuturePlan></FuturePlan>
           <CustomerRatings></CustomerRatings>
        </div>
    );
};

export default Home;