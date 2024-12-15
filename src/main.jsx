import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import {store} from "./app/store"
import { Provider } from 'react-redux'


const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  children: [
    {
      path: "",
      element: <Home/>,
    },
    {
      path : "/signup",
      element : <Signup/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]
}
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router} />   
  </Provider> 
)
