// import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full md:h-[650px] bg-pink-800">
                <img src="https://www.zdnet.com/a/img/resize/b292a4c743c53d3c1916b9adb453e58545da416b/2022/11/08/3e21330b-2e89-4ed1-a89f-cea8e10833e3/dji.jpg?auto=webp&fit=crop&height=900&width=1200" className="w-full bg-pink-800" />
                <div className="absolute flex h-full items-center pl-12 left-0 top-0 rounded-lg  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white md:space-y-7 p-4'>
                        <h1 className="sm:text-2xl md:text-6xl text-white font-bold font-serif italic pt-4 items-center ml-4">
                            <span className="">Bringing <span>Smiles</span> </span>  <br /> <span className="text-pink-600">to Kids</span> <br /> with Our <br /> <span className="text-yellow-300"> Amazing Toy </span><br /> <span className="text-green-500">Collection!</span></h1>

                        <div className="mb-7 p-4">
                            <button className="btn  btn-primary bg-pink-800  mr-5   sm:text-white">Latest Toys</button>
                            <button className="btn btn-outline btn-warning">Discover More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full md:h-[650px]">
                <img src="https://gossipandgab.com/wp-content/uploads/2018/09/toy-cars-for-toddlers.jpeg" className="w-full" />
                <div className="absolute flex h-full items-center pl-12 left-0 top-0 rounded-lg  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white md:space-y-7 p-4'>
                        <h1 className="sm:text-2xl md:text-6xl text-white font-bold font-serif italic pt-4 items-center ml-4" >Quality Toys for <br /> <span className="text-yellow-500">Endless Playtime</span>  <br /> <span className="text-green-500">Adventures!</span> </h1>

                        <div className="mb-7 p-4">
                            <button className="btn  btn-primary bg-pink-800  mr-5   sm:text-white">Latest Toys</button>
                            <button className="btn btn-outline  btn-warning">Discover More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full md:h-[650px]">
                <img src="https://www.zdnet.com/a/img/resize/350f19834903bc8c3166bc19f2618e7ea7fccf6e/2021/12/17/95bef783-1fd8-45f8-add8-6d81533a7ba0/screenshot-2021-12-17-at-11-18-34-amazon-com-lego-star-wars-boost-droid-commander-75253-learn-to-code-educational-tech-toy.png?auto=webp&fit=crop&height=900&width=1200" className="w-full" />
                <div className="absolute flex h-full items-center pl-12 left-0 top-0 rounded-lg  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white md:space-y-7 p-4'>
                        <h1 className="sm:text-2xl md:text-6xl text-white font-bold font-serif italic pt-4 items-center ml-4" >Where Playtime <br /> <span className="text-yellow-300">Dreams</span>  <br /> <span className="text-green-500"> Come True!</span></h1>

                        <div className="mb-7 p-4">
                            <button className="btn  btn-primary bg-pink-800  mr-5   sm:text-white">Latest Toys</button>
                            <button className="btn btn-outline  btn-warning">Discover More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full md:h-[650px]">
                <img src="https://media1.popsugar-assets.com/files/thumbor/dhNTM3NfOcC3ckg5IzMu2XK4b10/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/12/14/928/n/24155406/070eca99639a3d2ca24558.50538143_/i/Gifts-Kids-Obsessed-Trucks.jpg" className="w-full" />
                <div className="absolute flex h-full items-center pl-12 left-0 top-0 rounded-lg  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white md:space-y-7 p-4'>
                        <h1 className="sm:text-2xl md:text-6xl text-white font-bold font-serif italic pt-4 items-center ml-4" >Find the <br /> <span className="text-green-500">Perfect Toy</span> <br /> for Every <br /> <span className="text-pink-500">Age and <br /> Interest!</span> </h1>

                        <div className="mb-7 p-4">
                            <button className="btn  btn-primary bg-pink-800  mr-5   sm:text-white">Latest Toys</button>
                            <button className="btn btn-outline btn-warning">Discover More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;