import './App.css';
import Navbar from './components/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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