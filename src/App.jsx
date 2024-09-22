import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./components/Layout/MainLayout"
import { mainRoutes } from "./routes"
import { blogRoutes } from "./routes"
import BlogLayout from "./components/Layout/Bloglayout"
function App() {

  const router = createBrowserRouter([
    {
      element:<MainLayout/>,
      children: mainRoutes
    },
    {
      element: <BlogLayout/>,
      children: blogRoutes
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
