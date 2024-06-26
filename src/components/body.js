import React from 'react'
import Login from './login';
import Browse from './browse';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';



 const Body = () => {
    
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },
        {
            path:"/browse",
            element:<Browse/>,
        }
    ])

   


  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}
export default Body;

