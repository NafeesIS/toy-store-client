// import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
// // import { useHistory } from "react-router-dom";
// import Swal from "sweetalert2";

// const MyToys = () => {
//   const { user } = useContext(AuthContext);
//   const url = `http://localhost:5000/mytoys?email=${user.email}`;

//   const [toysData, setToysData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     fetch(url)
//       .then(res => res.json())
//       .then(data => setToysData(data))
//   }, [])

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   }

//   const filteredToys = toysData.filter(toy =>
//     toy.toy_name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: 'Are You Sure!',
//       text: "you won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:5000/mytoys/${id}`, {
//           method: 'DELETE',
//         })
//           .then(res => {
//             if (res.ok) {
//               // Toy successfully deleted
//               // Update the toysData state or fetch the updated list of toys

//               // Option 1: Update the toysData state
//               setToysData(prevToysData => prevToysData.filter(toy => toy._id !== id));

//               // Option 2: Fetch the updated list of toys
//               // fetch(url)
//               //   .then(res => res.json())
//               //   .then(data => setToysData(data));

//               console.log(`Deleted toy with id ${id}`);
//               Swal.fire({
//                 title: 'Delete!',
//                 text: 'Deleted Successfully!',
//                 icon: 'delete',
//                 confirmButtonText: 'Cool'
//               });
//             } else {
//               // Handle unsuccessful deletion
//               console.error(`Error deleting toy with id ${id}`);
//             }
//           })
//           .catch(error => {
//             // Handle error here
//             console.error('Error deleting toy:', error);
//           });
//       }
//     });
//   };



//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-5xl text-center text-pink-800 my-8 font-bold font-serif italic mb-4">My Toys</h1>
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search by Toy Name"
//           className="px-4 py-2 border border-gray-400 rounded-md w-full"
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b-2 border-gray-400 font-bold text-left">Seller</th>
//               <th className="py-2 px-4 border-b-2 border-gray-400 font-bold text-left">Toy Name</th>
//               <th className="py-2 px-4 border-b-2 border-gray-400 font-bold text-left">Sub-category</th>
//               <th className="py-2 px-4 border-b-2 border-gray-400 font-bold text-right">Price</th>
//               <th className="py-2 px-4 border-b-2 border-gray-400 font-bold text-right">Available Quantity</th>
//               <th className="py-2 px-4 border-b-2 border-gray-400"></th>
//               <th className="py-2 px-4 border-b-2 border-gray-400"></th>
//               <th className="py-2 px-4 border-b-2 border-gray-400"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredToys.slice(0, 20).map((toy, index) => (
//               <tr key={index} className="hover:bg-gray-100">
//                 <td className="py-2 px-4 border-b border-gray-300 text-left">{toy.seller_name || 'N/A'}</td>
//                 <td className="py-2 px-4 border-b border-gray-300 text-left">{toy.toy_name}</td>
//                 <td className="py-2 px-4 border-b border-gray-300 text-left">{toy.sub_category}</td>
//                 <td className="py-2 px-4 border-b border-gray-300 text-right">{toy.price}</td>
//                 <td className="py-2 px-4 border-b border-gray-300 text-center">{toy.available_quantity}</td>
//                 <td className="py-2 px-4 border-b border-gray-300">
//                   <div className="btn-group">
//                     <Link to={`/toydetails/${toy._id}`}><button className="btn btn-primary" >View Details</button></Link>
//                     <Link to={`/edittoy/${toy._id}`}><button className="btn btn-secondary" >Edit</button></Link>

//                     <button className="btn btn-danger" onClick={() => handleDelete(toy._id)}>Delete</button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyToys;




import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

// Call setAppElement with a valid element selector
Modal.setAppElement('#root');

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/mytoys?email=${user.email}`;

  const [toysData, setToysData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setToysData(data))
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
        fetch(`http://localhost:5000/mytoys/${id}`, {
          method: 'DELETE',
        })
          .then(res => {
            if (res.ok) {
              // Toy successfully deleted
              // Update the toysData state or fetch the updated list of toys

              // Option 1: Update the toysData state
              setToysData(prevToysData => prevToysData.filter(toy => toy._id !== id));

              // Option 2: Fetch the updated list of toys
              // fetch(url)
              //   .then(res => res.json())
              //   .then(data => setToysData(data));

              console.log(`Deleted toy with id ${id}`);
              Swal.fire({
                title: 'Delete!',
                text: 'Deleted Successfully!',
                icon: 'delete',
                confirmButtonText: 'Cool'
              });
            } else {
              // Handle unsuccessful deletion
              console.error(`Error deleting toy with id ${id}`);
            }
          })
          .catch(error => {
            // Handle error here
            console.error('Error deleting toy:', error);
          });
      }
    });
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
            {filteredToys.slice(0, 20).map((toy, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-300 text-left">{toy.seller_name || 'N/A'}</td>
                <td className="py-2 px-4 border-b border-gray-300 text-left">{toy.toy_name}</td>
                <td className="py-2 px-4 border-b border-gray-300 text-left">{toy.sub_category}</td>
                <td className="py-2 px-4 border-b border-gray-300 text-right">{toy.price}</td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">{toy.available_quantity}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <div className="btn-group">
                    {/* Pass the toy object to the openModal function */}
                    <button className="btn btn-primary" onClick={() => openModal(toy)}>View Details</button>
                    <Link to={`/edittoy/${toy._id}`}><button className="btn btn-secondary" >Edit</button></Link>

                    <button className="btn btn-danger" onClick={() => handleDelete(toy._id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
                <p>Price: ${selectedToy.price}</p>
                <p>Rating: {selectedToy.rating}</p>
                <p>Available Quantity: {selectedToy.available_quantity}</p>
                <p>Detail Description: {selectedToy.detail_description}</p>
                
              </div>
            </div>

          
        )}
      </Modal>
    </div>
  );

};
export default MyToys;

