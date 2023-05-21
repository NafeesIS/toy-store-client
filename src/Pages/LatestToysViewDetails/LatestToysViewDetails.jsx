// import React from 'react';

import { useLoaderData } from "react-router-dom";

const LatesToysViewDetails = () => {
    const toy = useLoaderData();
    console.log(toy)

    return (
        <div className='items-center justify-center'>

            <img className='p-32 w-[1000px]' src={toy.picture} alt={toy.toy_name} />
            <div className='my-8'>
                <h2 className='sm:text-2xl md:text-6xl text-pink-600 font-bold font-serif italic pt-4 items-center ml-4'>{toy.toy_name}</h2>
                <p className='sm:text-xl md:text-2xl  font-bold font-serif italic pt-4 items-center ml-4'>Seller: {toy.seller_name}</p>
                <p className='sm:text-xl md:text-2xl font-bold font-serif italic pt-4 items-center ml-4'>Price: ${toy.price}</p>

                <p className='sm:text-xl md:text-2xl font-bold font-serif italic pt-4 items-center ml-4'>Rating: {toy.rating}</p>
                <p className='sm:text-xl md:text-2xl font-bold font-serif italic pt-4 items-center ml-4'>Available Quantity: {toy.available_quantity}</p>
                <p className='sm:text-xl md:text-xl font-bold font-serif italic pt-4 items-center ml-4'>Detail Description: {toy.detail_description}</p>
            </div>
        </div>
    );
};

export default LatesToysViewDetails;