
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Replace with your Firebase authentication imports
import logo from '../../../assets/toystore-logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [userPhoto, setUserPhoto] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const auth = getAuth(); // Replace with your getAuth function

    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in, update state with user info
        setIsLoggedIn(true);
        setUsername(user.displayName || 'John Doe'); // Replace with your user display name property
        setUserPhoto(user.photoURL); // Replace with your user display name property
      } else {
        // User is not logged in, update state accordingly
        setIsLoggedIn(false);
        setUsername('');
      }
    });

    // Clean up the listener
    return () => unsubscribe();
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    const auth = getAuth(); // Replace with your getAuth function

    // Perform logout logic using the Firebase authentication signOut method
    auth.signOut().then(() => {
      setIsLoggedIn(false);
      setUsername('');
    });
  };

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-pink-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Website Logo" className="h-16 w-20" />
          <h1 className="ml-2 text-white font-bold text-lg italic font-serif">Toy Store</h1>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <Link to={"/"} className="text-gray-300 hover:text-white px-4 py-2">Home</Link>
          <Link to={"/alltoys"} className="text-gray-300 hover:text-white px-4 py-2"> All Toys</Link>

          {/* <a href="/all-toys" className="block px-4 py-2 text-gray-300 hover:text-white">
            All Toys
          </a> */}
          {isLoggedIn && (
            <div className="relative group">
              <Link to={'/mytoys'} className="text-gray-300 hover:text-white px-4 py-2 focus:outline-none">
                My Toys</Link>
              <Link to={'/addatoy'} className="text-gray-300 hover:text-white px-4 py-2 focus:outline-none">
                Add A Toy</Link>

              {/* <button className="text-gray-300 hover:text-white px-4 py-2 focus:outline-none">
              Add A Toy
              </button> */}
              {/* <div className="absolute hidden bg-gray-800 rounded-lg py-2 space-y-2 z-10 group-hover:block">

                <a href="/my-toys" className="block px-4 py-2 text-gray-300 hover:text-white">
                  My Toys
                </a>
                <a href="/add-toy" className="block px-4 py-2 text-gray-300 hover:text-white">
                  Add A Toy
                </a>
              </div> */}
            </div>
          )}
          <a href="/blogs" className="text-gray-300 hover:text-white px-4 py-2">
            Blogs
          </a>
          {isLoggedIn ? (
            <div className="flex items-center ml-4">
              <img
                src={userPhoto}
                alt={username}
                className="h-8 w-8 rounded-full cursor-pointer"
                title={username}
              />
              <span className="text-white ml-2 cursor-pointer">{username}</span>
              <button
                className="text-gray-300 hover:text-white px-4 py-2 ml-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <a href="/login" className="text-gray-300 hover:text-white px-4 py-2">
              Login
            </a>
          )}
        </div>
        <div className="sm:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-pink-800 py-2">
          <Link to={"/"} className="text-gray-300 hover:text-white px-4 py-2">Home</Link>
          <Link to={"/alltoys"} className="text-gray-300 hover:text-white px-4 py-2"> All Toys</Link>
          {isLoggedIn && (
            <div className="relative group">
              <Link to={'/mytoys'} className="text-gray-300 hover:text-white px-4 py-2 focus:outline-none">
                My Toys</Link>
              <Link to={'/addatoy'} className="text-gray-300 hover:text-white px-4 py-2 focus:outline-none">
                Add A Toy</Link>
              {/* <div className="absolute hidden bg-gray-800 rounded-lg py-2 space-y-2 z-10">
                <a href="/all-toys" className="block px-4 py-2 text-gray-300 hover:text-white">
                  All Toys
                </a>
                <a href="/my-toys" className="block px-4 py-2 text-gray-300 hover:text-white">
                  My Toys
                </a>
                <a href="/add-toy" className="block px-4 py-2 text-gray-300 hover:text-white">
                  Add A Toy
                </a>
              </div> */}
            </div>
          )}
          <Link to={'/blogs'} className="block text-gray-300 hover:text-white px-4 py-2">Blogs</Link>
          {/* <a href="/blogs" className="block text-gray-300 hover:text-white px-4 py-2">
            Blogs
          </a> */}
          {isLoggedIn ? (
            <div>
              <hr className="border-gray-700 my-2" />
              <div className="flex items-center px-4 py-2">
                <img
                  src={userPhoto}
                  alt={username}
                  className="h-8 w-8 rounded-full cursor-pointer"
                  title={username}
                />
                <span className="text-white ml-2 cursor-pointer">{username}</span>
              </div>
              <div className="px-4 py-2">
                <button
                  className="text-gray-300 hover:text-white w-full text-left focus:outline-none"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to={'/login'} className="block text-gray-300 hover:text-white px-4 py-2">Login</Link>
            // <a href="/login" className="block text-gray-300 hover:text-white px-4 py-2">
            //   Login
            // </a>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
