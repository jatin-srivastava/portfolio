import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tailwind.css'
// import App from './App';
import Homepage from './component/Homepage.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';




const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<Homepage/>}>

  </Route>

  </>
));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
