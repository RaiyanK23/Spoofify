import 
{
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

//importing Pages
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

import ArtistHome from "./pages/ArtistPages/ArtistHome"
import ArtistSignIn from "./pages/ArtistPages/ArtistSignIn"

import UserSignIn from "./pages/UserPages/UserSignIn"
import UserHome from "./pages/UserPages/UserHome"

import Header from "./components/Header"
import "./css/Page.scss"

const Layout = () =>
{
  return(
    <>
      <Header/>
      <Outlet/>
    </>
  );
};


const router  = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<SignIn/>
      },

      {
        path:"/signup",
        element:<SignUp/>
      },

      {
        path:"artist/home",
        element:<ArtistHome/>
      },

      {
        path:"/artist/signin",
        element:<ArtistSignIn/>
      },

      {
        path:"user/home",
        element:<UserHome/>
      },

      {
        path:"/user/signin",
        element:<UserSignIn/>
      },
      
    ]
  }
]);


function App() {
  return(
    <div className="app">
     <div className="container">
      <RouterProvider router={router}/> 
     </div>
    </div>
  );
}

export default App;