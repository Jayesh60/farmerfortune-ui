import "./App.css";
import Explore from "./components/explore/Explore";
import Hero from "./components/home/Hero";
import Trusted from "./components/home/Trusted";
import Navbar from "./components/common/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./components/register/CreatePost";
import MyPosts from "./components/profile/MyPosts";
import Register from "./components/register/Register";
import Transactions from "./components/transactions/Transactions";
import AddPosts from "./components/profile/AddPosts";
import EditPost from "./components/profile/EditPost";
import Details from "./components/details/Details";

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
    // endpoint for explore page
    path: "/details",
    element: (
      <main>
        <Navbar />
        <Details />
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
        <CreatePost />
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
        <MyPosts />
        <AddPosts />
        <EditPost />
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
        <Transactions />
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
