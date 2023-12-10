import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Hero/></div>,
    errorElement: <div>Error</div>
  },
]);



function App() {
  return (
    <div className="App text-black bg-[#E9E9E9]">
      <Navbar/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;