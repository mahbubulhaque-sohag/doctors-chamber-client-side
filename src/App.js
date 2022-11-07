import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router/Router';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
