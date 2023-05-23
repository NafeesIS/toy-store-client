import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { RingLoader } from "react-spinners";
import UseDocumentTitle from "../UseDocumentTitle/UseDocumentTile";
// Call setAppElement with a valid element selector
Modal.setAppElement('#root');

const MyToys = () => {
  UseDocumentTitle('Toy Store | MyToys');
  const { user } = useContext(AuthContext);
  const url = `https://toys-shop-website-server.vercel.app/mytoys?email=${user.email}`;

  const [toysData, setToysData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Added loading state
  const [sortOrder, setSortOrder] = useState(null); // Added sorting state

  useEffect(() => {
    setIsLoading(true); // Set loading state to true before fetching data

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setToysData(data);
        setIsLoading(false); // Set loading state to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching toys:', error);
        setIsLoading(false); // Set loading state to false on error as well
      });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const openModal = (toy) => {
    setSelectedToy(toy);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredToys = toysData.filter(toy =>
    toy.toy_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are You Sure!',
      text: "you won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toys-shop-website-server.vercel.app/mytoys/${id}`, {
          method: 'DELETE',
        })
          .then(res => {
            if (res.ok) {
              setToysData(prevToysData => prevToysData.filter(toy => toy._id !== id));
              console.log(`Deleted toy with id ${id}`);
              Swal.fire({
                title: 'Delete!',
                text: 'Deleted Successfully!',
                icon: 'delete',
                confirmButtonText: 'Cool'
              });
            } else {
              console.error(`Error deleting toy with id ${id}`);
            }
          })
          .catch(error => {
            console.error('Error deleting toy:', error);
          });
      }
    });
  };

  const handleSort = () => {
    if (sortOrder === 'asc') {
      setToysData(prevToysData => [...prevToysData].sort((a, b) => a.price - b.price));
      setSortOrder('desc');
    } else {
      setToysData(prevToysData => [...prevToysData].sort((a, b) => b.price - a.price));
      setSortOrder('asc');
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl text-center text-pink-800 my-8 font-bold font-serif italic mb-4">My Toys</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Toy Name"
          className="px-4 py-2 border border-gray-400 rounded-md w-full"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="mb-4">
        <button className="btn btn-primary" onClick={handleSort}>
          Sort by Price {sortOrder === 'asc' ? '▲' : '▼'}
        </button>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <RingLoader color="#36d7b7" />
        </div>
      ) : (
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
                <th className="py-2 px-4 border-b-2 border-gray-400"></th>
                <th className="py-2 px-4 border-b-2 border-gray-400"></th>
              </tr>
            </thead>
            <tbody>
              {filteredToys.map((toy, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-300 text-left">{toy.seller_name || 'N/A'}</td>
                  <td className="py-2 px-4 border-b border-gray-300 text-left">{toy.toy_name}</td>
                  <td className="py-2 px-4 border-b border-gray-300 text-left">{toy.sub_category}</td>
                  <td className="py-2 px-4 border-b border-gray-300 text-right">{toy.price}</td>
                  <td className="py-2 px-4 border-b border-gray-300 text-center">{toy.available_quantity}</td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <div className="btn-group gap-4">
                      {/* Pass the toy object to the openModal function */}
                      <button className="btn btn-primary" onClick={() => openModal(toy)}>View Details</button>
                      <Link to={`/edittoy/${toy._id}`}><button className="btn btn-secondary">Edit</button></Link>
                      <button className="btn btn-danger bg-red-700" onClick={() => handleDelete(toy._id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      <Modal className={'fixed inset-0 flex items-center justify-center'} isOpen={isModalOpen} onRequestClose={closeModal}>
        {/* Check if selectedToy exists before accessing its properties */}
        {selectedToy && (
          <div className="items-center justify-center">
            <div className="modal-box relative items-center justify-center">
              <label htmlFor="my-modal-3" onClick={closeModal} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <img className="w-2/3 items-center" src={selectedToy.picture} alt={selectedToy.toy_name} />
              <h2>{selectedToy.toy_name}</h2>
              <p>Seller: {selectedToy.seller_name}</p>
              <p>Seller Email: {selectedToy.seller_email}</p>
              <p>Price: {selectedToy.price}</p>
              <p>Available Quantity: {selectedToy.available_quantity}</p>
              <p>Sub-category: {selectedToy.sub_category}</p>
              <p>Description: {selectedToy.detail_description}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MyToys;


