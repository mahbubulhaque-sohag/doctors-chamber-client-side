import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";

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