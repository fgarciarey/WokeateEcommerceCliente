import './App.css';
import Main from './components/Main'
import Product from './components/Product'

import Header from './components/Header';
import Footer from './components/Footer';

import Profile from './components/Profile'

import Catalog from './components/Catalog'

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import Login from './components/Login';
import Register from './components/Register';

import ProductState from './context/Product/ProductState';
import UserState from './context/User/UserState';
import LayoutState from './context/Layout/LayoutState'

import AuthRoute from './components/Routes/AuthRoute';
import PrivateRoute from './components/Routes/PrivateRoute'
import PublicRoute from './components/Routes/PublicRoute';
import {Reservas}  from './components/Reservas';
import About from "./components/About";



function App() {
  return (
    <>
    <LayoutState>
      <ProductState>
        <UserState>
          <Router>
            <Header />

            <Switch>

              {/* RUTAS PRIVADAS */}
              <PrivateRoute exact path="/perfil" component={ Profile } />          

              {/* RUTAS DE AUTENTICACIÓN */}
              <AuthRoute exact path="/iniciar-sesion" component={Login} />
              <AuthRoute exact path="/crear-cuenta" component={Register} />

              {/* RUTAS ESTÁTICAS */}
              <PublicRoute exact path="/catalogo" component={Catalog} />

              {/* RUTAS ESTATICAS */}
              <PublicRoute exact path="/reserv" component={Reservas} />
              <PublicRoute exact path="/about" component={About} />

              

              {/* RUTAS DINÁMICAS */}
              <PublicRoute exact path="/:productId" component={Product} />

              {/* RUTA BASE */}
              <PublicRoute exact path="/" component={Main} />

            </Switch>

            <Footer />
          </Router>
          </UserState>
        </ProductState>
      </LayoutState>
    </>
  );
}

export default App;
