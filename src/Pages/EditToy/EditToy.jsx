
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const EditToy = () => {
    const updateToyData = useLoaderData();
    console.log(updateToyData)
    const authContext = useContext(AuthContext);
    console.log(authContext.user?.email)
    const userEmail = authContext.user?.email;
    const [picture, setPictureUrl] = useState(updateToyData.picture);
    const [toy_name, setName] = useState(updateToyData.toy_name);
    const [seller_name, setSellerName] = useState(updateToyData.seller_name);
    const [seller_email, setSellerEmail] = useState(updateToyData.seller_email);
    const [sub_category, setSubCategory] = useState(updateToyData.sub_category);
    const [price, setPrice] = useState(updateToyData.price);
    const [rating, setRating] = useState(updateToyData.rating);
    const [available_quantity, setQuantity] = useState(updateToyData.available_quantity);
    const [detail_description, setDescription] = useState(updateToyData.detail_description);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedToy = {
            picture: picture,
            toy_name: toy_name,
            seller_name: seller_name,
            seller_email,
            sub_category: sub_category,
            price: price,
            rating: rating,
            available_quantity: available_quantity,
            detail_description: detail_description
        };

        fetch(`http://localhost:5000/mytoys/${updateToyData._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully!',
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
                        updateToyData.picture = '';
                        updateToyData.toy_name = '';
                        updateToyData.seller_name = '';
                        updateToyData.sub_category = '';
                        updateToyData.price = '';
                        updateToyData.detail_description = '';
                        updateToyData.available_quantity = '';
                        updateToyData.rating = '';
                    })
                }
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to update toy',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    };


    useEffect(() => {
        setSellerEmail(userEmail);
    }, [userEmail]);

    return (
        <div className='bg-slate-200 md:p-8 md:m-8 rounded-lg'>
            <h1 className='text-center text-3xl md:text-6xl font-serif font-bold italic text-pink-800 p-8 md:my-8'>Update</h1>
            <div className="max-w-screen-lg mx-auto p-4">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <label htmlFor="picture" className="block md:text-2xl font-serif font-bold italic text-pink-800 my-2">
                            Picture URL
                        </label>
                        <input
                            type="text"
                            id="picture"
                            defaultValue={updateToyData.picture}
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
                            defaultValue={updateToyData.toy_name}
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
                            defaultValue={updateToyData.seller_name}
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
                            value={updateToyData.seller_email}
                            onChange={(e) => setSellerEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="sub_category" className="block md:text-2xl font-serif font-bold italic text-pink-800 my-2">
                            Sub-category
                        </label>
                        <input
                            type="text"
                            id="sub_category"
                            defaultValue={updateToyData.sub_category}
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
                            defaultValue={updateToyData.price}
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
                            defaultValue={updateToyData.rating}
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
                            defaultValue={updateToyData.available_quantity}
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
                            defaultValue={updateToyData.detail_description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div className="col-span-2">
                        <button
                            type="submit"
                            className="btn btn-block bg-pink-800 hover:bg-pink-900 text-white px-4 py-2 rounded-md"
                        >
                            Update Toy
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditToy;

