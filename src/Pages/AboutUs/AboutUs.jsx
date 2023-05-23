// import React from 'react';

const AboutUs = () => {
    return (
        <div className="my-10 rounded-lg">
            <div className="hero min-h-screen bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                   
                    <div>
                        <h1 className="text-center text-3xl md:text-6xl font-serif font-bold italic text-pink-800 p-8 md:my-8">About us!</h1>
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                                <img
                                    src="https://images.computerhistory.org/revonline/images/500004904-03-01.jpg?w=600"
                                    alt="About Us"
                                    className="w-full p-16 h-auto mb-4 md:mb-0"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <p className="text-lg text-gray-700 mb-4">
                                    Welcome to our toy store! At XYZ Toys, we are passionate about providing children with fun and educational toys that spark their imagination and foster creativity.
                                </p>
                                <p className="text-lg text-gray-700 mb-4">
                                    With over 10 years of experience in the industry, we have curated a wide selection of toys that are not only entertaining but also safe for children of all ages. We prioritize quality and carefully choose toys from reputable brands that meet the highest safety standards.
                                </p>
                                <p className="text-lg text-gray-700 mb-4">
                                    Our mission is to create a joyful and engaging playtime experience for children, helping them develop essential skills while having a blast. We believe in the power of play to inspire learning, promote social interaction, and nurture cognitive development.
                                </p>
                                <p className="text-lg text-gray-700 mb-4">
                                    As a family-owned business, we take pride in the personalized attention and exceptional customer service we offer. Our friendly and knowledgeable staff is always ready to assist you in finding the perfect toy for any occasion.
                                </p>
                                <p className="text-lg text-gray-700">
                                    Thank you for choosing XYZ Toys as your trusted source for high-quality toys. We are committed to bringing smiles to children faces and creating lasting memories. Start exploring our collection today and let the adventure begin!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;