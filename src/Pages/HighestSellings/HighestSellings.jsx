// import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const HighestSellings = () => {
    const [highestsellings, setHighestsellings] = useState([]);

    useEffect(() => {
        // Fetch latest toys data from the API
        fetch('http://localhost:5000/highestsellings')
            .then(res => res.json())
            .then(data => setHighestsellings(data))
            .catch(error => console.log(error));
    }, []);
    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl text-center text-pink-800 my-16 font-bold font-serif italic mb-8">Our Best Selling Toys</h2>
                <div className="grid grid-cols-3 gap-4">
                    {highestsellings.map(toy => (
                        <div key={toy._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={toy.picture} alt="hero" className="rounded-xl w-40 h-40" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{toy.toy_name}</h2>
                                <h2 className="card-title">Price:${toy.price}</h2>
                                <h2 className="card-title">Rating:{toy.rating}</h2>
                                <div className="card-actions">
                                    <Link to={`/highestsellingsviewdetails/${toy._id}`}>  <button className="btn btn-primary bg-pink-800">View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HighestSellings;