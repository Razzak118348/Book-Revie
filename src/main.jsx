import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Error from './Components/Root/Error/Error';
import Home from './Components/Home/Home';
import ListedBook from './Components/ListedBook/ListedBook';
import Recomanded from './Components/Recomanded/Recomanded';
import FamousWriter from './Components/FamousWriter/FamousWriter';
import PageToRead from './Components/PageToRead/PageToRead';


const router= createBrowserRouter([
{
path:'/',
element:<Root></Root>,
errorElement:<Error></Error>,
children:[
  {
    path:'/',
    element:<Home></Home>,
    loader: ()=>fetch('../public/Data.json'),
    
  },
  {
    path:'/listedBook',
    element:<ListedBook></ListedBook>
  },
  {
    path:'/PageToRead',
    element:<PageToRead></PageToRead>
    
  },
  {
    path:'/Recomanded',
    element:<Recomanded></Recomanded>
  },

  {
path:'/famusWriter',
element:<FamousWriter></FamousWriter>
  }
]

}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
