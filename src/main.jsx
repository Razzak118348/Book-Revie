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
import BookDetails from './Components/BookDetails/BookDetails';
// import ReadBooks from './Components/ReadBooks/ReadBooks';
// import Wishlist from './Components/Wishlist/Wishlist';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../public/Data.json'),

      },
      {
        path: '/Singlebook/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../public/Data.json'),
      },
      {
        path: '/listedBook',
        element: <ListedBook></ListedBook>
      },
      // {
      //   path:'/read',
      //   element:<ReadBooks></ReadBooks>
      // },
      // {
      //   path:'/wishlist',
      //   element:<Wishlist></Wishlist>
      // },
      {
        path: '/PageToRead',
        element: <PageToRead></PageToRead>

      },
      {
        path: '/Recomanded',
        element: <Recomanded></Recomanded>
      },

      {
        path: '/famusWriter',
        element: <FamousWriter></FamousWriter>
      }
    ]

  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
