

import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { RingLoader } from 'react-spinners';
import { AuthContext } from "../../../Provider/AuthProvider"

const ShopByCategory = () => {
    const [superheroRobots, setSuperHeroRobots] = useState([]);
    const [transformerRobots, setTransformerRobots] = useState([]);
    const [constructorRobots, setConstructorRobots] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://toys-shop-website-server.vercel.app/superhero')
            .then((res) => res.json())
            .then((data) => setSuperHeroRobots(data));
    }, []);

    useEffect(() => {
        fetch('https://toys-shop-website-server.vercel.app/transformer')
            .then((res) => res.json())
            .then((data) => setTransformerRobots(data));
    }, []);

    useEffect(() => {
        fetch('https://toys-shop-website-server.vercel.app/constructor')
            .then((res) => res.json())
            .then((data) => setConstructorRobots(data));
    }, []);

    return (
        <div className="text-center">
            <h2 className="text-5xl text-center text-pink-800 my-8 font-bold font-serif italic mb-8">
                Shop by Category
            </h2>
            <Tabs className="mx-auto w-3/4">
                <TabList className="flex justify-center space-x-4 mb-4">
                    <Tab className="px-4 py-2 rounded-md bg-pink-600 text-white">SuperHero Robots</Tab>
                    <Tab className="px-4 py-2 rounded-md bg-pink-600 text-white">Transformer Robots</Tab>
                    <Tab className="px-4 py-2 rounded-md bg-pink-600 text-white">Constructor Robots</Tab>
                </TabList>

                <TabPanel>
                    {superheroRobots.length > 0 ? (
                        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-16">
                            {superheroRobots.map((robot) => (
                                <div key={robot._id} className="card md:w-96 w-80 bg-base-100 shadow-xl">
                                    <h2 className="text-xl text-center text-pink-800 my-8 font-bold font-serif italic mb-8">
                                        Sub-category: {robot.sub_category}
                                    </h2>
                                    <figure className="px-10 pt-10">
                                        <img src={robot.picture} alt="hero" className="rounded-xl w-40 h-40" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{robot.toy_name}</h2>
                                        <h2 className="card-title">Price: ${robot.price}</h2>
                                        <h2 className="card-title">Rating: {robot.rating}</h2>
                                        <div className="card-actions">
                                            {user ? (
                                                <Link to={`/superherotoydetails/${robot._id}`}>
                                                    <button className="btn btn-primary bg-pink-800">View Details</button>
                                                </Link>
                                            ) : (
                                                <Link to="/login">
                                                    <button className="btn btn-primary bg-pink-800">View Details</button>

                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-screen">
                            <RingLoader color="#36d7b7" />
                        </div>
                    )}
                </TabPanel>

                <TabPanel>
                    {transformerRobots.length > 0 ? (
                        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-16 mr-16">
                            {transformerRobots.map((transformer) => (
                                <div key={transformer._id} className="card md:w-96 w-80 bg-base-100 shadow-xl">
                                    <h2 className="text-xl text-center text-pink-800 my-8 font-bold font-serif italic mb-8">
                                        Sub-category: {transformer.sub_category}
                                    </h2>
                                    <figure className="px-10 pt-10">
                                        <img src={transformer.picture} alt="hero" className="rounded-xl w-40 h-40" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{transformer.toy_name}</h2>
                                        <h2 className="card-title">Price: ${transformer.price}</h2>
                                        <h2 className="card-title">Rating: {transformer.rating}</h2>
                                        <div className="card-actions">
                                            {user ? (
                                                <Link to={`/transformertoydetails/${transformer._id}`}>
                                                    <button className="btn btn-primary bg-pink-800">View Details</button>
                                                </Link>
                                            ) : (
                                                <Link to="/login">
                                                    <button className="btn btn-primary bg-pink-800">View Details</button>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-screen">
                            <RingLoader color="#36d7b7" />
                        </div>
                    )}
                </TabPanel>

                <TabPanel>
                    {constructorRobots.length > 0 ? (
                        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8">
                            {constructorRobots.map((constructor) => (
                                <div key={constructor._id} className="card md:w-96 w-80 bg-base-100 shadow-xl">
                                    <h2 className="text-xl text-center text-pink-800 my-8 font-bold font-serif italic mb-8">
                                        Sub-category: {constructor.sub_category}
                                    </h2>
                                    <figure className="px-10 pt-10">
                                        <img src={constructor.picture} alt="hero" className="rounded-xl w-40 h-40" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{constructor.toy_name}</h2>
                                        <h2 className="card-title">Price: ${constructor.price}</h2>
                                        <h2 className="card-title">Rating: {constructor.rating}</h2>
                                        <div className="card-actions">
                                            {user ? (
                                                <Link to={`/constructortoydetails/${constructor._id}`}>
                                                    <button className="btn btn-primary bg-pink-800">View Details</button>
                                                </Link>
                                            ) : (
                                                <Link to="/login">
                                                    <button className="btn btn-primary bg-pink-800">View Details</button>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-screen">
                            <RingLoader color="#36d7b7" />
                        </div>
                    )}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;

