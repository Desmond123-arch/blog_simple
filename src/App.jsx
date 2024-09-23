import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./components/Layout/MainLayout"
import { mainRoutes } from "./routes"
import ErrorPage from "./components/404page"

function App() {

  const router = createBrowserRouter([
    {
      element:<MainLayout/>,
      errorElement: <ErrorPage/>,
      children: mainRoutes
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
