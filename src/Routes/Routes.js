import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BoyFashion from "../Pages/Category/BoyFashion";
import Computers from "../Pages/Category/Computers";
import Cosmetics from "../Pages/Category/Cosmetics";
import Gadgets from "../Pages/Category/Gadgets";
import GirlFashion from "../Pages/Category/GirlFashion";
import HomeDecoration from "../Pages/Category/HomeDecoration";
import HouseItems from "../Pages/Category/HouseItems";
import Jewellery from "../Pages/Category/Jewellery";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/boyFashion',
                element: <BoyFashion></BoyFashion>
            },
            {
                path: '/girlFashion',
                element: <GirlFashion></GirlFashion>
            },
            {
                path: '/household',
                element: <HouseItems></HouseItems>
            },
            {
                path: '/computers',
                element: <Computers></Computers>
            },
            {
                path: '/gadgets',
                element: <Gadgets></Gadgets>
            },
            {
                path: '/homedecoration',
                element: <HomeDecoration></HomeDecoration>
            },
            {
                path: '/cosmetics',
                element: <Cosmetics></Cosmetics>
            },
            {
                path: '/jewellery',
                element: <Jewellery></Jewellery>
            },
        ]
    }
])
export default router;