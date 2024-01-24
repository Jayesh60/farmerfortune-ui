import "./App.css";
import Hero from "./components/home/Hero";
import Trusted from "./components/home/Trusted";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <main>
        <Navbar />
        <Hero />
        <Trusted />
      </main>
    ),
    errorElement: <div>Error</div>,
  },
]);

function App() {
  return (
    <div className="App text-black bg-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
