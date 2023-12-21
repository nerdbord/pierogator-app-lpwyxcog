import './App.css'
import { AppLayout } from './layouts/AppLayout/Applayout'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from './pages/Home';
import Recipe from './pages/Recipe';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/recipe",
        element: <Recipe />
      }
    ]
  }
])
function App() {
  return (
    <AppLayout>
     <RouterProvider router={router} />

    </AppLayout>
  )
}

export default App
