// import React from 'react';

const Gallery = () => {
  return (
    <div>
      <div className="container mx-auto py-8 mt-16">
        <h2 className="text-5xl hover:text-6xl hover:underline decoration-dashed  duration-300 text-pink-800 font-serif italic font-bold text-center pb-16">Toys Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
          <div className="flex justify-center">
            <img
              src='https://ychef.files.bbci.co.uk/976x549/p02898kb.jpg'
              alt="Image 1"
              className="w-full h-auto rounded-2xl p-6 lg:hover:p-1 duration-300"
            />
          </div>
          <div className="flex justify-center">
            <img
              src='https://i.ebayimg.com/images/g/ETsAAOSww41e0pN9/s-l1600.jpg'
              alt="Image 2"
              className="w-full h-auto rounded-2xl p-6 lg:hover:p-1 duration-300"
            />
          </div>
          <div className="flex justify-center">
            <img
              src='https://i.ytimg.com/vi/S4H6zDtX9Sw/maxresdefault.jpg'
              alt="Image 3"
              className="w-full h-auto rounded-2xl p-6 lg:hover:p-1 duration-300"
            />
          </div>
          <div className="flex justify-center">
            <img
              src='https://m.media-amazon.com/images/I/71AsB89B2pL._SL1500_.jpg'
              alt="Image 4"
              className="w-full h-auto rounded-2xl p-6 lg:hover:p-1 duration-300"
            />
          </div>
          <div className="flex justify-center">
            <img
              src='https://cdn.shopify.com/s/files/1/0565/0160/0341/products/9qm0wdsjkql8pol7_1024x.webp?v=1663086469'
              alt="Image 5"
              className="w-full h-auto rounded-2xl p-6 lg:hover:p-1 duration-300"
            />
          </div>
          <div className="flex justify-center">
            <img
              src='https://img.freepik.com/free-vector/robot-transformer-sports-car-robotics-artificial-intelligence-technologies-cyborg-military-combat-exoskeleton-character-battle-alien-cybernetic-warrior-kids-toy-cartoon-vector-illustration_107791-3080.jpg?w=2000'
              alt="Image 6"
              className="w-full h-auto rounded-2xl p-6 lg:hover:p-1 duration-300"
            />
          </div>
          <div className="flex justify-center">
            <img
              src='https://bleedingcool.com/wp-content/uploads/2021/10/iron-spider_marvel_gallery_61787abd760eb-1200x900.jpg'
              alt="Image 7"
              className="w-full h-auto rounded-2xl p-6 lg:hover:p-1 duration-300"
            />
          </div>
          <div className="flex justify-center">
            <img
              src='https://static-01.daraz.com.bd/p/58bd1033f7d68ef9f538ac00ccfea200.jpg'
              alt="Image 8"
              className="w-full h-auto rounded-2xl p-6 lg:hover:p-1 duration-300"
            />
          </div>
          <div className="flex justify-center">
            <img
              src='https://static-01.daraz.com.bd/p/c714570b21bb9c8f1e8b7ecbc7092dd1.jpg'
              alt="Image 9"
              className="w-full h-auto rounded-2xl p-6 lg:hover:p-1 duration-300"
            />
          </div>
          <div className="flex justify-center">
            <img
              src='https://i.redd.it/7hwt0vgkge561.png'
              alt="Image 10"
              className="w-full h-auto rounded-2xl p-6 lg:hover:p-1 duration-300"
            />
          </div>
          <div className="flex justify-center">
            <img
              src='https://townsquare.media/site/442/files/2020/07/hasbro-sentinel.jpg'
              alt="Image 11"
              className="w-full h-auto rounded-2xl p-6 lg:hover:p-1 duration-300"
            />
          </div>
          <div className="flex justify-center">
            <img
              src='https://cdn.mos.cms.futurecdn.net/rBBxRVRYRVT46jLwJoKFKf.jpg'
              alt="Image 12"
              className="w-full h-auto rounded-2xl p-6 lg:hover:p-1 duration-300"
            />
          </div>
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;