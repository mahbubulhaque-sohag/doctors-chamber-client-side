import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";
import ReviewField from "../../Pages/Review/ReviewField";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

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
                loader: ()=> fetch('http://localhost:5000/servicesThree')
            },
            {
                path: '/addService',
                element: <AddService/>
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog/></PrivateRoute>
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
                path: '/myReviews',
                element: <MyReviews/>
            },
            {
                path: '/review',
                element: <PrivateRoute><Review/></PrivateRoute>
            },
            {
                path: '/reviewField',
                element: <PrivateRoute><ReviewField/></PrivateRoute>
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