import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [superheroRobots, setSuperHeroRobots] = useState([]);
    const [transformerRobots, setTransformerRobots] = useState([]);
    const [constructorRobots, setConstructorRobots] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/superhero')
            .then(res => res.json())
            .then(data => setSuperHeroRobots(data));
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/transformer')
            .then(res => res.json())
            .then(data => setTransformerRobots(data));
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/constructor')
            .then(res => res.json())
            .then(data => setConstructorRobots(data));
    }, []);

    return (
        <div className="text-center">
            <h2 className="text-5xl text-center text-pink-800 my-8 font-bold font-serif italic mb-8">Shop by Category</h2>
            <Tabs className="mx-auto w-3/4">
                <TabList className="flex justify-center space-x-4 mb-4">
                    <Tab className="px-4 py-2 rounded-md bg-pink-600 text-white">SuperHero Robots</Tab>
                    <Tab className="px-4 py-2 rounded-md bg-pink-600 text-white">Transformer Robots</Tab>
                    <Tab className="px-4 py-2 rounded-md bg-pink-600 text-white">Constructor Robots</Tab>
                </TabList>

                <TabPanel>
                    {superheroRobots.length > 0 ? (
                        <div className="grid grid-cols-3 gap-4">
                            {superheroRobots.map(robot => (
                                <div key={robot._id} className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={robot.picture} alt="hero" className="rounded-xl w-40 h-40" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{robot.toy_name}</h2>
                                        <h2 className="card-title">{robot.price}</h2>
                                        <h2 className="card-title">{robot.rating}</h2>
                                        <div className="card-actions">
                                            <Link to={`/superherotoydetails/${robot._id}`}>  <button className="btn btn-primary bg-pink-800">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </TabPanel>
                <TabPanel>
                    {transformerRobots.length > 0 ? (
                        <div className="grid grid-cols-3 gap-4">
                            {transformerRobots.map(transformer => (
                                <div key={transformer._id} className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={transformer.picture} alt="hero" className="rounded-xl w-40 h-40" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{transformer.toy_name}</h2>
                                        <h2 className="card-title">{transformer.price}</h2>
                                        <h2 className="card-title">{transformer.rating}</h2>
                                        <div className="card-actions">
                                            <Link to={`/transformertoydetails/${transformer._id}`}>  <button className="btn btn-primary">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </TabPanel>
                <TabPanel>
                    {constructorRobots.length > 0 ? (
                        <div className="grid grid-cols-3 gap-4">
                            {constructorRobots.map(constructor => (
                                <div key={constructor._id} className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={constructor.picture} alt="hero" className="rounded-xl w-40 h-40" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{constructor.toy_name}</h2>
                                        <h2 className="card-title">{constructor.price}</h2>
                                        <h2 className="card-title">{constructor.rating}</h2>
                                        <div className="card-actions">
                                            <Link to={`/constructortoydetails/${constructor._id}`}>  <button className="btn btn-primary">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default ShopByCategory;
