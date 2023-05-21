import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import AllToys from "../Pages/AllToys/AllToys";
import EditToy from "../Pages/EditToy/EditToy";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import SuperHeroToyDetails from "../Pages/SuperHeroToyDetails/SuperHeroToyDetails";
import TransformerToyDetails from "../Pages/TransformerToyDetails/TransformerToyDetails";
import ConstructorToyDetails from "../Pages/ConstructorToyDetails/ConstructorToyDetails";
// import LatestToys from "../Pages/LatestToys/LatestToys";
// import HighestSellings from "../Pages/HighestSellings/HighestSellings";
import HighestSellingsViewDetails from "../Pages/HighestsellingsViewDetails/HighestsellingsViewDetails";
import LatesToysViewDetails from "../Pages/LatestToysViewDetails/LatestToysViewDetails";
import Blogs from "../Pages/Blogs/Blogs";
import PagerNotFound from "../Pages/PageNotFound/PagerNotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>,

            },
            {
                path: '/mytoys',
                element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
            },
            {
                path: '/addatoy',
                element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
            },
            {
                path: '/edittoy/:id',
                element: <EditToy></EditToy>,
                loader: ({ params }) => fetch(`http://localhost:5000/mytoys/${params.id}`)
            },
            {
                path: '/toydetails/:id',
                element: <ToyDetails></ToyDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/alltoys/${params.id}`)
            },
            {
                path: '/superherotoydetails/:id',
                element: <SuperHeroToyDetails></SuperHeroToyDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/superhero/${params.id}`)
            },
            {
                path: '/transformertoydetails/:id',
                element: <TransformerToyDetails></TransformerToyDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/transformer/${params.id}`)
            },
            {
                path: '/constructortoydetails/:id',
                element: <ConstructorToyDetails></ConstructorToyDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/constructor/${params.id}`)
            },
            {
                path: '/latesttoysviewdetails/:id',
                element: <LatesToysViewDetails>,</LatesToysViewDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/latesttoys/${params.id}`)
            },
            {
                path: '/highestsellingsviewdetails/:id',
                element: <HighestSellingsViewDetails></HighestSellingsViewDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/highestsellings/${params.id}`)
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            },
            {
                path: '*',
                element:<PagerNotFound></PagerNotFound>
            }

        ]
    },
]);



export default router;