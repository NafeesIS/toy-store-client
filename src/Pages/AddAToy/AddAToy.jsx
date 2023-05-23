import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import UseDocumentTitle from '../UseDocumentTitle/UseDocumentTile';
// import { json } from 'react-router-dom';

const AddAToy = () => {
    UseDocumentTitle('Toy Store | AddAToy');
    const authContext = useContext(AuthContext);
    const userEmail = authContext.user.email;
    const [picture, setPictureUrl] = useState('');
    const [toy_name, setName] = useState('');
    const [seller_name, setSellerName] = useState('');
    const [seller_email, setSellerEmail] = useState('');
    const [sub_category, setSubCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [available_quantity, setQuantity] = useState('');
    const [detail_description, setDescription] = useState('');
    const newToy = { picture, toy_name, seller_email, seller_name, sub_category, price, rating, available_quantity, detail_description }
    console.log(newToy)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        fetch(`https://toys-shop-website-server.vercel.app/mytoys`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    }).then(() => {
                        setPictureUrl('');
                        setName('');
                        setSellerName('');
                        setSubCategory('');
                        setPrice('');
                        setDescription('');
                        setQuantity('');
                        setRating('');
                    })
                }
            })
    };
    useEffect(() => {
        setSellerEmail(userEmail);
    }, [userEmail])

    return (
        <div className='bg-slate-200 md:p-8 md:m-8 rounded-lg'>
            <h1 className='text-center text-3xl md:text-6xl font-serif font-bold italic text-pink-800 p-8 md:my-8'>Add New Toy</h1>
            <div className="max-w-screen-lg mx-auto p-4">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <label htmlFor="picture" className="block md:text-2xl font-serif font-bold italic text-pink-800 my-2">
                            Picture URL
                        </label>
                        <input
                            type="text"
                            id="picture"
                            value={picture}
                            placeholder='Enter Picture URL'
                            onChange={(e) => setPictureUrl(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="toy_name" className="block md:text-2xl font-serif font-bold italic text-pink-800 my-2">
                            Toy Name
                        </label>
                        <input
                            type="text"
                            id="toy_name"
                            value={toy_name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="seller_name" className="block md:text-2xl font-serif font-bold italic text-pink-800 my-2">
                            Seller Name
                        </label>
                        <input
                            type="text"
                            id="seller_name"
                            value={seller_name}
                            onChange={(e) => setSellerName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="seller_email" className="block md:text-2xl font-serif font-bold italic text-pink-800 my-2">
                            Seller Email
                        </label>
                        <input
                            type="email"
                            disabled
                            id="seller_email"
                            value={seller_email}
                            onChange={(e) => setSellerEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="seller_email" className="block md:text-2xl font-serif font-bold italic text-pink-800 my-2">
                            Sub-category
                        </label>
                        <input
                            type="text"
                            id="sub_category"
                            value={sub_category}
                            onChange={(e) => setSubCategory(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="block md:text-2xl font-serif font-bold italic text-pink-800 my-2">
                            Price
                        </label>
                        <input
                            type="text"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="rating" className="block md:text-2xl font-serif font-bold italic text-pink-800 my-2">
                            Rating
                        </label>
                        <input
                            type="number"
                            id="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="available_quantity" className="block md:text-2xl font-serif font-bold italic text-pink-800 my-2">
                            Available Quantity
                        </label>
                        <input
                            type="number"
                            id="available_quantity"
                            value={available_quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="detail_description" className="block md:text-2xl font-serif font-bold italic text-pink-800 my-2">
                            Detail Description
                        </label>
                        <textarea
                            id="detail_description"
                            value={detail_description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div className="col-span-2">
                        <button
                            type="submit"
                            className="btn btn-block bg-pink-800 hover:bg-pink-900 text-white px-4 py-2 rounded-md"
                        >
                            Add Toy
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AddAToy;