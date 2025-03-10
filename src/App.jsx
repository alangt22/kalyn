import Carrossel from "./componentes/carrossel/Carrossel"
import Footer from "./componentes/footer/Footer"
import Nav from "./componentes/nav/Nav"
import { Outlet, useLocation } from 'react-router-dom';
import { CarrinhoProvider } from "./context/CarrinhoContext"
import Home from "./pages/Home"

function App() {
  const location = useLocation();

  // Condição para verificar se a rota é diferente de Home ("/")
  const showOutlet = location.pathname !== "/";
  

  return (
    <CarrinhoProvider>
    <div className="app">
      <Home/>
      <Carrossel/>
      {showOutlet && <Outlet className='hidden' />}
      <Nav/>
      <Footer/>
    </div>
    </CarrinhoProvider>
  )
}

export default App
