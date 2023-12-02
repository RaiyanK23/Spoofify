import 
{
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

//importing Pages
import Home from "./pages/Home"
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
        element:<Home/>
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