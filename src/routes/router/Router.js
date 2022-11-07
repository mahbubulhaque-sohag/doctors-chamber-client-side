import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main/Main");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/addService',
                element: <AddService/>
            },
        ]
    }
])