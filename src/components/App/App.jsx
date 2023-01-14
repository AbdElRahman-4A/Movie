import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContext } from "../../Context/AuthStore";
import About from "../About/About";
import Details from "../Details/Details";
import Home from "../Home/Home";
import Login from "../Login/Login";
import MasterLayout from "../MasterLayout/MasterLayout";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import People from "../People/People";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Register from "../Register/Register";
import Tvshows from "../Tvshows/Tvshows";
import "./App.css";
import { Offline, Online } from "react-detect-offline";

function App() {
  let { userData, saveUserData, logout } = useContext(AuthContext);

  let routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout userData={userData} logout={logout} />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute userData={userData}>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "about",
          element: (
            <ProtectedRoute userData={userData}>
              <About />
            </ProtectedRoute>
          ),
        },
        {
          path: "movies",
          element: (
            <ProtectedRoute userData={userData}>
              <Movies />
            </ProtectedRoute>
          ),
        },
        {
          path: "tvshows",
          element: (
            <ProtectedRoute userData={userData}>
              <Tvshows />
            </ProtectedRoute>
          ),
        },
        {
          path: "people",
          element: (
            <ProtectedRoute userData={userData}>
              <People />
            </ProtectedRoute>
          ),
        },
        {
          path: "details/:id/:mediaType",
          element: (
            <ProtectedRoute userData={userData}>
              <Details />
            </ProtectedRoute>
          ),
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute>
              <Profile userData={userData} />
            </ProtectedRoute>
          ),
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login saveUserData={saveUserData} />,
        },
      ],
    },
  ]);
  return (
    <div>
        
      <div>
        <Online>
          <RouterProvider router={routes} />
        </Online>
        <Offline><h1 className="text-center text-bg-danger my-5 p-5 ">You Are Offline</h1></Offline>
      </div>
    </div>
  );
}

export default App;
