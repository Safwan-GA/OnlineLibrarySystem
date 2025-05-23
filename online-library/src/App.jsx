import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Home from '../components/Home';
import BrowseBooks from '../components/BrowseBooks';
import BookDetails from '../components/BookDetails';
import AddBook from '../components/AddBook';
import Error from '../components/Error';
import Layout from '../components/Layout';
import AllBooks from '../components/AllBooks'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path:'/books/All', element:<AllBooks />},
      { path: '/books/:category', element: <BrowseBooks /> },
      { path: '/book/:id', element: <BookDetails /> },
      { path: '/add', element: <AddBook /> },
      { path: '*', element: <Error /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;