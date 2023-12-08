import 
{
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

//importing Pages
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

import ArtistSignIn from "./pages/ArtistSignIn"
import UserSignIn from "./pages/UserSignIn"

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
        path:"/Home",
        element:<Home/>
      },

      {
        path:"/signup",
        element:<SignUp/>
      },

      {
        path:"/artist/signin",
        element:<ArtistSignIn/>
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