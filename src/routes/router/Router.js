import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ReviewField from "../../Pages/Review/ReviewField";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import Privateroute from "./Privateroute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main/Main");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch('http://localhost:5000/services/3')
            },
            {
                path: '/addService',
                element: <AddService/>
            },
            {
                path: '/services',
                element: <Services/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/review',
                element: <Privateroute><ReviewField/></Privateroute>
            },
            {
                path: '/services/:id',
                loader: ({params})=>{
                    console.log(params)
                   return fetch
                (`http://localhost:5000/services/${params.id}`)},
                element: <ServiceDetails/>
            },
        ]
    }
])