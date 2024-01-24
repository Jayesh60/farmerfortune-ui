import "./App.css";
import Explore from "./components/explore/Explore";
import Hero from "./components/home/Hero";
import Trusted from "./components/home/Trusted";
import Navbar from "./components/common/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/register/Register";
import Profile from "./components/profile/Profile";

const router = createBrowserRouter([
  {
    //home page route
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
  {
    // endpoint for explore page
    path: "/explore",
    element: (
      <main>
        <Navbar />
        <Explore />
      </main>
    ),
    errorElement: <div>Error</div>,
  },
  {
    // endpoint for register page
    path: "/register",
    element: (
      <main>
        <Navbar />
        <Register />
      </main>
    ),
    errorElement: <div>Error</div>,
  },
  {
    // endpoint for profile page
    path: "/profile",
    element: (
      <main>
        <Navbar />
        <Profile />
      </main>
    ),
    errorElement: <div>Error</div>,
  },
  {
    // endpoint for transactions page
    path: "/transactions",
    element: (
      <main>
        <Navbar />
        <Profile />
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
