import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import provider
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// components
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Maquiagem from './componentes/produtos/maquiagem/Maquiagem.jsx'
import Olhos from './componentes/produtos/olhos/Olhos.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/maquiagem',
        element: <Maquiagem/>
      },
      {
        path: '/olhos',
        element: <Olhos/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
