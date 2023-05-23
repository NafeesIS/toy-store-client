import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseDocumentTitle from "../UseDocumentTitle/UseDocumentTile";
// import PrivateRoutes from "../../PrivateRoutes/PrivateRoutes";

const AllToys = () => {
  UseDocumentTitle('Toy Store | AllToys');
  const [toysData, setToysData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://toys-shop-website-server.vercel.app/alltoys')
      .then(res => res.json())
      .then(data => setToysData(data))
  }, [])

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  }

  const filteredToys = toysData.filter(toy =>
    toy.toy_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl text-center text-pink-800 my-8 font-bold font-serif italic mb-4">All Toys</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Toy Name"
          className="px-4 py-2 border border-gray-400 rounded-md w-full"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-400 font-bold text-left">Seller</th>
              <th className="py-2 px-4 border-b-2 border-gray-400 font-bold text-left">Toy Name</th>
              <th className="py-2 px-4 border-b-2 border-gray-400 font-bold text-left">Sub-category</th>
              <th className="py-2 px-4 border-b-2 border-gray-400 font-bold text-right">Price</th>
              <th className="py-2 px-4 border-b-2 border-gray-400 font-bold text-right">Available Quantity</th>
              <th className="py-2 px-4 border-b-2 border-gray-400"></th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.slice(0, 20).map((toy, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-300 text-left">{toy.seller_name || 'N/A'}</td>
                <td className="py-2 px-4 border-b border-gray-300 text-left">{toy.toy_name}</td>
                <td className="py-2 px-4 border-b border-gray-300 text-left">{toy.sub_category}</td>
                <td className="py-2 px-4 border-b border-gray-300 text-right">{toy.price}</td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">{toy.available_quantity}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                <Link to={`/toydetails/${toy._id}`}> <button className="bg-pink-800 text-white py-1 px-3 rounded hover:bg-pink-900">View Details</button></Link> 


                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;


//to={`/toydetails/${toy._id}`}